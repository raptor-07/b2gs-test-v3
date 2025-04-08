import { NextResponse } from "next/server";
import { ConsentState, ConsentInteraction } from "@/features/privacy/types";

interface ConsentPayload {
  consent: ConsentState;
  interaction: ConsentInteraction;
}

export async function POST(request: Request) {
  try {
    const payload: ConsentPayload = await request.json();
    
    // Here you would typically store the consent and interaction in your database
    // For now, we'll just log it
    console.log("Consent recorded:", {
      timestamp: new Date().toISOString(),
      consent: payload.consent,
      interaction: payload.interaction,
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    });

    return NextResponse.json(
      { success: true, message: "Consent logged successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging consent:", error);
    return NextResponse.json(
      { success: false, message: "Failed to log consent" },
      { status: 500 }
    );
  }
}
