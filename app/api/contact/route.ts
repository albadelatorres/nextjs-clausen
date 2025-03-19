// pages/api/contact.ts
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const { navn, email, telefon, postnummer, besked } = await request.json();

    // Create a single message with 2 personalizations
    const msg = {
      to: [email, process.env.SENDGRID_FROM_EMAIL as string],
      // The verified sender
      from: process.env.SENDGRID_FROM_EMAIL as string,

      // We’ll reuse the same subject/content for both.
      subject: "Vi har modtaget din besked",
      text: `Hej ${navn},

        Vi har modtaget din besked og vil kontakte dig snarest. Tak for din interesse i Fugemester Clausen!

        Her er en kopi af de oplysninger, du har indsendt:
        Navn: ${navn}
        Email: ${email}
        Telefon: ${telefon}
        Postnummer: ${postnummer}
        Besked: ${besked}

        Med venlig hilsen,
        Daniel`,

      html: `<p>Hej ${navn},</p>
             <p>Vi har modtaget din besked og vil kontakte dig snarest. Tak for din interesse i <strong>Fugemester Clausen</strong>!</p>
             <p>Her er en kopi af de oplysninger, du har indsendt:</p>
             <ul>
               <li><strong>Navn:</strong> ${navn}</li>
               <li><strong>Email:</strong> ${email}</li>
               <li><strong>Telefon:</strong> ${telefon}</li>
               <li><strong>Postnummer:</strong> ${postnummer}</li>
               <li><strong>Besked:</strong> ${besked}</li>
             </ul>
             <p>Med venlig hilsen,<br/>Daniel</p>`,
    };

    // Send both emails in one go
    await sgMail.sendMultiple(msg);

    return new Response(JSON.stringify({ message: "Emails sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("SendGrid error:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}