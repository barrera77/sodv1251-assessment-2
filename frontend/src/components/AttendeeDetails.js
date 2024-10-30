import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import attendeeCard from "../templates/AttendeeCard.js";

const ATTENDEES_END_POINT = "/api/attendees";
const EVENTS_END_POINT = "/api/events";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Attendee Details");
    this.attendeesList = [];
    this.eventsList = [];
  }

  async getHtml() {
    this.eventsList = await this.fetchEvents();
    this.attendeesList = await this.fetchAttendees();

    // Get the `id` from the URL
    this.urlParams = new URLSearchParams(window.location.search);
    const id = this.urlParams.get("id");

    const currentAttendee = this.attendeesList.find(
      (attendee) => attendee._id === id
    );

    const attendeEvents = [];
    currentAttendee.events.forEach((event) => {
      let element = this.eventsList.find((element) => element._id === event);
      attendeEvents.push(element);
    });

    return `
    <section>
        <div class="container p-3  event-details">    
            <div class="border-bottom border-secondary-subttle d-block pb-3">
              <h5 class="mb-3">Attendee Details</h5>
              <button onclick="window.history.back()" data-link class="btn btn-outline-primary"
                ><i class="bi bi-arrow-left-circle-fill"></i> Back</
              >
            </div>
            <div class="attendee-details-container py-3">
              ${attendeeCard(currentAttendee, attendeEvents)}
                          
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
