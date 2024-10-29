import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "../models/Event.js";

dotenv.config();

// Seed function to insert events into the database
export async function runScript() {
  try {
    const events = [
      {
        name: "Digital Marketing Workshop",
        description:
          "Join us for an immersive Digital Marketing Workshop, where you will learn the latest strategies and tools used in the industry today. This workshop covers essential topics such as Search Engine Optimization (SEO), Social Media Marketing, and Content Marketing, providing you with practical skills to enhance your marketing efforts. Expert speakers will guide you through real-world case studies and interactive sessions. Whether you are a business owner, marketer, or aspiring professional, this workshop is tailored for anyone looking to boost their digital presence. Don’t miss this opportunity to network with like-minded individuals and elevate your marketing skills to the next level.",
        topicsCovered: [
          "SEO",
          "Social Media",
          "Content Marketing",
          "Email Marketing",
          "Analytics",
        ],
        location: "Calgary Community Center, 101 Center St SW",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 50,
        category: "Workshop",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f311077063e"), // Calgary Community Center
          new mongoose.Types.ObjectId("671f2216d5d14f311077063f"), // Calgary Arts Society
        ],
      },
      {
        name: "AI in Healthcare Seminar",
        description:
          "The AI in Healthcare Seminar aims to explore the transformative role of artificial intelligence in the medical field. This event features renowned speakers from both the technology and healthcare sectors who will discuss innovative applications of AI, including predictive analytics, diagnostic tools, and personalized medicine. Attendees will gain insights into the ethical considerations and challenges of implementing AI solutions in healthcare settings. Join us for a thought-provoking day that not only highlights advancements in AI technology but also fosters discussions about its implications for future healthcare delivery. This is an essential event for professionals keen to stay ahead in the evolving landscape of healthcare technology.",
        topicsCovered: [
          "Artificial Intelligence",
          "Healthcare Innovation",
          "Ethics in AI",
          "Predictive Analytics",
        ],
        location: "Calgary Public Library, 101 Library Way SW",
        delivery: "Hybrid",
        status: "Scheduled",
        maxCapacity: 100,
        category: "Seminar",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f311077063e"), // Calgary Community Center
          new mongoose.Types.ObjectId("671f2216d5d14f3110770640"), // Calgary Public Library
        ],
      },
      {
        name: "Community Arts Fair",
        description:
          "Experience the vibrant culture of Calgary at the Community Arts Fair! This exciting event showcases local artists, musicians, and performers, offering a unique opportunity for attendees to engage with creative talent from the region. Throughout the day, you can explore a variety of art exhibits, enjoy live performances, and participate in interactive workshops designed for all ages. The fair also includes food vendors and activities that celebrate Calgary's artistic diversity. Bring your friends and family to immerse yourselves in the creative spirit of our community. The Community Arts Fair promises to be a fun-filled day for everyone.",
        topicsCovered: [
          "Art Exhibits",
          "Live Performances",
          "Interactive Workshops",
          "Food Vendors",
        ],
        location: "Heritage Park Historical Village, 1900 Heritage Dr SW",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 200,
        category: "Fair",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f311077063f"), // Calgary Arts Society
          new mongoose.Types.ObjectId("671f2216d5d14f3110770646"), // Calgary Chamber of Commerce
        ],
      },
      {
        name: "Annual Charity Festival",
        description:
          "Join us at the Annual Charity Festival, a wonderful occasion to support local causes while having fun! This festival features a range of activities including live music, food trucks, and various entertainment options suitable for all ages. Participate in raffles and auctions with exciting prizes, all while knowing that proceeds will benefit local non-profits and community projects. The festival serves as a platform for awareness and fundraising, bringing together community members and organizations to foster connections. Bring your friends and family to enjoy a day of laughter, music, and compassion as we make a difference together.",
        topicsCovered: [
          "Fundraising",
          "Live Music",
          "Food Trucks",
          "Community Awareness",
        ],
        location: "Calgary Stampede Grounds, 1410 Olympic Way SE",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 500,
        category: "Festival",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f3110770641"), // Youth Empowerment Calgary
          new mongoose.Types.ObjectId("671f2216d5d14f3110770643"), // Bow Valley College
        ],
      },
      {
        name: "Youth Empowerment Social",
        description:
          "The Youth Empowerment Social is an engaging event designed to inspire and empower young people through networking and mentorship. Participants will have the chance to meet successful professionals from various fields who will share their experiences and insights. The event includes interactive sessions, panel discussions, and activities aimed at fostering leadership skills and personal growth. It is a fantastic opportunity for youth to connect with peers, explore potential career paths, and build meaningful relationships within the community. Whether you are looking for guidance or simply want to connect with others, this social promises to be an enriching experience.",
        topicsCovered: [
          "Networking",
          "Mentorship",
          "Leadership Skills",
          "Career Exploration",
        ],
        location: "Calgary Multicultural Centre, 555 Diversity Ln SE",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 75,
        category: "Social",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f3110770641"), // Youth Empowerment Calgary
          new mongoose.Types.ObjectId("671f2216d5d14f3110770642"), // University of Calgary
        ],
      },
      {
        name: "Sustainability Workshop",
        description:
          "Join us for a hands-on Sustainability Workshop that explores practical ways to incorporate eco-friendly practices into everyday life. Participants will engage in discussions on sustainable living, waste reduction, and energy conservation. The workshop will cover various topics including composting, sustainable gardening, and responsible consumer choices. Led by experts in the field, this event aims to empower attendees with the knowledge and skills needed to make a positive impact on the environment. Whether you are new to sustainability or looking to enhance your existing practices, this workshop is suitable for everyone. Together, we can work towards a more sustainable future!",
        topicsCovered: [
          "Sustainable Living",
          "Waste Reduction",
          "Energy Conservation",
          "Composting",
          "Eco-Friendly Practices",
        ],
        location: "Bow Valley College, 345 6 Ave SE",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 30,
        category: "Workshop",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f3110770642"), // University of Calgary
          new mongoose.Types.ObjectId("671f2216d5d14f3110770643"), // Bow Valley College
        ],
      },
      {
        name: "Local Business Networking Event",
        description:
          "The Local Business Networking Event provides an invaluable opportunity for entrepreneurs and business owners to connect and share ideas. This event features keynote speakers who will discuss various aspects of business growth and sustainability, as well as interactive networking sessions where participants can engage with one another. Attendees will have the chance to learn from industry leaders and explore collaboration opportunities that can help expand their networks. Whether you are a seasoned business owner or just starting out, this event is perfect for fostering valuable connections and learning from peers in the community. Join us to unlock new possibilities for your business!",
        topicsCovered: [
          "Networking",
          "Business Growth",
          "Sustainability",
          "Collaboration Opportunities",
        ],
        location: "Calgary Chamber of Commerce, 100 6 Ave SW",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 100,
        category: "Social",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f3110770646"), // Calgary Chamber of Commerce
        ],
      },
      {
        name: "Health and Wellness Fair",
        description:
          "Discover a healthier you at the Health and Wellness Fair! This event brings together experts in various fields to share valuable insights on physical, mental, and emotional well-being. Attendees will have access to health screenings, interactive workshops, and informative talks on nutrition, fitness, and stress management. Explore a range of wellness products and services from local vendors dedicated to promoting a healthier lifestyle. The fair aims to educate and empower individuals to take charge of their health. Bring your family and friends to participate in a day filled with fun activities and information that can help improve your overall well-being.",
        topicsCovered: [
          "Health Screenings",
          "Nutrition",
          "Fitness",
          "Stress Management",
          "Wellness Products",
        ],
        location: "City of Calgary Parks, 800 Macleod Trail SE",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 150,
        category: "Fair",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f3110770645"), // Calgary Health Foundation
          new mongoose.Types.ObjectId("671f2216d5d14f3110770644"), // Southern Alberta Institute of Technology (SAIT)
        ],
      },
      {
        name: "Coding Bootcamp Workshop",
        description:
          "Kickstart your coding journey with our immersive Coding Bootcamp Workshop, ideal for beginners and intermediate learners. This workshop covers programming fundamentals, problem-solving techniques, and web development basics, focusing on JavaScript, HTML, and CSS. Participants will work on real-world projects, gaining hands-on experience to build and debug applications. With experienced instructors and collaborative exercises, attendees will leave with practical skills to advance in the tech industry. This bootcamp is perfect for anyone looking to enter the world of programming or enhance their coding abilities.",
        topicsCovered: [
          "Programming Fundamentals",
          "Web Development",
          "JavaScript",
          "HTML",
          "CSS",
        ],
        location: "Calgary Science Centre, 220 St Georges Dr NE",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 40,
        category: "Workshop",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f3110770644"), // Southern Alberta Institute of Technology (SAIT)
          new mongoose.Types.ObjectId("671f2216d5d14f3110770642"), // University of Calgary
        ],
      },
      {
        name: "Tech Innovations Expo",
        description:
          "The Tech Innovations Expo is a premier event that brings together technology enthusiasts, innovators, and industry leaders to explore the latest advancements in technology. Attendees will have the opportunity to engage with cutting-edge exhibits, attend insightful keynote speeches, and participate in panel discussions led by experts in fields such as artificial intelligence, cybersecurity, and software development. This expo is designed to foster collaboration and spark creativity, providing a platform for startups and established companies to showcase their innovative solutions. Join us for a day of inspiration, networking, and discovery as we delve into the future of technology and its impact on our daily lives.",
        topicsCovered: [
          "Artificial Intelligence",
          "Cybersecurity",
          "Software Development",
          "Innovation",
          "Networking",
        ],
        location: "Calgary Stampede Park, 1410 Olympic Way SE",
        delivery: "In-Person",
        status: "Scheduled",
        maxCapacity: 400,
        category: "Expo",
        organizerId: [
          new mongoose.Types.ObjectId("671f2216d5d14f3110770642"), // University of Calgary
          new mongoose.Types.ObjectId("671f2216d5d14f3110770644"), // Southern Alberta Institute of Technology (SAIT)
          new mongoose.Types.ObjectId("671f2216d5d14f3110770643"), // Bow Valley College
        ],
      },
    ];

    await Event.insertMany(events);
    console.log("Events have been seeded successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB Atlas");
  }
}

runScript();
