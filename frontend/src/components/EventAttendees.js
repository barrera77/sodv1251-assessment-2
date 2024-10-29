import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";

const ATTENDEES_END_POINT = "/api/attendees";
const EVENTS_END_POINT = "/api/events";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Event Attendees");
    this.attendeesList = [];
    this.eventsList = [];
  }

  async getHtml() {
    this.eventsList = await this.fetchEvents();

    // Get the `id` from the URL
    this.urlParams = new URLSearchParams(window.location.search);
    const id = this.urlParams.get("id");

    const currentEvent = this.eventsList.find((event) => event._id === id);
    return `
    <section class="py-3">
        <div class="container bg-white p-3">
            <div class="border-bottom border-secondary-subttle">
                <h5><i class="bi bi-calendar2-event"></i> ${currentEvent.name} - Attendees</h5>
            </div>
        </div>       
    </section>
    `;
  }

  /**
   * fetch the attendees from the server
   * @returns attendees array
   */
  async fetchAttendees() {
    try {
      const attendees = await getData(ATTENDEES_END_POINT);
      //console.table(attendees);
      return attendees;
    } catch (error) {
      console.error("Error fetching attendees:", error);
    }
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
