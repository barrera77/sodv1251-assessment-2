import mongoose from "mongoose";
import dotenv from "dotenv";
import Attendee from "../models/Atendee.js";

dotenv.config();

//seed the function to insert attendees into the DB
export async function runScript() {
  try {
    const attendees = [
      {
        name: "Alice Johnson",
        avatar: "https://avatar.iran.liara.run/public",
        address: "123 Maple Street",
        city: "Springfield",
        email: "alice.johnson@example.com",
        phone: "555-1234",
        username: "alicej",
        password: "password123",
      },
      {
        name: "Bob Smith",
        avatar: "https://avatar.iran.liara.run/public",
        address: "456 Oak Avenue",
        city: "Metropolis",
        email: "bob.smith@example.com",
        phone: "555-5678",
        username: "bobsmith",
        password: "password456",
      },
      {
        name: "Charlie Brown",
        avatar: "https://avatar.iran.liara.run/public",
        address: "789 Pine Road",
        city: "Gotham",
        email: "charlie.brown@example.com",
        phone: "555-8765",
        username: "charlieb",
        password: "password789",
      },
      {
        name: "Diana Prince",
        avatar: "https://avatar.iran.liara.run/public",
        address: "321 Elm Street",
        city: "Themyscira",
        email: "diana.prince@example.com",
        phone: "555-4321",
        username: "dianap",
        password: "password012",
      },
      {
        name: "Ethan Hunt",
        avatar: "https://avatar.iran.liara.run/public",
        address: "654 Cedar Lane",
        city: "Los Angeles",
        email: "ethan.hunt@example.com",
        phone: "555-1357",
        username: "ethanh",
        password: "password345",
      },
      {
        name: "Fiona Gallagher",
        avatar: "https://avatar.iran.liara.run/public",
        address: "789 10 St NW",
        city: "Calgary",
        email: "fiona.gallagher@example.com",
        phone: "403-987-6543",
        username: "fionag",
        password: "password678",
      },
      {
        name: "George Costanza",
        avatar: "https://avatar.iran.liara.run/public",
        address: "342 4 Ave SW",
        city: "Calgary",
        email: "george.costanza@example.com",
        phone: "403-234-5678",
        username: "georgec",
        password: "password901",
      },
      {
        name: "Hannah Baker",
        avatar: "https://avatar.iran.liara.run/public",
        address: "101 12 St SE",
        city: "Calgary",
        email: "hannah.baker@example.com",
        phone: "403-345-6789",
        username: "hannahb",
        password: "password234",
      },
      {
        name: "Ian Malcolm",
        avatar: "https://avatar.iran.liara.run/public",
        address: "456 7 Ave NE",
        city: "Calgary",
        email: "ian.malcolm@example.com",
        phone: "403-456-7890",
        username: "ianm",
        password: "password567",
      },
      {
        name: "Jenna Marbles",
        avatar: "https://avatar.iran.liara.run/public",
        address: "215 19 St NW",
        city: "Calgary",
        email: "jenna.marbles@example.com",
        phone: "403-567-8901",
        username: "jennam",
        password: "password890",
      },
      {
        name: "Albert Einstein",
        avatar: "https://avatar.iran.liara.run/public",
        address: "123 Science St NW",
        city: "Calgary",
        email: "albert.einstein@example.com",
        phone: "403-111-2222",
        username: "alberte",
        password: "password123",
      },
      {
        name: "Marie Curie",
        avatar: "https://avatar.iran.liara.run/public",
        address: "456 Chemistry Rd SW",
        city: "Calgary",
        email: "marie.curie@example.com",
        phone: "403-222-3333",
        username: "mariec",
        password: "password456",
      },
      {
        name: "Isaac Newton",
        avatar: "https://avatar.iran.liara.run/public",
        address: "789 Physics Ave NE",
        city: "Calgary",
        email: "isaac.newton@example.com",
        phone: "403-333-4444",
        username: "isaacn",
        password: "password789",
      },
      {
        name: "Galileo Galilei",
        avatar: "https://avatar.iran.liara.run/public",
        address: "321 Astronomy Ln SE",
        city: "Calgary",
        email: "galileo.galilei@example.com",
        phone: "403-444-5555",
        username: "galileog",
        password: "password012",
      },
      {
        name: "Stephen Hawking",
        avatar: "https://avatar.iran.liara.run/public",
        address: "654 Theoretical Blvd NW",
        city: "Calgary",
        email: "stephen.hawking@example.com",
        phone: "403-555-6666",
        username: "stephenh",
        password: "password345",
      },
      {
        name: "Freddie Mercury",
        avatar: "https://avatar.iran.liara.run/public",
        address: "10 Queen St NW",
        city: "Calgary",
        email: "freddie.mercury@example.com",
        phone: "403-666-7777",
        username: "freddiem",
        password: "password456",
      },
      {
        name: "Adele",
        avatar: "https://avatar.iran.liara.run/public",
        address: "22 Rolling Hills Dr SW",
        city: "Calgary",
        email: "adele@example.com",
        phone: "403-777-8888",
        username: "adelea",
        password: "password789",
      },
      {
        name: "Elton John",
        avatar: "https://avatar.iran.liara.run/public",
        address: "34 Rocket Man Ave SE",
        city: "Calgary",
        email: "elton.john@example.com",
        phone: "403-888-9999",
        username: "eltonj",
        password: "password012",
      },
      {
        name: "Beyoncé",
        avatar: "https://avatar.iran.liara.run/public",
        address: "56 Destiny's Child Rd NE",
        city: "Calgary",
        email: "beyonce@example.com",
        phone: "403-999-0000",
        username: "beyonceb",
        password: "password345",
      },
      {
        name: "Taylor Swift",
        avatar: "https://avatar.iran.liara.run/public",
        address: "78 Blank Space St NW",
        city: "Calgary",
        email: "taylor.swift@example.com",
        phone: "403-000-1111",
        username: "taylors",
        password: "password678",
      },
    ];

    await Attendee.insertMany(attendees);
    console.log("Attendees have been seeded successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB Atlas");
  }
}

runScript();
