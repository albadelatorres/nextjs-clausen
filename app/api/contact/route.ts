// pages/api/contact.ts
import sgMail from "@sendgrid/mail";

// Set your API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const { navn, email, telefon, postnummer, besked } = await request.json();

    // Compose the email message
    const msg = {
      to: email, // Email the user who submitted the form
      from: process.env.SENDGRID_FROM_EMAIL as string, // Your verified sender email (e.g. fmc@fugemesterclausen.dk)
      subject: "Vi har modtaget din besked",
      text: `Hej ${navn},

Vi har modtaget din besked og vil kontakte dig snarest. Tak for din interesse i Fugemester Clausen!

Med venlig hilsen,
Daniel`,
      html: `<p>Hej ${navn},</p>
             <p>Vi har modtaget din besked og vil kontakte dig snarest. Tak for din interesse i <strong>Fugemester Clausen</strong>!</p>
             <p>Med venlig hilsen,<br/>Daniel</p>`,
    };

    // Send the email via SendGrid
    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("SendGrid error:", error);
    return new Response(
      JSON.stringify({ error: "Error sending email" }),
      { status: 500 }
    );
  }
}