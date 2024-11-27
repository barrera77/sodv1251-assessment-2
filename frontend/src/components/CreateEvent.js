import AbstractView from "./AbstractView.js";
import { getData, saveData } from "../utils/api-utility.js";

const EVENTS_END_POINT = "/api/events";
const ORGANIZERS_END_POINT = "/api/organizers";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Create Event");
    let organizersList = [];
  }

  async getHtml() {
    this.organizersList = await getData(ORGANIZERS_END_POINT);
    return `
     <section class="py-3">
        <div class="container bg-white p-3">
         <div class="border-bottom border-secondary-subttle pb-3">
            <h5 class="mb-3"><i class="bi bi-calendar-plus-fill"></i> Create Events</h5>
            <button onclick="window.history.back()" data-link class="btn btn-outline-primary btn-back"
        ><i class="bi bi-arrow-left-circle-fill"></i> Back to Events</button
        >
        </div>

        <div>
            <div>

                <form class="event-form">
                    <div>                    
                        <div class="row py-4 ps-0">
                            <label class="form-label col-3" for="event-name">Event Name:</label>
                            <div class="col-9 p-0">
                              <input class="form-control w-75" name="event-name" id="event-name" type="text"></input>
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
                            <label class="form-label col-3" for="event-description">Description:</label>
                            
                            <div class="col-9 ps-0">
                              <textarea class="form-control w-75" name="event-description" id="event-description" type="text" rows="4"></textarea>
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
                            <label class="form-label col-3" for="event-topics">Topics to Cover:</label>
                            <div class="col-9 ps-0"> 
                              <input class="form-control w-75" name="event-topics" id="event-topics" type="text" placeholder="e.g. ReactJS, Bootstrap, NodeJS"></input>
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
                            <label class="form-label col-3" for="event-location">Location:</label>
                            <div class="col-9 ps-0"> 
                              <input class="form-control w-75" name="event-location" id="event-location" type="text"></input>
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
                            <label class="form-label col-3" for="event-delivery">Delivery Mode:</label>
                            <div class="col-9 ps-0"> 
                              <select class="form-select col-8 w-50 text-muted" name="event-delivery" id="event-delivery" type="text" >
                                  <option selected value="0">Select a modality . . .</option>
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
                            <label class="form-label col-3" for="event-capacity">Capacity:</label>
                            <div class="col-9 ps-0">
                              <input class="form-control w-75" name="event-capacity" id="event-capacity" type="number" value="0"/>
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
                            <label class="form-label col-3" for="event-category">Category:</label>
                            <div class="col-9 ps-0">
                              <select class="form-select col-8 w-50 text-muted" name="event-category" id="event-category">
                                  <option selected value="0">Select a category . . .</option>
                                  <option value="Social">Social</option>
                                  <option value="Worshop">Worshop</option>
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
                        <div>
                            <label class="form-label col-3" for="event-image>Upload Image:</label>
                            <input type="file" name="image" id="image"/>
                        </div>
                       <div class="row pb-4">
                            <label class="form-label col-3" for="event-organizer">Organizer:</label>
                            <div class="col-9 ps-0">
                              <select class="form-select col-8 w-50 text-muted" name="event-organizer" id="event-organizer">
                                  <option value="0" selected>Select organizer . . .</option>
                                 ${
                                   this.organizersList.length > 0
                                     ? this.organizersList
                                         .map(
                                           (organizer) =>
                                             `<option value="${organizer.id}">${organizer.name}</option>`
                                         )
                                         .join("")
                                     : `<option value="none" disabled>No organizers available</option>`
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
                                <button class="btn btn-outline-info" type="submit">Upload Image</button>
                            </div>   
                            <div class="col-9 p-0">
                                <input type="file" name="eventImage" accept="image/*" class="text-muted form-control file-input" />
                            </div>
                                                    
                        </div>       
                        <div class="w-50 m-auto py-3 text-center">
                            <button class="btn btn-success"><i class="bi bi-floppy"></i> Save Event</button>
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
    const eventForm = document.querySelector(".event-form");
    if (eventForm) {
      eventForm.addEventListener("submit", this.handleAddEventForm);
    }
  }

  /**
   * handle registration form submission
   * @param {*} event
   */
  handleAddEventForm = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const eventData = Object.fromEntries(formData.entries());
    console.log("event data", eventData);

    const isValidForm = this.validateCreateEventForm(eventData);

    if (isValidForm) {
      console.log("is the form valid?", isValidForm);
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
      this.validateField(data.delivery === 0, "invalid-event-delivery") &&
      isValid;
    isValid =
      this.validateField(data.maxCapacity, "invalid-event-capacity") && isValid;
    isValid =
      this.validateField(data.category == 0, "invalid-event-category") &&
      isValid;
      isValid =
      this.validateField(data.organizer == 0, "invalid-event-organizer") &&
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
  createNewEvent(
    name,
    description,
    topicsCovered,
    location,
    delivery,
    maxCapacity,
    organizerId
  ) {}

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
    invalidFeedbackMessages.forEach((message) => {
      message.classList.remove("d-block");
    });
  }
}
