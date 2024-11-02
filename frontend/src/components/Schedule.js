import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";

const EVENTS_END_POINT = "/api/events";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Schedule");
    this.daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.currentDate = new Date();
    this.month = this.currentDate.getMonth();
    this.year = this.currentDate.getFullYear();
    this.eventsList = [];
  }

  async getHtml() {
    this.eventsList = await this.fetchEvents();
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

    return `
    <section class="py-3">
      <div class="container bg-white p-3">
        <div class="border-bottom border-secondary-subttle">
          <h5><i class="bi bi-person-check"></i> Schedule/Agenda</h5>
        </div>
        <div class="calendar-container py-5">
          <div class="calendar-wrapper">
            <div class="container">
              <div class="calendar">
                <div class="front">
                  <div class="current-date">
                    <h1 class="fw-bold">
                      ${dayOfTheWeek} ${dayOfTheMonth}${getOrdinalSuffix(
      dayOfTheMonth
    )}
                    </h1>
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
                          <button class="btn-weekday">${day || ""}</button>
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
                      <option value"" selected>"What's the event?"</option>
                      ${this.eventsList.map(
                        (event) => `
                        <option value="${event._id}">${event.name}</option>
                        `
                      )}
                  </select>
                  <div class="info">
                    <div class="date">
                      <p class="info-date">Date: <span>Jan 15th, 2016</span></p>
                      <p class="info-time">Time: <span>6:35 PM</span></p>
                    </div>
                    <div class="address">
                      <p>Address: <span></span></p>
                    </div>
                    <div class="observations">
                      <p>
                        Observations: <span>Be there 15 minutes earlier</span>
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
      </div>
    </section>  
   `;
  }

  /**
   * function to handle the post-rendering logic
   */
  manageState() {
    /*Calendar effects based on https://codepen.io/gabrielcolombo*/

    //Flip the calendar
    const app = {
      settings: {
        container: document.querySelector(".calendar"),
        calendar: document.querySelector(".front"),
        days: document.querySelectorAll(".weeks button"),
        form: document.querySelector(".back"),
        input: document.querySelector(".back select"),
        buttons: document.querySelectorAll(".back button"),
      },

      init() {
        this.bindUIActions();
      },

      swap(currentSide, desiredSide) {
        this.settings.container.classList.toggle("flip");

        currentSide.style.display = "none"; // Hide the current side
        desiredSide.style.display = "block"; // Show the desired side
      },

      bindUIActions() {
        this.settings.days.forEach((day) => {
          day.addEventListener("click", () => {
            this.swap(this.settings.calendar, this.settings.form);
            this.settings.input.focus();
          });
        });

        this.settings.buttons.forEach((button) => {
          button.addEventListener("click", () => {
            this.swap(this.settings.form, this.settings.calendar);
          });
        });
      },
    };

    app.init();

    //Add event listener to teh sel;ect after flipping the calendar
    const eventSelect = document.getElementById("events");
    if (eventSelect) {
      eventSelect.addEventListener("change", () => this.populateEventDetails());
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

  // Function to populate the event details
  populateEventDetails() {
    const selectElement = document.getElementById("events");
    const selectedValue = selectElement.value;

    //selectElement.addEventListener("change", populateEventDetails);

    // Get the details of the selected event
    const eventDetails = this.eventsList.find(
      (event) => event._id === selectedValue
    );

    // Update the info section if an event is selected
    if (eventDetails) {
      //document.getElementById("event-date").textContent = eventDetails.date;
      //document.getElementById("event-time").textContent = ;
      document.querySelector(".address span").textContent =
        eventDetails.location;
    } else {
      // Clear the details if no valid event is selected
      //document.getElementById("event-date").textContent = "";
      //document.getElementById("event-time").textContent = "";
      document.querySelector(".address span").textContent = "";
    }
  }
}
