import { NextResponse } from "next/server";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/schemas/contact-form";
import { privacyDebug } from "@/features/privacy/utils/debug";

interface ConsentLogEntry {
  timestamp: string;
  formType: "contact";
  clientIp: string;
  userAgent: string | null;
  consent: {
    accepted: boolean;
    timestamp: string;
    analyticsEnabled: boolean;
  };
  formId: string;
}

interface LambdaData extends ContactFormData {
  metadata: {
    timestamp: string;
    clientIp: string;
    userAgent: string | null;
    consentId: string;
  };
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const debug = privacyDebug.group("reCAPTCHA Verification");
  
  try {
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: "POST" }
    );

    const recaptchaData = await recaptchaResponse.json();
    privacyDebug.init("reCAPTCHA response:", recaptchaData);
    return recaptchaData.success;
  } catch (error) {
    privacyDebug.error("reCAPTCHA verification failed:", error);
    return false;
  } finally {
    debug.end();
  }
}

// Log privacy consent
function logPrivacyConsent(
  data: ContactFormData,
  req: Request
): ConsentLogEntry {
  const debug = privacyDebug.group("Contact Form Privacy");

  const consentLog: ConsentLogEntry = {
    timestamp: new Date().toISOString(),
    formType: "contact",
    clientIp: req.headers.get("x-forwarded-for") || "unknown",
    userAgent: req.headers.get("user-agent"),
    consent: {
      accepted: data.privacyConsent.accepted,
      timestamp: data.privacyConsent.timestamp,
      analyticsEnabled: data.privacyConsent.analyticsEnabled,
    },
    formId: crypto.randomUUID(), // For audit trail
  };

  privacyDebug.consent("Contact form consent logged:", consentLog);
  debug.end();

  return consentLog;
}

export async function POST(req: Request) {
  const debug = privacyDebug.group("Contact Form Submission");

  try {
    // Parse and validate request body
    const body = await req.json();
    privacyDebug.init("Received form data:", body);

    // Transform date string to Date object
    const transformedBody = {
      ...body,
      date: new Date(body.date)
    };

    // Validate date before schema validation
    if (isNaN(transformedBody.date.getTime())) {
      privacyDebug.error("Invalid date format:", body.date);
      return NextResponse.json(
        { message: "Invalid date format" },
        { status: 400 }
      );
    }

    privacyDebug.init("Transformed date:", transformedBody.date);

    // Validate transformed data
    const validatedData = contactFormSchema.parse(transformedBody);
    privacyDebug.init("Validated form data:", validatedData);

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!recaptchaValid) {
      privacyDebug.error("reCAPTCHA verification failed");
      return NextResponse.json(
        { message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Log privacy consent
    const consentLog = logPrivacyConsent(validatedData, req);

    // Prepare data for Lambda
    const lambdaData: LambdaData = {
      ...validatedData,
      metadata: {
        timestamp: new Date().toISOString(),
        clientIp: req.headers.get("x-forwarded-for") || "unknown",
        userAgent: req.headers.get("user-agent"),
        consentId: consentLog.formId,
      },
    };

    // Forward to AWS Lambda
    const lambdaResponse = await fetch(
      "https://1pixxnlkl6.execute-api.us-east-1.amazonaws.com/default/b2gs_proc_unreg_usr_query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lambdaData),
      }
    );

    if (!lambdaResponse.ok) {
      throw new Error(`Lambda API error: ${lambdaResponse.status}`);
    }

    privacyDebug.init("Form processed successfully");
    debug.end();

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Enhanced error handling
    if (error instanceof SyntaxError) {
      privacyDebug.error("Invalid request body");
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      if (error.message.includes("Lambda API error")) {
        privacyDebug.error("Lambda API error:", error);
        return NextResponse.json(
          { message: "Error communicating with server" },
          { status: 502 }
        );
      }
    }

    privacyDebug.error("Contact form error:", error);
    debug.end();

    return NextResponse.json(
      { message: "Failed to submit form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
