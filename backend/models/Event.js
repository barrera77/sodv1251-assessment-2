export default class Event {
  constructor(
    id,
    name,
    description,
    topicsCovered,
    location,
    startDate,
    endDate,
    delivery, // 'In-Person', 'Virtual', or 'Hybrid'
    status = "pending", // 'Pending','Scheduled', 'Ongoing', 'Completed', 'Canceled'
    maxCapacity,
    category,
    organizerId,
    img_url = "https://placedog.net/500/380"
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.topicsCovered = topicsCovered;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.delivary = delivery;
    this.status = status;
    this.maxCapacity = maxCapacity;
    this.category = category;
    this.organizerId = organizerId;
    this.img_url = img_url;
    this.attendees = [];
    this.images = [];
  }

  addAttendee(attendee) {
    this.attendees.push(attendee);
  }
}
