import AbstractView from "./AbstractView.js";
import communicationsEmailingForm from "../templates/MailingForm.js";
import { getData } from "../utils/api-utility.js";

const ATTENDEES_END_POINT = "/api/attendees";
const ORGANIZERS_END_POINT = "/api/organizers";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Communication");
    this.attendeesList = [];
    this.eventsList = [];
    this.organizersList = [];
  }

  async getHtml() {
    this.attendeesList = await this.fetchAttendees();
    this.organizersList = await this.fetchOrganizers();

    //TODO: fix the logic to display theemail after clicking the contact buttons

    return this.manageState();
  }

  renderHTML() {
    const formHTML = communicationsEmailingForm(
      this.attendeesList,
      this.organizersList
    );
    const appContainer = document.querySelector(".app");

    if (appContainer) {
      appContainer.innerHTML = `
        <section>
          <div class="container p3">
            <h5>Communication</h5>
            <button onclick="window.history.back()" data-link class="btn btn-outline-primary btn-back">
              <i class="bi bi-arrow-left-circle-fill"></i> Go Back
            </button>
            <div class="form-container">
              ${formHTML}
            </div>
          </div>
        </section>
      `;
    } else {
      console.error("The .app container does not exist.");
    }
  }

  manageState() {
    this.renderHTML(); // Render the HTML with the form

    // Add event listeners or any additional setup
    this.handleContactButtons();
  }

  handleContactButtons() {
    const contactButtons = document.querySelectorAll(".btn-contact");

    if (contactButtons.length > 0) {
      contactButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          const email = button.getAttribute("data-email");
          if (email) {
            this.insertEmail(email);
          }
        });
      });
    }
  }

  insertEmail(email) {
    const mainEmailInput = document.getElementById("to");
    const ccEmailInput = document.getElementById("cc");
    const bccEmailInput = document.getElementById("bcc");
    if (mainEmailInput) {
      mainEmailInput.value = email;
    } else {
      console.error("Email input field not found.");
    }
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
