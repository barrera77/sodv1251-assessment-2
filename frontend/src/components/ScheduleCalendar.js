const calendar = (weekdays, weeks) => `
<div class="container">
  <div class="calendar">
    <div class="front">
      <div class="current-date">
        <h1>Friday 15th</h1>
        <h1>January 2016</h1>
      </div>

      <div class="current-month">
        <ul class="week-days">
          ${weekdays
            .map(
              (day) => `
            <li>${day}</li>
            `
            )
            .join("")}                 
        </ul>

        <div class="weeks">
         
        </div>
      </div>
    </div>

    <div class="back">
      <input placeholder="What's the event?" />
      <div class="info">
        <div class="date">
          <p class="info-date">
            Date: <span>Jan 15th, 2016</span>
          </p>
          <p class="info-time">
            Time: <span>6:35 PM</span>
          </p>
        </div>
        <div class="address">
          <p>
            Address: <span>129 W 81st St, New York, NY</span>
          </p>
        </div>
        <div class="observations">
          <p>
            Observations: <span>Be there 15 minutes earlier</span>
          </p>
        </div>
      </div>

      <div class="actions">
        <button class="save">
          Save <i class="ion-checkmark"></i>
        </button>
        <button class="dismiss">
          Dismiss <i class="ion-android-close"></i>
        </button>
      </div>
    </div>
  </div>
</div>;
`;

export default calendar;
