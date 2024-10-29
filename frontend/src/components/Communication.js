import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Communication");
  }

  async getHtml() {
    return `
    <div>
        <h5>Communication</h5>
        <button onclick="window.history.back()" data-link class="btn btn-outline-primary btn-back">Go Back</button>
    </div>
    `;
  }
}
