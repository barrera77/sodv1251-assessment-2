import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }
  async getHtml() {
    return `
    <section class="py-3">
        <div class="container bg-white p-3 upcoming-events">
            <div class="border-bottom border-secondary-subttle d-flex justify-content-between pb-3">
            <h5><i class="bi bi-journal-bookmark"></i> Upcoming Events</h5>
                <button class="btn btn-dark btn-all-events">View all Events</button>
            </div>
            <div class="table-wrapper py-4">
                <table id="table-upcoming-events" class="table table-striped table-sm">
                    <thead class="">
                        <tr>
                            <th class="ps-3">EVENT</th>
                            <th>STATUS</th>
                            <th>DATE</th>
                            <th>REGISTRATIONS</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="ps-3">Tech Talent Meetup</td>
                            <td>Live</td>
                            <td>Thursday, 24-Sep-2024</td>
                            <td>9/25</td>
                        </tr>
                        <tr>
                            <td class="px-3">Tech Talent Meetup</td>
                            <td>Live</td>
                            <td>Thursday, 24-Sep-2024</td>
                            <td>9/25</td>
                        </tr>
                        <tr>
                            <td class="px-3">Tech Talent Meetup</td>
                            <td>Live</td>
                            <td>Thursday, 24-Sep-2024</td>
                            <td>9/25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section class="py-3">
        <div class="container bg-white p-3 upcoming-events">
            <div class="border-bottom border-secondary-subttle d-flex justify-content-between pb-3">
                <h5><i class="bi bi-bookmarks"></i> Recent Registrations</h5>
            </div>
            <div class="table-wrapper py-4">
                <table id="recent-registrations" class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th class="px-3">NAME</th>
                            <th>REGISTERED ON</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="px-3">Manuel Alva</td>
                            <td>08/09/1977</td>
                            <td>Confirmed</td>
                        </tr>
                        <tr>
                            <td class="px-3">Manuel Alva</td>
                            <td>08/09/1977</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td class="px-3">Manuel Alva</td>
                            <td>08/09/1977</td>
                            <td>Cancelled</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    `;
  }
}
