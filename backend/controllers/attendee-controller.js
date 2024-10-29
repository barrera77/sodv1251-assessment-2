import Attendee from "../models/Atendee.js";

export async function getAllAttendees() {
  try {
    const attendees = await Attendee.find();
    return attendees;
  } catch (error) {
    console.error("Error fetching attendees:", error);
    throw error;
  }
}
