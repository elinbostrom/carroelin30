import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstName, lastName, phone, song, hobby, wish, message } =
    await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Dirty Thirty RSVP from ${firstName} ${lastName}`,
    text: message,
    html: `<div>
    <h1>Wohooo!</h1>
    <p>Here comes more information from another attendee:</p>
    <ul>
        <li>First name: ${firstName}</li>
        <li>Last name: ${lastName}</li>
        <li>Phone: ${phone}</li>
        <li>Song: ${song}</li>
        <li>Hobby: ${hobby}</li>
        <li>Wish: ${wish}</li>
        <li>Message: ${message}</li>
    </ul>
</div>`,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      message: "Email sent",
      name: `${firstName} ${lastName}`,
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
