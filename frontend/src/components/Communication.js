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
    </div>
    `;
  }
}
