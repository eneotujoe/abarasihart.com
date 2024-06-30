import { NextResponse } from "next/server"
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    } as nodemailer.TransporterOptions)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'eneotujoe@gmail.com',
      subject: 'eneotu.com contact form submission',
      html: `
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Message: ${message}</li>
      `,
    }
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    )
  } catch (error) {
    // console.error('Error sending email:', error);
    return new NextResponse("Failed to send message.", { status: 500 })
  }
}