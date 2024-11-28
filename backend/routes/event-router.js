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

eventRouter.put("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const updatedData = req.body;
    console.log(updatedData);
    const updatedEvent = await editEvent(eventId, updatedData);
    res.status(200).json(updatedEvent);
    console.log(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: "Error editing event", error });
  }
});

export default eventRouter;
