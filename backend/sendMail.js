import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const myPassword = process.env.SENDER_PASSWORD;
const myUsername = process.env.SENDER_USERNAME;

dotenv.config();

// Configure SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: myUsername,
    pass: myPassword,
  },
});

//configure mail options
const mailOptions = {};
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: {
      name: "Event Management System",
      address: process.env.SENDER_USERNAME,
    },
    to: "alva_mn@hotmail.com",
    cc: "barrera_ml@hotmail.com",
    subject: "Event Confirmation",
    text: "Event Confirmation.",
    attachments: [
      {
        filename: "invitation.pdf",
        path: path.join(__dirname, "invitation.pdf"),
        contentType: "application/pdf",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
