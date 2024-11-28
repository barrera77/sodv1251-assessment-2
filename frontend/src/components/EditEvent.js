import AbstractView from "./AbstractView.js";
import { getData, updateData } from "../utils/api-utility.js";

const EVENTS_END_POINT = "/api/events";
const ORGANIZERS_END_POINT = "/api/organizers";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Create Event");
    this.organizersList = [];
    this.eventOrganizers = [];
    this.currentEvent = "";
  }

  async getHtml() {
    this.eventsList = await getData(EVENTS_END_POINT);
    this.organizersList = await getData(ORGANIZERS_END_POINT);

    // Get the `id` from the URL
    this.urlParams = new URLSearchParams(window.location.search);
    const id = this.urlParams.get("id");

    this.currentEvent = this.eventsList.find((event) => event._id === id);
    this.currentEvent.organizerId.forEach((o_id) => {
      let currentOrganizer = this.organizersList.find(
        (organizer) => organizer._id === o_id
      );
      this.eventOrganizers.push(currentOrganizer);
    });

    return `
     <section class="py-3">
      <div class="container bg-white p-3">
        <div class="border-bottom border-secondary-subttle pb-3">
          <h5 class="mb-3">
            <i class="bi bi-pencil-square"></i> Edit Event
          </h5>
          <button
            onclick="window.history.back()"
            data-link
            class="btn btn-outline-primary btn-back"
          >
            <i class="bi bi-x-circle-fill"></i> Cancel
          </button>
        </div>
        <div>
          <div>
            <form class="event-form">
              <div>
                <div class="row py-4 ps-0">
                  <label class="form-label col-3" for="event-name">
                    Event Name:
                  </label>
                  <div class="col-9 p-0">
                    <input
                      readonly 
                      class="form-control w-75 bg-secondary-subtle"
                      name="name"
                      id="event-name"
                      type="text"
                      value="${this.currentEvent.name}"
                    >
                    <div
                      id="invalid-event-name"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid Event Name</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-description">
                    Description:
                  </label>
                  <div class="col-9 ps-0">
                    <textarea
                      class="form-control w-75"
                      name="description"
                      id="event-description"
                      type="text"
                      rows="4"
                    >${this.currentEvent.description}</textarea>
                    <div
                      id="invalid-event-description"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event description</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-topics">
                    Topics to Cover:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                    value="${this.currentEvent.topicsCovered}"
                      class="form-control w-75"
                      name="topicsCovered"
                      id="event-topics"
                      type="text"
                      placeholder="e.g. ReactJS, Bootstrap, NodeJS"
                    >
                    <div
                      id="invalid-event-topics"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event topics</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-location">
                    Location:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                      value="${this.currentEvent.location}"
                      class="form-control w-75"
                      name="location"
                      id="event-location"
                      type="text"
                    >
                    <div
                      id="invalid-event-location"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event location</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-delivery">
                    Delivery Mode:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="delivery"
                      id="event-delivery"
                      type="text"
                    >
                      <option selected value="0">
                        Select a modality . . .
                      </option>
                      <option value="In-Person">In-Person</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    <div
                      id="invalid-event-delivery"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event modality</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-capacity">
                    Capacity:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                      value="${this.currentEvent.maxCapacity}"
                      class="form-control w-75"
                      name="maxCapacity"
                      id="event-capacity"
                      type="number"
                      value="0"
                    />
                    <div
                      id="invalid-event-capacity"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event capacity</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-category">
                    Category:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="category"
                      id="event-category"
                    >
                      <option selected value="0">
                        Select a category . . .
                      </option>
                      <option value="Social">Social</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Fair">Fair</option>
                      <option value="Festival">Festival</option>
                    </select>
                    <div
                      id="invalid-event-category"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event category</span>
                    </div>
                  </div>
                </div> 
                 <div class="row pb-4">
                  <label class="form-label col-3" for="current-event-location"">
                    Current Organizer(s):
                  </label>
                  <div class="col-9 ps-0">
                  ${
                    this.eventOrganizers.length > 0
                      ? this.eventOrganizers
                          .map(
                            (organizer) =>
                              `
                     <input
                      readonly 
                      value="${organizer.name}"
                      class="form-control w-75 mb-3 bg-secondary-subtle"
                      name="currentOrganizer"
                      id="current-event-location"
                      type="text"
                    > `
                          )
                          .join("")
                      : `<input value="No organizers available" readonly  class="form-control w-75">`
                  }
                                   
                  </div>
                </div>               
                <div class="row pb-4">
                  <label class="form-label col-3" for="event-organizer">
                    Add Organizer:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="organizerId"
                      id="event-organizer"
                    >
                      <option value="0" selected>
                        Select organizer . . .
                      </option>
                      ${
                        this.organizersList.length > 0
                          ? this.organizersList
                              .map(
                                (organizer) =>
                                  `<option value="${organizer._id}">${organizer.name}</option>`
                              )
                              .join("")
                          : `<option value="none" readonly >No organizers available</option>`
                      }
                    </select>
                    <div
                      id="invalid-event-organizer"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event organizer</span>
                    </div>
                  </div>
                </div>
                <div class="row w-75 m-auto py-3">
                  <div class="col-3">
                    <button class="btn btn-outline-info" type="submit">
                      Upload Image
                    </button>
                  </div>
                  <div class="col-9 p-0">
                    <input
                      type="file"
                      name="eventImage"
                      accept="image/*"
                      class="text-muted form-control file-input"
                    />
                  </div>
                </div>
                <div class="w-50 m-auto py-3 text-center">
                  <button class="btn btn-success">
                    <i class="bi bi-floppy"></i> Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> 
    `;
  }

  manageState() {
    this.initializeElements();
    this.removeErrorMessagesOnInput();

    const { eventForm } = this.domElements;

    if (eventForm) {
      eventForm.addEventListener("submit", this.handleAddEventForm);
    }

    this.setSelectElementsInitialValue(this.currentEvent);
  }

  initializeElements() {
    this.domElements = {
      eventForm: document.querySelector(".event-form"),
      invalidFeedbackMessages: document.querySelectorAll(".invalid-feedback"),
      addEventFormInputs: document.querySelectorAll(".event-form input"),
      eventFormSelect: document.querySelectorAll(".event-form select"),
      eventDescription: document.getElementById("event-description"),
      selectEventCategory: document.getElementById("event-category"),
      selectEventDelivery: document.getElementById("event-delivery"),
    };
  }

  setSelectElementsInitialValue(event) {
    const { selectEventCategory, selectEventDelivery } = this.domElements;
    selectEventDelivery.value = event.delivery;
    selectEventCategory.value = event.category;
  }

  /**
   * handle registration form submission
   * @param {*} event
   */
  handleAddEventForm = async (event) => {
    event.preventDefault();

    // Get the `id` from the URL
    this.urlParams = new URLSearchParams(window.location.search);
    const id = this.urlParams.get("id");

    const formData = new FormData(event.target);

    const eventData = Object.fromEntries(formData.entries());
    console.log(id);

    const isValidForm = this.validateCreateEventForm(eventData);

    if (isValidForm) {
      console.log("is the form valid?", isValidForm);

      try {
        const isSuccess = await this.updateCurrentEvent(
          id,
          eventData.name,
          eventData.description,
          eventData.topicsCovered,
          eventData.location,
          eventData.delivery,
          eventData.maxCapacity,
          eventData.category,
          eventData.organizerId
        );

        if (isSuccess) {
          alert("Event updated succesfully.");
          this.resetForms();
        }
      } catch (error) {
        console.error("Error updating event:", error);
        alert("There was an error updating the event.");
      }
    }
  };

  /**
   * validate the forms
   */
  validateCreateEventForm(data) {
    let isValid = true;

    isValid = this.validateField(data.name, "invalid-event-name") && isValid;
    isValid =
      this.validateField(data.description, "invalid-event-description") &&
      isValid;
    isValid =
      this.validateField(data.topicsCovered, "invalid-event-topics") && isValid;
    isValid =
      this.validateField(data.location, "invalid-event-location") && isValid;
    isValid =
      this.validateField(data.delivery !== "0", "invalid-event-delivery") &&
      isValid;
    isValid =
      this.validateField(data.maxCapacity, "invalid-event-capacity") && isValid;
    isValid =
      this.validateField(data.category !== "0", "invalid-event-category") &&
      isValid;
    isValid =
      this.validateField(data.organizerId !== "0", "invalid-event-organizer") &&
      isValid;

    return Boolean(isValid);
  }

  /**
   * validate individual fields
   * @param {*} value
   * @param {*} elementId
   */
  validateField(value, elementId) {
    const messageElement = document.getElementById(elementId);

    if (!value) {
      messageElement.classList.add("d-block");
      return false;
    } else {
      messageElement.classList.remove("d-block");
      return true;
    }
  }

  /**
   * Create new Event
   */
  async updateCurrentEvent(
    _id,
    name,
    description,
    topicsCovered,
    location,
    delivery,
    maxCapacity,
    category,
    organizerId
  ) {
    let eventToUpdate = {
      name: name,
      description: description,
      topicsCovered: topicsCovered,
      location: location,
      delivery: delivery,
      maxCapacity: maxCapacity,
      category: category,
      organizerId: organizerId,
    };

    try {
      const response = await updateData(EVENTS_END_POINT, _id, eventToUpdate);
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }

    return true;
  }

  /**
   * reset the forms
   */
  resetForms() {
    //clear inputs
    document.querySelectorAll(".form-control").forEach((input) => {
      input.value = "";
    });

    //reset dropdowns
    document.querySelectorAll(".form-select").forEach((select) => {
      select.selectedIndex = "0";
    });
  }

  /**
   * Reset all fedback messages
   */
  resetFeedbaackMessages() {
    this.domElements.invalidFeedbackMessages.forEach((message) => {
      message.classList.remove("d-block");
    });
  }

  removeErrorMessagesOnInput() {
    const { addEventFormInputs, eventDescription, eventFormSelect } =
      this.domElements;
    addEventFormInputs.forEach((input) => {
      input.addEventListener("input", (event) => {
        const inputId = input.id;
        const messageElement = document.getElementById(`invalid-${inputId}`);

        if (input.value) {
          messageElement.classList.remove("d-block");
        }
      });
    });

    eventDescription.addEventListener("input", () => {
      const messageElement = document.getElementById(
        `invalid-event-description`
      );
      if (eventDescription.value) {
        messageElement.classList.remove("d-block");
      }
    });

    eventFormSelect.forEach((item) => {
      item.addEventListener("change", () => {
        const itemId = item.id;
        const messageElement = document.getElementById(`invalid-${itemId}`);

        if (itemId.value !== "0") {
          messageElement.classList.remove("d-block");
        }
      });
    });
  }
}
