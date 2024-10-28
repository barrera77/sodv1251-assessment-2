import express from "express";
import { getAllEvents } from "../controllers/event-controller.js";

const eventRouter = express.Router();
const app = express();

app.get("/", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events" });
  }
});

export default eventRouter;
