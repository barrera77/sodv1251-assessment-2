export default class Schedule {
  constructor(id, eventId, title, description, startTime, endTime) {
    this.id = id;
    this.eventId = eventId;
    this.title = title;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
