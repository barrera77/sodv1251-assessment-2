import AbstractView from "./AbstractView.js";
import { saveData } from "../utils/api-utility.js";

const EVENTS_END_POINT = "/api/events";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Create Event");
  }

  async getHtml() {
    return `
     <section class="py-3">
        <div class="container bg-white p-3">
         <div class="border-bottom border-secondary-subttle pb-3">
            <h5 class="mb-3"><i class="bi bi-calendar-plus-fill"></i> Create Events</h5>
            <button onclick="window.history.back()" data-link class="btn btn-outline-primary btn-back"
        ><i class="bi bi-arrow-left-circle-fill"></i> Back to Events</button
        >
        </div>

        <div>
            <div>

                <form method="post" enctype="multipart/form-data">
                    <div>                    
                        <div class="row py-4">
                            <label class="form-label col-3" for="event-name">Event Name:</label>
                            <input class="form-control col-8 w-50" name="event-name" id="event-name" type="text"></input>
                        </div>
                        <div class="row">
                            <label class="form-label col-3" for="event-description">Description:</label>
                            <input class="form-control col-8 w-50" name="event-description" id="event-description" type="text"></input>
                        </div>
                        <div class="row py-4">
                            <label class="form-label col-3" for="event-topics">Topics to Cover:</label>
                            <input class="form-control col-8 w-50" name="event-topics" id="event-topics" type="text" placeholder="e.g. ReactJS, Bootstrap, NodeJS"></input>
                        </div>
                        <div class="row">
                            <label class="form-label col-3" for="event-location">Location:</label>
                            <input class="form-control col-8 w-50" name="event-location" id="event-location" type="text"></input>
                        </div>
                        <div class="row py-4">
                            <label class="form-label col-3" for="event-delivery">Delivery Mode:</label>
                            <select class="form-select col-8 w-50 text-muted" name="event-delivery" id="event-delivery" type="text" >
                                <option value="0">Select a modality . . .</option>
                                <option value="In-Person">In-Person</option>
                                <option value="Virtual">Virtual</option>
                                <option value="Hybrid">Hybrid</option>
                            </select>
                        </div>
                        <div class="row">
                            <label class="form-label col-3" for="event-capacity">Capacity:</label>
                            <input class="form-control col-8 w-50" name="event-capacity" id="event-capacity" type="number" value="0"/>
                        </div>
                        <div class="row py-4">
                            <label class="form-label col-3" for="event-category">Category:</label>
                            <select class="form-select col-8 w-50 text-muted" name="event-category" id="event-category">
                                <option value="0">Select a category . . .</option>
                                <option value="Social">Social</option>
                                <option value="Worshop">Worshop</option>
                                <option value="Seminar">Seminar</option>
                                <option value="Fair">Fair</option>
                                <option value="Festival">Festival</option>
                            </select>
                        </div>
                        <div>
                            <label class="form-label col-3" for="event-image>Upload Image:</label>
                            <input type="file" name="image" id="image"/>
                        </div>


                        
                    </div>
                
                </form>


            </div>
        </div>
        
        </div>
     </section>
    
    `;
  }
}
