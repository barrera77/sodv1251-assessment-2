const communicationsEmailingForm = (attendees, organizers) => `
  <div class="row w-100 m-auto">
        <div class="col-md-3 py-4 contacts-pannel">
            <div class="contacts-pannel-header py-3">
                <h5 class="text-center fw-bold">Attendees</h5>
            </div>
            <div class="panel panel-default bg-white px-3 py-4">
			<div class="panel-body contacts"> 
				<ul>
                    ${attendees
                      .map(
                        (attendee) => `
                        <li>
                            <button data-email="${attendee.email}" class="btn btn-contact text-start">${attendee.name}</button>
                        </li>                       
                        `
                      )
                      .join("")}					
				</ul>  
			</div>		
		</div>			
        </div>
        <div class="col-md-6">
          <div class="container w-100 py-4">
                <div class="border-bottom border-secondary-subttle">
                    <h5 class="text-center">Create New Message</h5>
                </div>
                <form class="message-form">
                    <div class="form-row mb-3">
                        <label for="to" class="col-2 col-sm-1 col-form-label fw-bold">To:</label>
                        <div class="col-10 col-sm-11">
                            <input type="email" class="form-control" id="to" placeholder="email(s)">
                        </div>
                    </div>
                    <div class="form-row mb-3">
                        <label for="cc" class="col-2 col-sm-1 col-form-label fw-bold">CC:</label>
                        <div class="col-10 col-sm-11">
                            <input type="email" class="form-control" id="cc" placeholder="email(s)">
                            <div
                                id="invalid-email"
                                class="invalid-feedback text-dark"
                            >
                                <i class="bi bi-exclamation-triangle"></i>
                                <span id="message">Invalid Email</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-row mb-3">
                        <label for="bcc" class="col-2 col-sm-1 col-form-label fw-bold">BCC:</label>
                        <div class="col-10 col-sm-11">
                            <input type="email" class="form-control" id="bcc" placeholder="email(s)">
                        </div>
                    </div>
                     <div class="form-row mb-3">
                        <label for="subject" class="col-2 col-sm-1 col-form-label fw-bold">Subject:</label>
                        <div class="col-10 col-sm-11">
                            <input type="text" class="form-control" id="subject">
                        </div>
                    </div>
                
                <div class="row">
                    <div class="col-sm-11 ml-auto">
                        <div class="toolbar" role="toolbar">
                            <div class="btn-group">
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-bold"></span>
                                </button>
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-italic"></span>
                                </button>
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-underline"></span>
                                </button>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-align-left"></span>
                                </button>
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-align-right"></span>
                                </button>
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-align-center"></span>
                                </button>
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-align-justify"></span>
                                </button>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-indent"></span>
                                </button>
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-outdent"></span>
                                </button>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-list-ul"></span>
                                </button>
                                <button type="button" class="btn btn-light">
                                    <span class="fa fa-list-ol"></span>
                                </button>
                            </div>
                            <button type="button" class="btn btn-light">
                                <span class="fa fa-trash-o"></span>
                            </button>
                            <button type="button" class="btn btn-light">
                                <span class="fa fa-paperclip"></span>
                            </button>
                            <div class="btn-group">
                                <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                    <span class="fa fa-tags"></span>
                                    <span class="caret"></span>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">add label <span class="badge badge-danger"> Home</span></a>
                                    <a class="dropdown-item" href="#">add label <span class="badge badge-info"> Job</span></a>
                                    <a class="dropdown-item" href="#">add label <span class="badge badge-success"> Clients</span></a>
                                    <a class="dropdown-item" href="#">add label <span class="badge badge-warning"> News</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="form-group mt-4">
                            <textarea class="form-control" id="message" name="body" rows="12" placeholder="Message"></textarea>
                        </div>
                        <div class="form-group pt-3 d-flex justify-content-between">
                            <button type="submit" class="btn btn-success"><i class="bi bi-envelope-arrow-up-fill"></i> Send</button>
                            <button type="submit" class="btn btn-outline-primary"><i class="bi bi-pencil-square"></i> Draft</button>
                            <button type="submit" class="btn btn-danger"><i class="bi bi-trash-fill"></i> Discard</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
      </div>
<div class="col-md-3 py-4 contacts-pannel">
            <div class="contacts-pannel-header py-3">
                <h5 class="text-center fw-bold">Organizers</h5>
            </div>
            <div class="panel panel-default bg-white px-3 py-4">
			<div class="panel-body contacts">
                <ul>
                ${organizers
                  .map(
                    (organizer) => `
                    <li>
                         <button class="text-start btn btn-contact" data-email="${organizer.email}">${organizer.name}</button>
                    </li>
                    `
                  )
                  .join("")}
                </ul>			
			</div>		
		</div>	      
  </div>
`;

export default communicationsEmailingForm;
