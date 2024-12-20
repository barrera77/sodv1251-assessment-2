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
    this.attendeesList = await this.fetchAttendees();

    // Get the `id` from the URL
    this.urlParams = new URLSearchParams(window.location.search);
    const id = this.urlParams.get("id");

    const currentEvent = this.eventsList.find((event) => event._id === id);

    const eventAttendeesList = this.attendeesList.filter((attendee) => {
      return attendee.events.includes(currentEvent._id);
    });

    return `
    <section class="py-3">
        <div class="container bg-white p-3">
            <div class="border-bottom border-secondary-subttle pb-3">
                <h5 class="mb-3"><i class="bi bi-calendar2-event"></i> ${
                  currentEvent.name
                } - Attendees</h5>
                <button onclick="window.history.back()" data-link class="btn btn-outline-primary btn-back"
            ><i class="bi bi-arrow-left-circle-fill"></i> Back to Event Details</button
          >
            </div>
             <div class="table-wrapper pb-4 px-4">
          <table id="attendees" class="table table-striped table-sm">
            <thead>
              <tr>
                <th></th>
                <th>NAME</th>
                <th>CITY</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
            ${eventAttendeesList
              .map(
                (attendee) => `
              <tr>
                <td>
                  <img class="attendee-avatar" src="${attendee.avatar}" alt="attendee-photo"/>
                </td>
                <td class="align-middle">${attendee.name}</td>
                <td class="align-middle">${attendee.city}</td>
                <td class="align-middle">${attendee.email}</td>
                <td class="align-middle">${attendee.phone}</td>
                <td class="px-0 align-middle">
                    <div>
                      <a href="/attendee-details?id=${attendee._id}"  data-link class="btn btn-primary" >Details <i class="bi bi-arrow-right-circle-fill"></i></a>
                    </div>
                </td>
              </tr> 
              `
              )
              .join("")}                
            </tbody>
          </table>
     
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

  goBackToPreviousPage() {
    window.history.back();
  }
}
