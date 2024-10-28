import mongoose from "mongoose";

const organizersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatarOrLogo: {
    type: String,
    default: "https://avatar.iran.liara.run/public", // Default avatar or logo URL
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  eventsOrganized: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Event",
    default: [],
  },
});

// Create and export the Organizer model
const Organizer = mongoose.model("Organizer", organizersSchema, "organizers");
export default Organizer;
