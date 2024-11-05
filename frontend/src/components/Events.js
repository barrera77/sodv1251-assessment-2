import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import eventCard from "../templates/EventCard.js";

const EVENTS_END_POINT = "/api/events";
const SCHEDULE_END_POINT = "/api/eventsSchedule";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Events");
    this.eventsList = [];
    this.scheduleList = [];
  }

  async getHtml() {
    this.eventsList = await this.fetchEvents();
    this.scheduleList = await this.fetchSchedule();

    const rows = this.eventsList.map((event) => {
      let matchingEvent = this.scheduleList.find(
        (match) => match.eventId === event._id
      );

      // Check if any event has been scheduled
      const date = matchingEvent ? new Date(matchingEvent.startDate) : null;
      const formattedDate = date
        ? date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "2-digit",
          })
        : "No date available";

      return eventCard(event, formattedDate); // Pass formattedDate to eventCard
    });

    return `
    <section>
      <div class="container bg-white p-3 events-list">
        <div class="border-bottom border-secondary-subttle pb-3 d-flex align-items-center gap-5">
          <h5><i class="bi bi-calendar2-event"></i> Events</h5>
          <a href="/create-event" class="btn btn-primary"><i class="bi bi-plus-circle-fill"></i> New Event</a>
        </div>
        <div class="cards-wrapper py-4">
        ${rows}
        </div>       
      </div>
    </section>
    `;
  }

  /**
   * fetch the events from the server
   * @returns events array
   */
  async fetchEvents() {
    try {
      const events = await getData(EVENTS_END_POINT);
      //console.table(events);
      return events;
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }
  /**
   * fetch the schedule from the server
   * @returns schedule array
   */
  async fetchSchedule() {
    try {
      const schedule = await getData(SCHEDULE_END_POINT);
      //console.table(schedule);
      return schedule;
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  }
}
