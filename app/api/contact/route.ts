import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, concern, message, ...extraFields } = body;

    // Einfache Validierung
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle erforderlichen Pflichtfelder aus (Name, Telefon, E-Mail)." },
        { status: 400 }
      );
    }

    // Optionaler E-Mail-Dienst (z.B. Resend / SMTP), falls Environment-Variablen gesetzt sind
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@fkd-fahrzeuge.de";

    if (apiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "FKD Fahrzeuge Website <onboarding@resend.dev>",
          to: [recipientEmail],
          subject: `Neue Website-Anfrage: ${concern || "Allgemein"} - ${name}`,
          text: `
Neue Anfrage über die Website fkd-fahrzeuge.de:

Name: ${name}
Telefon: ${phone}
E-Mail: ${email}
Anliegen: ${concern}

Zusatzinformationen:
${Object.entries(extraFields)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join("\n")}

Nachricht:
${message || "Keine Nachricht angegeben"}
          `,
        }),
      });

      if (!resendResponse.ok) {
        console.error("Resend API Fehler:", await resendResponse.text());
      }
    } else {
      // Wenn noch kein API-Key hinterlegt ist, loggen wir die Anfrage serverseitig
      console.log("Neue Kontaktanfrage erhalten (Dev/Statisch):", {
        name,
        phone,
        email,
        concern,
        message,
        extraFields,
      });
    }

    return NextResponse.json(
      { success: true, message: "Anfrage erfolgreich übermittelt." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Anfrage:", error);
    return NextResponse.json(
      { error: "Beim Senden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns direkt an." },
      { status: 500 }
    );
  }
}
