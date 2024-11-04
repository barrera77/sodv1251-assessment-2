import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  observations: {
    type: String,
    required: false,
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema, "eventsSchedule");
export default Schedule;
