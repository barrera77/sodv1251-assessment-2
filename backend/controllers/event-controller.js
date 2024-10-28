import Event from "../models/Event.js";

export async function getAllEvents() {
  try {
    const events = await Event.find();
    console.log(events);
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}
