import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import eventCard from "../templates/EventCard.js";

const EVENTS_END_POINT = "/api/events";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Events");
    this.eventsList = [];
  }

  async getHtml() {
    this.eventsList = await this.fetchEvents();

    const rows = this.eventsList.map((event) => eventCard(event)).join("");

    return `
    <section>
      <div class="container bg-white p-3 events-list">
        <div class="border-bottom border-secondary-subttle pb-3 d-flex align-items-center gap-5">
          <h5><i class="bi bi-calendar2-event"></i> Events</h5>
          <a href="" class="btn btn-primary"><i class="bi bi-plus-circle-fill"></i> New Event</a>
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
}
