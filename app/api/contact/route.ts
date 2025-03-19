import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// Manejo de preflight (OPTIONS)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

export async function POST(request: Request) {
  try {
    const { navn, email, telefon, postnummer, besked } = await request.json();

    const msg: MailDataRequired = {
      personalizations: [
        {
          to: [{ email }],
          cc: [{ email: process.env.SENDGRID_FROM_EMAIL as string }],
          subject: "Vi har modtaget din besked",
        },
      ],
      from: process.env.SENDGRID_FROM_EMAIL as string,
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
             <p>Med venlig hilsen,<br/>Daniel</p>`
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ message: "Emails sent successfully" }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("SendGrid error:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}