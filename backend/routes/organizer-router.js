import express from "express";
import { getAllOrganizers } from "../controllers/organizer-controller.js";

const organizerRouter = express.Router();

organizerRouter.get("/", async (req, res) => {
  try {
    const organizers = await getAllOrganizers();
    res.json(organizers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching organizers" });
  }
});

export default organizerRouter;
