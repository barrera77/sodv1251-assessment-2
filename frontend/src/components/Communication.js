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

    // Get the `id` from the URL
    this.urlParams = new URLSearchParams(window.location.search);
    const id = this.urlParams.get("id");

//TODO: fix the logic to display theemail after clicking the contact buttons

    return `
    <section>
      <div class="container p3">
        <div class="border-bottom border-secondary-subttle d-block pb-3">
            <h5>Communication</h5>
            <button onclick="window.history.back()" data-link class="btn btn-outline-primary btn-back"><i class="bi bi-arrow-left-circle-fill"></i> Go Back</button>
        </div>
        <div class="form-container">
        ${communicationsEmailingForm(this.attendeesList, this.organizersList)}
        </div>
      </div>
    </section>
    `;
  }
  async onMounted() {
    console.log("onMounted called");
    // Select form container after HTML is rendered and populate it
    this.formContainer = document.querySelector(".form-container");
    if (this.formContainer) {
      this.renderForm();
      this.handleContactButtons();
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

  handleContactButtons() {
    const contactButtons = document.querySelectorAll(".btn-contact");

    if (contactButtons) {
      contactButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          const email = button.getAttribute("data-email"); // Get the email from the data attribute
          this.insertEmail(email); // Call insertEmail with the retrieved email
        });
      });
    }
  }

  renderForm() {
    if (this.formContainer) {
      this.formContainer.innerHTML = communicationsEmailingForm(
        this.attendeesList,
        this.organizersList
      );
      this.handleContactButtons();
    }
  }

  insertEmail(email) {
    const emailInput = document.getElementById("to");
    if (emailInput) {
      emailInput.value = email; // Insert the email into the input field
    }
    console.log("Email inserted into input:", email);
  }
}
