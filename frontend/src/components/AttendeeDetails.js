import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";

const ATTENDEES_END_POINT = "/api/attendees";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Attendee Details");
  }

  async getHtml() {
    return `
    <section>
        <div class="container p-3 event-details">    
            <div class="border-bottom border-secondary-subttle d-block pb-3">
              <h5 class="mb-3">Attendee Details</h5>
              <a href="/attendees" data-link class="btn btn-outline-primary"
                ><i class="bi bi-arrow-left"></i> Back to Attendees Listing</a
              >
            </div>
        </div>
    </section>
    `;
  }
}
