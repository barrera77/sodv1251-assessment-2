import Organizer from "../models/Organizer.js";

export async function getAllOrganizers() {
  try {
    const organizers = await Organizer.find();
    return organizers;
  } catch (error) {
    console.error("Error fetching organizers:", error);
    throw error;
  }
}
