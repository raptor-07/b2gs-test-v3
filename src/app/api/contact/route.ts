import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { recaptchaToken, ...formData } = body;

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Log the form data after reCAPTCHA verification
    console.log("Received contact form submission:", formData);

    // Forward to AWS Lambda
    const response = await fetch(
      "https://1pixxnlkl6.execute-api.us-east-1.amazonaws.com/default/b2gs_proc_unreg_usr_query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log("Lambda API response:", response);

    if (!response.ok) {
      throw new Error(`Lambda API error: ${response.status}`);
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Enhanced error handling
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    console.error("Error processing contact form:", error);

    // Type guard for Error objects
    if (error instanceof Error && error.message.includes("Lambda API error")) {
      return NextResponse.json(
        { message: "Error communicating with server" },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
