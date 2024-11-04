import express from "express";
import {
  getEventsSchedule,
  createEventSchedule,
} from "../controllers/schedule-controller.js";

const scheduleRouter = express.Router();

scheduleRouter.get("/", async (req, res) => {
  try {
    const schedule = await getEventsSchedule();
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schedule" });
  }
});

scheduleRouter.post("/", async (req, res) => {
  try {
    const scheduleData = req.body;
    const newSchedule = await createEventSchedule(scheduleData);
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ message: "Error saving schedule" });
  }
});

export default scheduleRouter;
