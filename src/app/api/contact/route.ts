import { NextResponse } from "next/server";

/**
 * Contact form handler (stub).
 *
 * Currently validates the payload and logs it server-side, returning success.
 * TODO: integrate an email provider (e.g. Resend, SendGrid, Nodemailer) or a
 * CRM webhook here to actually deliver the inquiry to the team inbox.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    // TODO: send email / persist to CRM.
    console.log("New contact inquiry:", {
      name,
      email,
      phone: body.phone ?? "",
      service: body.service ?? "",
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
