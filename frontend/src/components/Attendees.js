import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Attendees");
  }

  async getHtml() {
    return `
        <div>
            <h5>Attendees</h5>
        </div>
        `;
  }
}
