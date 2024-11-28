import Event from "../models/Event.js";

export async function getAllEvents() {
  try {
    const events = await Event.find();
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

export async function createEvent(eventData) {
  try {
    const newEvent = new Event(eventData);
    await newEvent.save();
    return newEvent;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}

export async function editEvent(eventId, updatedData) {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedData, {
      new: true,
    });

    if (!updatedEvent) {
      throw new Error(`Event with ID ${eventId} not found.`);
    }

    return updatedEvent;
  } catch (error) {
    console.error("Error editing event:", error);
    throw error;
  }
}
