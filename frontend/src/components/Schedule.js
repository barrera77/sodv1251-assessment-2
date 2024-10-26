import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Schedule");
  }

  async getHtml() {
    return `
        <div>
            <h5>Schedule/Agenda</h5>
        </div>        
        `;
  }
}
