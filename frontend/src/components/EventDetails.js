import AbstractView from "./AbstractView.js";
import eventDetailsCard from "../templates/EventDetailsCard.js";
import eventPhotoGallery from "../templates/EventPhotoGallery.js";
import { getData } from "../utils/api-utility.js";

const EVENTS_END_POINT = "/api/events";
const ORGANIZERS_END_POINT = "/api/organizers";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Event Details");
    this.eventsList = [];
    this.organizersList = [];
    this.eventOrganizers = [];
  }

  async getHtml() {
    this.eventsList = await this.fetchEvents();
    this.organizersList = await this.fetchOrganizers();

    // Get the `id` from the URL
    this.urlParams = new URLSearchParams(window.location.search);
    const id = this.urlParams.get("id");

    const currentEvent = this.eventsList.find((event) => event._id === id);
    currentEvent.organizerId.forEach((o_id) => {
      let currentOrganizer = this.organizersList.find(
        (organizer) => organizer._id === o_id
      );
      this.eventOrganizers.push(currentOrganizer);
    });
    return `
    <section>
      <div class="container p-3 event-details">
        <div class="border-bottom border-secondary-subttle d-block pb-3">
          <h5 class="mb-3">Event Details</h5>
         <div class="d-flex justify-content-between">
            <a href="/events" data-link class="btn btn-outline-primary"
              ><i class="bi bi-arrow-left-circle-fill"></i> Back to Events Listing</a
            >
            <a href="/edit-event?id=${id}" data-link class="btn btn-info"
              ><i class="bi bi-pencil-square"></i> Edit Event</a
            >
         </div>
        </div>
        <div class="event-details-container py-3"> 
        ${eventDetailsCard(currentEvent, this.eventOrganizers)}         
        </div>
      </div>
    </section>
    <section>
      <div class="container px-3 py-3 event-details">       
        ${eventPhotoGallery(currentEvent)}
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
   * fetch the organizers from the server
   * @returns organizers array
   */
  async fetchOrganizers() {
    try {
      const organizers = await getData(ORGANIZERS_END_POINT);
      //console.table(organizers);
      return organizers;
    } catch (error) {
      console.error("Error fetching organizers:", error);
    }
  }
}
