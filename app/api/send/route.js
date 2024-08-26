import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Fetch email credentials
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

export async function POST(req) {
  try {
    // Parse request body as JSON
    const body = await req.json();
    const { email, subject, message } = body;

    // Create transporter object
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // HTML content for user sending message
    const recipientHtml = `
      <p>Thank you for contacting me!</p>
      <p>Message submitted:</p>
      <p>${message}</p>
    `;

    // HTML content for host
    const hostUserHtml = `
      <p>Message from ${email}:</p>
      <p>${message}</p>
    `;

    // Email options for user sending message
    const optionsForRecipient = {
      from: emailUser,
      to: email,
      subject: subject,
      html: recipientHtml,
    };

    // Email options for host
    const optionsForHostUser = {
      from: emailUser,
      to: emailUser,
      subject: subject,
      html: hostUserHtml,
    };

    // Send emails to both parties
    await transporter.sendMail(optionsForRecipient);
    await transporter.sendMail(optionsForHostUser);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
