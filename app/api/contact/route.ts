import { NextResponse } from "next/server";

const MAX_FILES = 3;
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB pro Datei

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const concern = formData.get("concern");
    const message = formData.get("message");

    // Einfache Validierung der Pflichtfelder
    if (
      typeof name !== "string" || !name.trim() ||
      typeof phone !== "string" || !phone.trim() ||
      typeof email !== "string" || !email.trim()
    ) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle erforderlichen Pflichtfelder aus (Name, Telefon, E-Mail)." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
        { status: 400 }
      );
    }

    // Alle übrigen Textfelder (z.B. wunschmodell, budget, serviceart, ...)
    const knownKeys = new Set(["name", "phone", "email", "concern", "message", "photos"]);
    const extraFields: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (!knownKeys.has(key) && typeof value === "string" && value.trim()) {
        extraFields[key] = value;
      }
    });

    // Angehängte Fahrzeugfotos (max. 3, je max. 5 MB)
    const photos = formData
      .getAll("photos")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0)
      .slice(0, MAX_FILES);

    const oversizedPhoto = photos.find((photo) => photo.size > MAX_FILE_SIZE_BYTES);
    if (oversizedPhoto) {
      return NextResponse.json(
        { error: `Die Datei „${oversizedPhoto.name}“ überschreitet die maximale Größe von 5 MB.` },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@fkd-fahrzeuge.de";
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      // Ohne konfigurierten E-Mail-Dienst geht die Anfrage sonst spurlos verloren.
      // Damit auf Vercel niemals stillschweigend Leads verschwinden, melden wir
      // dem Absender ehrlich einen Fehler, statt fälschlich Erfolg vorzutäuschen.
      console.error(
        "RESEND_API_KEY ist nicht gesetzt – Anfrage kann nicht zugestellt werden:",
        { name, phone, email, concern, message, extraFields, photoCount: photos.length }
      );
      return NextResponse.json(
        {
          error:
            "Der E-Mail-Versand ist aktuell nicht konfiguriert. Bitte kontaktieren Sie uns direkt telefonisch oder per WhatsApp.",
        },
        { status: 503 }
      );
    }

    // Bilder als Base64-Anhänge für den E-Mail-Versand aufbereiten
    const attachments = await Promise.all(
      photos.map(async (photo) => {
        const buffer = Buffer.from(await photo.arrayBuffer());
        return { filename: photo.name, content: buffer.toString("base64") };
      })
    );

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `FKD Fahrzeuge Website <${senderEmail}>`,
        to: [recipientEmail],
        reply_to: email,
        subject: `Neue Website-Anfrage: ${concern || "Allgemein"} - ${name}`,
        text: `
Neue Anfrage über die Website:

Name: ${name}
Telefon: ${phone}
E-Mail: ${email}
Anliegen: ${concern}

Zusatzinformationen:
${Object.entries(extraFields)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join("\n") || "- keine -"}

Nachricht:
${message || "Keine Nachricht angegeben"}

Angehängte Fotos: ${photos.length > 0 ? photos.map((p) => p.name).join(", ") : "keine"}
        `,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("Resend API Fehler:", errorBody);
      return NextResponse.json(
        {
          error:
            "Ihre Anfrage konnte nicht zugestellt werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt telefonisch.",
        },
        { status: 502 }
      );
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
