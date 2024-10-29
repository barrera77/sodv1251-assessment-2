import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";

const ATTENDEES_END_POINT = "/api/attendees";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Attendees");
    this.attendeesList = [];
  }

  async getHtml() {
    this.attendeesList = await this.fetchAttendees();

    return `
     <section class="py-3">
      <div class="container bg-white p-3">
        <div class="border-bottom border-secondary-subttle">
          <h5><i class="bi bi-person-check"></i> Attendees</h5>
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
            ${this.attendeesList
              .map(
                (attendee) => `
              <tr>
                <td>
                  <img class="attendee-avatar" src="${attendee.avatar}" alt="attendee-photo"/>
                </td>
                <td>${attendee.name}</td>
                <td>${attendee.city}</td>
                <td>${attendee.email}</td>
                <td>${attendee.phone}</td>
                <td class="px-0">
                    <div>
                      <a href="/attendee-details?id=${attendee._id}"  data-link class="btn btn-primary" >Details <i class="bi bi-arrow-right"></i></a>
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
}
