import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Events");
  }

  async getHtml() {
    return `
    <section>
      <div class="container bg-white p-3 events-list">
        <div class="border-bottom border-secondary-subttle pb-3 d-flex align-items-center gap-5">
          <h5>Events</h5>
          <a href="" class="btn btn-primary">+ New Event</a>
        </div>
        <div class="cards-wrapper py-4">
          <div class="event-card row w-75 m-auto py-3 my-3">
              <div class="col-4">
                <div class="event-image px-2">
                  <img src="https://placedog.net/500/380 " alt="event-image"></img>
                </div>
              </div>
              <div class="col-8">
                <div class="event-content">
                  <h4 class="pb-3 fw-bold">Event Name</h4>
                  <p>Description Influential media, entertainment & technology show inspirational speakers including game changing not just a large-scale conference, but a large educational hub on digital</p>
                  <div class="pt-3 d-flex justify-content-between align-items-center">
                    <div class="fs-5">
                      <i class="bi bi-calendar-date"></i>
                      <span> Date</span>
                    </div>
                    <div>
                      <a href="" class="category-box">Category</a>
                    </div>
                    <div>
                      <a href="/event-details" data-link class="btn btn-primary">Details <i class="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>   
            </div>
        </div>
        <div>
        
        </div>
      </div>
    </section>
    `;
  }
}
