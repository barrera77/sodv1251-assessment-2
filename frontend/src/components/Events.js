import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Events");
  }

  async getHtml() {
    return `
    <div>
        <h5>Events</h5>
    </div>
    `;
  }
}
