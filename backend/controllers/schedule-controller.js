import Schedule from "../models/Schedule.js";

//get scheduled events
export async function getEventsSchedule() {
  try {
    const eventsSchedule = await Schedule.find();
    return eventsSchedule;
  } catch (error) {
    console.error("Error fetching the events schedule:", error);
    throw error;
  }
}

//create an event schedule object
export async function createEventSchedule(scheduleData) {
  try {
    const newSchedule = new Schedule(scheduleData);
    await newSchedule.save();
    return newSchedule;
  } catch (error) {
    console.error("Error saving the event schedule:", error);
    throw error;
  }
}
