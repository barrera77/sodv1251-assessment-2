import AbstractView from "./AbstractView.js";
import calendar from "./ScheduleCalendar.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Schedule");
    this.daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }

  async getHtml() {
    return `
    <section class="py-3">
      <div class="container bg-white p-3">
        <div class="border-bottom border-secondary-subttle">
          <h5><i class="bi bi-person-check"></i> Schedule/Agenda</h5>
        </div>
        <div class="calendar-container">
          <div class="calendar-wrapper">
            ${this.createMonthlyCalendar()}          
          </div>

        </div>
      </div>
    </section>        
        `;
  }

  /**
   * Create weekly calendar
   */
  createMonthlyCalendar() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Organize days into weeks
    let weeks = [[]];
    let dayCounter = 1;

    // Fill the first week with empty slots up to the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      weeks[0].push({ day: "", isToday: false });
    }

    // Populate the calendar weeks with days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDate.getDate();
      const dayObject = {
        day,
        isToday,
      };

      // Push to the current week
      weeks[weeks.length - 1].push(dayObject);

      // If the week is full (7 days), create a new week
      if (weeks[weeks.length - 1].length === 7) {
        weeks.push([]);
      }
    }

    // Fill the last week with empty slots to complete the row
    while (weeks[weeks.length - 1].length < 7) {
      weeks[weeks.length - 1].push({ day: "", isToday: false });
    }

    // Render the weeks in the calendar
    document.querySelector(".calendar-container").innerHTML = calendar(
      daysOfWeek,
      weeks
    );
  }
}
