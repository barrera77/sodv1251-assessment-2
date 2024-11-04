console.log("Listeners on exit:", process.listeners("exit"));
console.log(
  "Listeners on uncaughtException:",
  process.listeners("uncaughtException")
);

import express from "express";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import eventRouter from "./routes/event-router.js";
import organizerRouter from "./routes/organizer-router.js";
import attandeeRouter from "./routes/attendee-router.js";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import scheduleRouter from "./routes/schedule-router.js";

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected Successfully to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve DB data
app.use("/api/events", eventRouter);
app.use("/api/organizers", organizerRouter);
app.use("/api/attendees", attandeeRouter);
app.use("/api/eventsSchedule", scheduleRouter);

// Serve static assets in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(process.cwd(), "frontend", "public")));
  app.use("/src", express.static(path.join(process.cwd(), "frontend", "src")));
  app.use(
    "/components",
    express.static(path.join(process.cwd(), "frontend", "src", "components"))
  );
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(process.cwd(), "frontend", "public", "index.html")
    );
  });
}

//email
app.post("/send-email", async (req, res) => {
  const { to, cc, bcc, subject } = req.body;

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_USERNAME,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  //configure mail options
  const mailOptions = {
    from: {
      name: "Event Management System",
      address: process.env.SENDER_USERNAME,
    },
    to: to,
    cc: cc || "",
    bcc: bcc || "",
    subject,
    text: "Event Confirmation.", // Replace with actual message
    attachments: [
      /* {
        filename: "invitation.pdf",
        path: path.join(__dirname, "invitation.pdf"),
        contentType: "application/pdf",
      },
      {
        filename: "sample.jpg",
        path: path.join(__dirname, "sample.jpg"),
        contentType: "image/jpg",
      }, */
    ],
  };

  try {
    console.log("Received email data:", req.body);
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
