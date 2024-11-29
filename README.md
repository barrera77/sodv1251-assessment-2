# Event Portal - README

This document outlines the setup, functionality, and compliance of the Event Portal project, a server-side event management system built with Node.js, Express, and MongoDB Atlas. This application allows users to create, read, update, and delete events, manage attendees, and send email notifications, among other features.

Please watch video-demo for functionality

## Table of Contents

1. [Project Overview](#project-overview)
2. [Requirements Compliance](#requirements-compliance)
3. [Setup Instructions](#setup-instructions)
4. [Code Snippets](#code-snippets)

## Project Overview

The Event Portal is designed to assist a local community center in managing events such as workshops, seminars, and social gatherings. The primary functionalities include:

- Event creation, updating, deletion, and viewing.
- Attendee management.
- Email notifications to attendees using Gmail.
- File uploads for event images.
- A calendar view for scheduled events.

## Requirements Compliance

The application satisfies the following requirements:
Key functionalities:

- CRUD Operations: Create, read, update, and delete event records.
- File Uploads: Manage event-related image uploads.
- Email Notifications: Notify attendees using Gmail via nodemailer.
- Database Management: Data stored and managed using MongoDB Atlas.
- Server Setup: Built on Node.js with Express for routing and API development.

### 1. **Node.js and Express Setup**

The project is built using Node.js and Express, allowing for a robust server-side application. Express routes handle various API calls for event magement.

**File: `server.js`**

```javascript
import express from "express";
import eventRouter from "./routes/event-router.js";
import organizerRouter from "./routes/organizer-router.js";
import attandeeRouter from "./routes/attendee-router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/events", eventRouter);
app.use("/api/organizers", organizerRouter);
app.use("/api/attendees", attandeeRouter);
```

### 2. **Database Integration with MongoDB Atlas**

The application uses MongoDB Atlas, which is a NoSQL database. The data models are created using Mongoose to define schemas for events, attendees, and organizers.

**File: `models/Event.js`**

```javascript
// File source: server.js
// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected Successfully to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));
```

### 3. **CRUD Operations**

The application implements CRUD operations for managing events. This is achieved using Express routes that interact with the MongoDB database.

**File: `routes/event-router.js`**

```javascript
// File source: event-router.js
import express from "express";
import {
  getAllEvents,
  createEvent,
  editEvent,
} from "../controllers/event-controller.js";

const eventRouter = express.Router();

eventRouter.get("/", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events" });
  }
});

eventRouter.post("/", async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = await createEvent(eventData);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Error creating event" });
  }
});
```

### 4. **File Uploads**

The application supports file uploads for event images using Multer, allowing users to upload images related to events.

**File: `server.js`**

```javascript
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
```

### 5. **Email Functionality**

Email notifications are sent to attendees using Nodemailer and Gmail SMTP. The application allows users to send emails directly from the platform.

**File: `server.js`**

```javascript
import nodemailer from "nodemailer";

app.post("/send-email", async (req, res) => {
  const { to, subject } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_USERNAME,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_USERNAME,
    to: to,
    subject: subject,
    text: "Event Confirmation.",
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (error) {
    res.status(500).send("Failed to send email");
  }
});
```

### 6. **Security Measures**

Security measures such as environment variables for sensitive data (like Gmail credentials) are implemented using dotenv.

**File: `.env`**

```plaintext
SENDER_USERNAME=your_email@gmail.com
SENDER_PASSWORD=your_password
MONGODB_URI=your_mongo_connection_string
```

## Setup Instructions

To set up the Event Portal project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/event-portal.git
   cd event-portal
   ```

2. **Install Dependencies**
   Install the required packages using npm.

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add your environment variables:

   ```plaintext
   SENDER_USERNAME=your_email@gmail.com
   SENDER_PASSWORD=your_password
   MONGODB_URI=your_mongo_connection_string
   ```

4. **Run the Server**
   Use Nodemon to start the server for development.

   ```bash
   npm run dev
   ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:5000` or click the link displayed in the console to access the Event Portal.

## Conclusion

The Event Portal project successfully implements an event management system that meets the specified requirements. The use of Node.js, Express, MongoDB Atlas, and Nodemailer provides a robust and scalable solution for managing community events effectively. The code snippets included illustrate how the application complies with the project requirements, demonstrating a clear and functional implementation.
