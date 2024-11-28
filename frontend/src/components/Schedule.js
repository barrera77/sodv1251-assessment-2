import AbstractView from "./AbstractView.js";
import { getData, saveData } from "../utils/api-utility.js";
import eventScheduleCard from "../templates/EventScheduleCard.js";

const EVENTS_END_POINT = "/api/events";
const SCHEDULE_END_POINT = "/api/eventsSchedule";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Schedule");
    this.daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.currentDate = new Date();
    this.month = this.currentDate.getMonth();
    this.year = this.currentDate.getFullYear();
  }

  async getHtml() {
    this.eventsList = await this.fetchEvents();
    this.scheduleList = await this.fetchSchedule();

    const formattedDate = this.currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    const dayOfTheWeek = this.currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const dayOfTheMonth = this.currentDate.getDate();

    //find the ordinal suffix for the day opf the mont("st", "nd", "rd", or "th")
    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th";

      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    //get the current month week rows array
    this.calendarWeeks = this.createCalendar();

    //Manage post-rendering
    this.manageState();

    this.rows = [];

    //get the upcoming events
    const rows = this.scheduleList
      .map((schedule) => {
        const matchingEvent = this.eventsList.find(
          (event) => event._id === schedule.eventId
        );

        return eventScheduleCard(schedule, matchingEvent);
      })
      .join("");

    return `
    <section class="py-3 calendar-section">
    <div class="border-bottom border-secondary-subttle">
          <h5><i class="bi bi-person-check"></i> Schedule/Agenda</h5>
        </div>
      <div class="row calendar-row">
      <div class="col-7 bg-white p-3">        
        <div class="calendar-container py-5">
          <div class="calendar-wrapper">
            <div class="container">
              <div class="calendar">
                <div class="front">
                  <div class="current-date text-center">                    
                    <h1 class="fw-bold">${formattedDate}</h1>
                  </div>

                  <div class="current-month">
                    <ul class="weeks px-3">
                      ${this.daysOfWeek
                        .map(
                          (day) => `
                      <li>${day}</li>
                      `
                        )
                        .join("")}
                    </ul>

                    <div id="calendar">
                      ${this.calendarWeeks
                        .map(
                          (week) => `
                      <ul class="weeks d-flex px-3">
                        ${week
                          .map(
                            (day) => `
                        <li class="day">
                          <button class="btn-weekday" data-date="${this.year}-${
                              this.month + 1
                            }-${day}">${day || ""}</button>
                            <span data-date="${this.year}-${this.month + 1}-${
                              day + 1
                            }" class="event" style="display: none;"></span>
                          
                        </li>
                        `
                          )
                          .join("")}
                      </ul>
                      `
                        )
                        .join("")}
                    </div>
                  </div>
                </div>
                <div class="back">
                  <select name="events" id="events">
                      <option value"0" selected>"What's the event?"</option>
                      ${this.eventsList.map(
                        (event) => `
                        <option value="${event._id}">${event.name}</option>
                        `
                      )}
                  </select>
                  <div class="info py-4">
                    <div class="date row w-100 m-auto">                     
                      <div class="col-4 p-0 d-flex gap-2">
                        <p>Date:</p>
                        <span class="info-date"></span>
                      </div>

                      <div class="col-8">
                        <div class="form-group d-flex gap-2">
                          <label for="time">Time: </label>
                          <div class="input-group date" id="timePicker">
                            <input type="text" class="form-control timePicker">
                            <span class="input-group-addon border px-2"><i class="bi bi-clock"></i></span>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div class="address">
                      <p>Address: <span class="info-address"></span></p>
                    </div>
                    <div class="observations">
                      <p>
                        Observations: <span>Please arrive 10-15 minutes earlier</span>
                      </p>
                    </div>
                  </div>
                  <div class="actions">
                    <button class="save">
                      Save <i class="bi bi-check-circle-fill"></i>
                    </button>
                    <button class="dismiss">
                      Dismiss <i class="bi bi-x-circle-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feedback-container py-4 container border border-danger text-center" style="display: none">
        <span class="feedback"></span>
        </div>
      </div>
      <div class="col-5 py-3">
        <div>
          <div class="pt-5 pb-2 border-bottom d-flex justify-content-between align-items-center">
            <p class="m-0">Events for today</p>
            <h3 class="fw-bold m-0">
            ${dayOfTheWeek} ${dayOfTheMonth}${getOrdinalSuffix(dayOfTheMonth)}
            </h3>
          </div>
          <div class="no-event py-3 ps-3 mt-3">
            <p>No events in schedule for today</p>
          </div>
        </div>
        <div class="py-3">
          <div class="py-3 border-bottom">
             <h2 class="fw-bold">Upcoming Events</h2>
          </div>
          <div class="scroll-wrapper">
            <div class="py-2 event-schedule-container">
            ${rows}
            </div>
          </div>
        </div>            
      </div>      
      </div>
    </section>  
   `;
  }

  /**
   * function to handle the post-rendering logic
   */
  manageState() {
    //initialize calendar components adn logic on flip
    this.initializeCalendar();

    //Add event listener to teh select after flipping the calendar
    const eventSelect = document.getElementById("events");
    if (eventSelect) {
      eventSelect.addEventListener("change", () => this.populateEventDetails());
    }

    //get the itimepicker
    this.createTimePicker();

    this.markSchedule();
  }

  /**
   * Initialize the calendar component to accesss the form
   * to add events to the schedule
   */
  initializeCalendar() {
    //Calendar effects based on https://codepen.io/gabrielcolombo
    const app = {
      settings: {
        container: document.querySelector(".calendar"),
        calendar: document.querySelector(".front"),
        days: document.querySelectorAll(".weeks button"),
        event: document.querySelector(".event"),
        form: document.querySelector(".back"),
        select: document.querySelector(".back select"),
        dismiss: document.querySelector(".dismiss"),
        save: document.querySelector(".save"),
        address: document.querySelector(".info-address"),
        date: document.querySelector(".info-date"),
        time: document.querySelector(".timePicker"),
        observations: document.querySelector(".observations span"),
      },

      /**
       * Initialize app (set up event listeners).
       */
      init() {
        this.bindUIActions();
      },

      /**
       * Flip between the front and back of the calendar
       * @param {*} currentSide
       * @param {*} desiredSide
       */
      swap(currentSide, desiredSide) {
        this.settings.container.classList.toggle("flip");

        // Reset select input value
        if (desiredSide === this.settings.calendar) {
          this.settings.select.selectedIndex = 0; // Set events default value
          this.settings.address.textContent = "";
        }

        currentSide.style.display = "none"; // Hide the current side
        desiredSide.style.display = "block"; // Show the desired side
      },

      /**
       * Add event listeners to interactive elements
       */
      bindUIActions() {
        this.settings.days.forEach((day) => {
          day.addEventListener("click", (event) => {
            const selectedDate = event.currentTarget.getAttribute("data-date");
            this.swap(this.settings.calendar, this.settings.form);
            const dateElement = document.querySelector(".info-date");
            if (dateElement) {
              dateElement.textContent = selectedDate;
            }
            this.settings.select.focus();
          });
        });

        if (this.settings.dismiss) {
          this.settings.dismiss.addEventListener("click", () => {
            const feedbackElement = document.querySelector(".feedback");
            const feedbackContainer = document.querySelector(
              ".feedback-container"
            );

            feedbackElement.textContent = "";
            feedbackContainer.style.display = "none";
            this.settings.time.value = "";
            this.swap(this.settings.form, this.settings.calendar);
          });
        }

        //create a schedule object
        if (this.settings.save) {
          this.settings.save.addEventListener("click", (event) => {
            event.preventDefault();

            if (!this.validateFields()) {
              return;
            } else {
              this.scheduleEvent();
            }
          });
        }
      },

      /**
       * Create schedule object
       */
      scheduleEvent() {
        let newSchedule = "";

        const eventId = this.settings.select.value;
        const eventDate = this.settings.date.textContent;
        const eventTime = this.settings.time.value;
        const eventObservations = this.settings.observations.textContent;

        newSchedule = {
          eventId: eventId,
          startDate: eventDate,
          startTime: eventTime,
          observations: eventObservations,
        };
        this.saveScheduleData(SCHEDULE_END_POINT, newSchedule);
        alert("Event added to the schedule");
        this.swap(this.settings.form, this.settings.calendar);
      },

      async saveScheduleData(newSchedule, endpoint) {
        try {
          await saveData(endpoint, newSchedule);
        } catch (error) {
          console.error("Error saving the schedule:", error);
        }
      },

      //TODO: revise validation, is notstoping the flow if it has errors

      validateFields() {
        const feedbackElement = document.querySelector(".feedback");
        const feedbackContainer = document.querySelector(".feedback-container");

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set to midnight for comparison

        const selectedDate = new Date(this.settings.date?.textContent);
        selectedDate.setHours(0, 0, 0, 0); // Set selected date to midnight as well

        if (selectedDate < currentDate) {
          console.log("Invalid date: Date cannot be before today.");
          feedbackContainer.style.display = "block";
          feedbackElement.textContent =
            "Invalid date: Date cannot be before today.";

          return false;
        }
        if (this.settings.select?.selectedIndex === 0) {
          console.log("Please select an event from the list");
          feedbackContainer.style.display = "block";
          feedbackElement.textContent = "Please select an event from the list.";
          return false;
        }
        if (!this.settings.address?.textContent) {
          console.log("Address cannot be null, please select an event");
          feedbackContainer.style.display = "block";
          feedbackElement.textContent =
            "Address cannot be null, please select an event.";
          return false;
        }
        if (!this.settings.time?.value) {
          console.log("Please select a time for the event");
          feedbackContainer.style.display = "block";
          feedbackElement.textContent = "Please select a time for the event.";
          return false;
        } else {
          return true;
        }
      },
    };

    /**
     * Initialize the app object
     */
    app.init();
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
   * fetch the schedule from the server
   * @returns schedule array
   */
  async fetchSchedule() {
    try {
      const schedule = await getData(SCHEDULE_END_POINT);
      //console.table(schedule);
      return schedule;
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  }

  /**
   * Create a multidimensional array representing on each row a week of the month
   * @returns multi-dimensional Array containing the values (days)
   * from current monthof the year
   */
  createCalendar() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Get the total number of days in the current month
    const totalDaysInMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();

    // Array to contain the week rows
    const calendarArray = [];

    // Find the first day of the month and its corresponding weekday
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startDay = firstDayOfMonth.getDay(); // 0 (Sun) to 6 (Sat)

    //array to contain days for the current week
    let weekArray = new Array(7).fill(null); // Initialize with null for 7 days

    for (let day = 1; day <= totalDaysInMonth; day++) {
      const currentDate = new Date(currentYear, currentMonth, day);
      const currentDayOfWeek = currentDate.getDay();

      // Place the day in the correct position in the week
      weekArray[currentDayOfWeek] = day;

      // If it's the last day of the week (Saturday) or the last day of the month
      if (currentDayOfWeek === 6 || day === totalDaysInMonth) {
        calendarArray.push(weekArray);
        weekArray = new Array(7).fill(null);
      }
    }
    return calendarArray;
  }

  /**
   * populate the event details in the correspopnding elements of
   * the form
   */
  populateEventDetails() {
    const selectElement = document.getElementById("events");
    const selectedValue = selectElement.value;

    // Get the details of the selected event
    const selectedEvent = this.eventsList.find(
      (event) => event._id === selectedValue
    );

    // Update the info section if an event is selected
    if (selectedEvent) {
      const addressElement = document.querySelector(".info-address");
      let eventLocation = selectedEvent.location;

      if (addressElement) {
        addressElement.textContent = eventLocation;

        console.log("address?", addressElement.textContent);
      }
    }
  }

  /**
   * Create a TimePicker using an instance of flatpickr from
   * https://flatpickr.js.org/
   */
  createTimePicker() {
    const timeSelector = document.querySelector(".timePicker");
    const clockIcon = document.querySelector("#timePicker .input-group-addon");

    if (timeSelector) {
      flatpickr(timeSelector, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i:K",
      });
    }
    // show the timepicker when clicking the clock icon
    if (clockIcon) {
      clockIcon.addEventListener("click", () => {
        timeSelector.focus();
      });
    }
  }

  renderUpcomingEvents() {
    scheduleList.forEach((schedule) => {
      const scheduleList = this.eventsList.find(
        (event) => event._id === schedule._id
      );

      const rows = scheduleList.map((item) => eventScheduleCard(item)).join("");

      return rows;
    });
  }

  /**
   * Mark teh dates that have events on them already for reference
   */
  markSchedule() {
    const eventElements = document.querySelectorAll(".event");
    let datesToCompare = [];

    this.scheduleList.forEach((schedule) => {
      const date = new Date(schedule.startDate);

      if (!isNaN(date.getTime())) {
        datesToCompare.push(date);
      }
    });

    eventElements.forEach((event) => {
      const eventDate = new Date(event.getAttribute("data-date")); // Get date from event element

      if (!isNaN(eventDate.getTime())) {
        const dateToMark = datesToCompare.some(
          (date) => date.getTime() === eventDate.getTime()
        );

        //Mark the date if any matches
        if (dateToMark) {
          event.style.display = "inline";
        }
      } else {
        console.warn(
          `Invalid date for event: ${event.getAttribute("data-date")}`
        );
      }
    });
  }
}
