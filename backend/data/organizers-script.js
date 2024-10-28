import mongoose from "mongoose";
import dotenv from "dotenv";
import Organizer from "../models/Organizer.js";

dotenv.config();

// Seed function to insert organizers and events into the database
export async function runScript() {
  try {
    // Sample organizers data
    const organizers = [
      {
        name: "Calgary Community Center",
        avatarOrLogo: "https://avatar.iran.liara.run/public/center_logo",
        address: "101 Center St SW",
        city: "Calgary",
        email: "info@calgarycommunitycenter.ca",
        phone: "403-555-1001",
        role: "Community Organization",
        eventsOrganized: [],
      },
      {
        name: "Calgary Arts Society",
        avatarOrLogo: "https://avatar.iran.liara.run/public/arts_logo",
        address: "220 Art Ave NW",
        city: "Calgary",
        email: "contact@calgaryarts.ca",
        phone: "403-555-2002",
        role: "Non-Profit",
        eventsOrganized: [],
      },
      {
        name: "Calgary Public Library",
        avatarOrLogo: "https://avatar.iran.liara.run/public/library_logo",
        address: "101 Library Way SW",
        city: "Calgary",
        email: "events@calgarylibrary.ca",
        phone: "403-555-3003",
        role: "Government",
        eventsOrganized: [],
      },
      {
        name: "Youth Empowerment Calgary",
        avatarOrLogo: "https://avatar.iran.liara.run/public/youth_logo",
        address: "420 Empower St SE",
        city: "Calgary",
        email: "programs@youthempowercalgary.org",
        phone: "403-555-4004",
        role: "Non-Profit",
        eventsOrganized: [],
      },
      {
        name: "University of Calgary",
        avatarOrLogo: "https://avatar.iran.liara.run/public/ucalgary_logo",
        address: "2500 University Dr NW",
        city: "Calgary",
        email: "events@ucalgary.ca",
        phone: "403-555-5005",
        role: "Educational Institution",
        eventsOrganized: [],
      },
      {
        name: "Bow Valley College",
        avatarOrLogo: "https://avatar.iran.liara.run/public/bowvalley_logo",
        address: "345 6 Ave SE",
        city: "Calgary",
        email: "events@bowvalleycollege.ca",
        phone: "403-555-6006",
        role: "Educational Institution",
        eventsOrganized: [],
      },
      {
        name: "Southern Alberta Institute of Technology (SAIT)",
        avatarOrLogo: "https://avatar.iran.liara.run/public/sait_logo",
        address: "1301 16 Ave NW",
        city: "Calgary",
        email: "events@sait.ca",
        phone: "403-555-7007",
        role: "Educational Institution",
        eventsOrganized: [],
      },
      {
        name: "Calgary Health Foundation",
        avatarOrLogo:
          "https://avatar.iran.liara.run/public/healthfoundation_logo",
        address: "1215 6 St SW",
        city: "Calgary",
        email: "info@calgaryhealthfoundation.ca",
        phone: "403-555-8008",
        role: "Charitable Organization",
        eventsOrganized: [],
      },
      {
        name: "Calgary Chamber of Commerce",
        avatarOrLogo: "https://avatar.iran.liara.run/public/chamber_logo",
        address: "100 6 Ave SW",
        city: "Calgary",
        email: "events@calgarychamber.ca",
        phone: "403-555-9009",
        role: "Business Organization",
        eventsOrganized: [],
      },
      {
        name: "Calgary Food Bank",
        avatarOrLogo: "https://avatar.iran.liara.run/public/foodbank_logo",
        address: "5000 11 St SE",
        city: "Calgary",
        email: "events@calgaryfoodbank.ca",
        phone: "403-555-1010",
        role: "Charitable Organization",
        eventsOrganized: [],
      },
      {
        name: "Heritage Park Historical Village",
        avatarOrLogo: "https://avatar.iran.liara.run/public/heritagepark_logo",
        address: "1900 Heritage Dr SW",
        city: "Calgary",
        email: "info@heritagepark.ca",
        phone: "403-555-1111",
        role: "Museum & Cultural Site",
        eventsOrganized: [],
      },
      {
        name: "Calgary Science Centre",
        avatarOrLogo: "https://avatar.iran.liara.run/public/sciencecentre_logo",
        address: "220 St Georges Dr NE",
        city: "Calgary",
        email: "info@calgarysciencecentre.ca",
        phone: "403-555-1212",
        role: "Educational Organization",
        eventsOrganized: [],
      },
      {
        name: "Calgary Stampede",
        avatarOrLogo: "https://avatar.iran.liara.run/public/stampede_logo",
        address: "1410 Olympic Way SE",
        city: "Calgary",
        email: "events@calgarystampede.com",
        phone: "403-555-1313",
        role: "Community Organization",
        eventsOrganized: [],
      },
      {
        name: "Calgary Multicultural Centre",
        avatarOrLogo: "https://avatar.iran.liara.run/public/multicultural_logo",
        address: "555 Diversity Ln SE",
        city: "Calgary",
        email: "info@calgarymulticultural.ca",
        phone: "403-555-1414",
        role: "Community Organization",
        eventsOrganized: [],
      },
      {
        name: "City of Calgary - Parks & Recreation",
        avatarOrLogo: "https://avatar.iran.liara.run/public/cityparks_logo",
        address: "800 Macleod Trail SE",
        city: "Calgary",
        email: "parks@calgary.ca",
        phone: "403-555-1515",
        role: "Government",
        eventsOrganized: [],
      },
    ];

    await Organizer.insertMany(organizers);
    console.log("Organizers have been seeded successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB Atlas");
  }
}

runScript();
