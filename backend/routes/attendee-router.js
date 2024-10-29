import express from "express";
import { getAllAttendees } from "../controllers/attendee-controller.js";

const attandeeRouter = express.Router();

attandeeRouter.get("/", async (req, res) => {
  try {
    const attendees = await getAllAttendees();
    res.json(attendees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendees" });
  }
});

export default attandeeRouter;
