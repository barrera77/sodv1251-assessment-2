class e{constructor(e){this.params=e}setTitle(e){document.title=e}async getHtml(){return""}}class t extends e{constructor(e){super(e),this.setTitle("Home")}async getHtml(){return`
    <div>
        <h2>Home</h2>
    </div>
    <section class="vh-75 gradient-custom">
  <div class="container py-0 h-100">
    <div class="row d-flex justify-content-center pt-3 h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card text-white login-card" style="border-radius: 1rem;">
          <div class="card-body py-3 px-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-2">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-dark mb-5">Please enter your login and password!</p>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="email"/>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input placeholder="password" type="password" id="typePasswordX" class="form-control form-control-lg" />
              </div>

              <p class="small mb-3 pb-lg-2"><a class="text-dark reset-password-link" href="#!">Forgot password?</a></p>

              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="sign-up-link text-dark fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    `}}class a extends e{constructor(e){super(e),this.setTitle("Dashboard")}async getHtml(){return`
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
    `}}const i="http://localhost:1000";async function s(e){try{let t=await fetch(`${i}${e}`);if(!t.ok)throw Error("Data not found");return await t.json()}catch(e){throw e}}const l=async(e,t)=>{let a=await fetch(`${i}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok)return await a.json();throw Error("Failed to save data")};async function n(e,t,a){try{let s=await fetch(`${i}${e}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!s.ok)throw Error(`Failed to update data: ${s.statusText}`);return await s.json()}catch(e){throw console.error("Error updating data:",e),e}}var o=(e,t)=>{let a=e.description.length>180?e.description.slice(0,180)+"...":e.description;return`
<div class="event-card row w-75 m-auto py-3 my-3">
    <div class="col-4">
        <div class="event-image px-2">
            <img src="${e.img_url}" alt="event-image"></img>
        </div>
    </div>
    <div class="col-8">
        <div class="event-content">
            <h4 class="pb-3 fw-bold">${e.name}</h4>
            <p>${a}</p>
            <div class="pt-3 d-flex justify-content-between align-items-center">
                <div class="fs-5">
                    <i class="bi bi-calendar-date"></i>
                    <span>${t}</span>
                </div>
                <div>
                    <a href="" class="category-box">${e.category}</a>
                </div>  
                <div>
                    <a href="/event-details?id=${e._id}"  data-link class="btn btn-primary" >Details <i class="bi bi-arrow-right-circle-fill"></i></a>
                </div>
            </div>
        </div>
    </div>   
</div>
`};class r extends e{constructor(e){super(e),this.setTitle("Events"),this.eventsList=[],this.scheduleList=[]}async getHtml(){this.eventsList=await this.fetchEvents(),this.scheduleList=await this.fetchSchedule();let e=this.eventsList.map(e=>{let t=this.scheduleList.find(t=>t.eventId===e._id),a=t?new Date(t.startDate):null;return o(e,a?a.toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"2-digit"}):"No date available")});return`
    <section>
      <div class="container bg-white p-3 events-list">
        <div class="border-bottom border-secondary-subttle pb-3 d-flex align-items-center gap-5">
          <h5><i class="bi bi-calendar2-event"></i> Events</h5>
          <a href="/create-event" class="btn btn-primary" data-link><i class="bi bi-plus-circle-fill"></i> New Event</a>
        </div>
        <div class="cards-wrapper py-4">
        ${e}
        </div>       
      </div>
    </section>
    `}async fetchEvents(){try{return await s("/api/events")}catch(e){console.error("Error fetching events:",e)}}async fetchSchedule(){try{return await s("/api/eventsSchedule")}catch(e){console.error("Error fetching schedule:",e)}}}var d=(e,t)=>{let a=new Date(e.startDate).toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"2-digit",timeZone:"UTC"});return`     
          <div class="w-100 mt-3">
            <div class="card event-schedule-card">
              <div class="card-image-container">
                <img src="${t.img_url} alt="product image" class="img-fluid" />
                <a href="" class="category-box">${t.category}</a>
              </div>
              <div class="card-description pb-2">
                <div class="text-center pt-2 description-container">
                  <p><strong>${t.name}</strong></p>
                </div>
                <div class="row px-3 m-auto">
                  <div class="col-6 py-2 text-center">
                    <i class="bi bi-calendar-date"></i>
                    <span>${a}</span>
                  </div>
                  <div class="col-6 text-center">
                    <a
                      href="/event-details?id=${t._id}"
                      data-link
                      class="btn btn-primary"
                      >Details <i class="bi bi-arrow-right-circle-fill"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
`};const c="/api/eventsSchedule";class v extends e{constructor(e){super(e),this.setTitle("Schedule"),this.daysOfWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.currentDate=new Date(Date.now()),this.month=this.currentDate.getMonth(),this.year=this.currentDate.getFullYear()}async getHtml(){this.eventsList=await this.fetchEvents(),this.scheduleList=await this.fetchSchedule();let e=this.currentDate.toLocaleDateString("en-US",{year:"numeric",month:"long",timeZone:"UTC"}),t=this.currentDate.toLocaleDateString("en-US",{weekday:"long"}),a=this.currentDate.getDate();this.calendarWeeks=this.createCalendar(),this.manageState(),this.rows=[];let i=this.scheduleList.map(e=>{let t=new Date(Date.now()),a=new Date(e.startDate),i=this.eventsList.find(i=>i._id===e.eventId&&a>t);return i?d(e,i):null}).join("");return`
    <section class="py-3 calendar-section">
    <div class="border-bottom border-secondary-subttle">
          <h5><i class="bi bi-person-check"></i> Schedule/Agenda</h5>
        </div>
      <div class="row calendar-row">
      <div class="col-7 bg-white p-3">        
        <div class="calendar-container py-5">
          <div class="calendar-wrapper">
            <div class="container">
              <div class="calendar">
                <div class="front">
                  <div class="current-date text-center">                    
                    <h1 class="fw-bold">${e}</h1>
                  </div>

                  <div class="current-month">
                    <ul class="weeks px-3">
                      ${this.daysOfWeek.map(e=>`
                      <li>${e}</li>
                      `).join("")}
                    </ul>

                    <div id="calendar">
                      ${this.calendarWeeks.map(e=>`
                      <ul class="weeks d-flex px-3">
                        ${e.map(e=>`
                        <li class="day">
                          <button class="btn-weekday" data-date="${this.year}-${this.month+1}-${e}">${e||""}</button>
                            <span data-date="${this.year}-${this.month+1}-${e}" class="event" style="display: none;"></span>
                          
                        </li>
                        `).join("")}
                      </ul>
                      `).join("")}
                    </div>
                  </div>
                </div>
                <div class="back">
                  <select name="events" id="events">
                      <option value"0" selected>"What's the event?"</option>
                      ${this.eventsList.map(e=>`
                        <option value="${e._id}">${e.name}</option>
                        `)}
                  </select>
                  <div class="info py-4">
                    <div class="date row w-100 m-auto">                     
                      <div class="col-4 p-0 d-flex gap-2">
                        <p>Date:</p>
                        <span class="info-date"></span>
                      </div>

                      <div class="col-8">
                        <div class="form-group d-flex gap-2">
                          <label for="time">Time: </label>
                          <div class="input-group date" id="timePicker">
                            <input type="text" class="form-control timePicker">
                            <span class="input-group-addon border px-2"><i class="bi bi-clock"></i></span>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div class="address">
                      <p>Address: <span class="info-address"></span></p>
                    </div>
                    <div class="observations">
                      <p>
                        Observations: <span>Please arrive 10-15 minutes earlier</span>
                      </p>
                    </div>
                  </div>
                  <div class="actions">
                    <button class="save">
                      Save <i class="bi bi-check-circle-fill"></i>
                    </button>
                    <button class="dismiss">
                      Dismiss <i class="bi bi-x-circle-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feedback-container py-4 container border border-danger text-center" style="display: none">
        <span class="feedback"></span>
        </div>
      </div>
      <div class="col-5 py-3">
        <div>
          <div class="pt-5 pb-2 border-bottom d-flex justify-content-between align-items-center">
            <p class="m-0">Events for today</p>
            <h3 class="fw-bold m-0">
            ${t} ${a}${(e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(a)}
            </h3>
          </div>
          <div class="no-event py-3 ps-3 mt-3">
            <p>No events in schedule for today</p>
          </div>
        </div>
        <div class="py-3">
          <div class="py-3 border-bottom">
             <h2 class="fw-bold">Upcoming Events</h2>
          </div>
          <div class="scroll-wrapper">
            <div class="py-2 event-schedule-container">
            ${i}
            </div>
          </div>
        </div>            
      </div>      
      </div>
    </section>  
   `}manageState(){this.initializeCalendar();let e=document.getElementById("events");e&&e.addEventListener("change",()=>this.populateEventDetails()),this.createTimePicker(),this.markSchedule()}initializeCalendar(){({settings:{container:document.querySelector(".calendar"),calendar:document.querySelector(".front"),days:document.querySelectorAll(".weeks button"),event:document.querySelector(".event"),form:document.querySelector(".back"),select:document.querySelector(".back select"),dismiss:document.querySelector(".dismiss"),save:document.querySelector(".save"),address:document.querySelector(".info-address"),date:document.querySelector(".info-date"),time:document.querySelector(".timePicker"),observations:document.querySelector(".observations span")},init(){this.bindUIActions()},swap(e,t){this.settings.container.classList.toggle("flip"),t===this.settings.calendar&&(this.settings.select.selectedIndex=0,this.settings.address.textContent=""),e.style.display="none",t.style.display="block"},bindUIActions(){this.settings.days.forEach(e=>{e.addEventListener("click",e=>{let t=e.currentTarget.getAttribute("data-date");this.swap(this.settings.calendar,this.settings.form);let a=document.querySelector(".info-date");a&&(a.textContent=t),this.settings.select.focus()})}),this.settings.dismiss&&this.settings.dismiss.addEventListener("click",()=>{let e=document.querySelector(".feedback"),t=document.querySelector(".feedback-container");e.textContent="",t.style.display="none",this.settings.time.value="",this.swap(this.settings.form,this.settings.calendar)}),this.settings.save&&this.settings.save.addEventListener("click",e=>{e.preventDefault(),this.validateFields()&&this.scheduleEvent()})},scheduleEvent(){let e="",t=this.settings.select.value;e={eventId:t,startDate:this.settings.date.textContent,startTime:this.settings.time.value,observations:this.settings.observations.textContent},this.saveScheduleData(c,e),alert("Event added to the schedule"),this.swap(this.settings.form,this.settings.calendar)},async saveScheduleData(e,t){try{await l(e,t)}catch(e){console.error("Error saving the schedule:",e)}},validateFields(){let e=document.querySelector(".feedback"),t=document.querySelector(".feedback-container"),a=new Date;a.setHours(0,0,0,0);let i=new Date(this.settings.date?.textContent);return(i.setHours(0,0,0,0),i<a)?(console.log("Invalid date: Date cannot be before today."),t.style.display="block",e.textContent="Invalid date: Date cannot be before today.",!1):this.settings.select?.selectedIndex===0?(console.log("Please select an event from the list"),t.style.display="block",e.textContent="Please select an event from the list.",!1):this.settings.address?.textContent?!!this.settings.time?.value||(console.log("Please select a time for the event"),t.style.display="block",e.textContent="Please select a time for the event.",!1):(console.log("Address cannot be null, please select an event"),t.style.display="block",e.textContent="Address cannot be null, please select an event.",!1)}}).init()}async fetchEvents(){try{return await s("/api/events")}catch(e){console.error("Error fetching events:",e)}}async fetchSchedule(){try{return await s(c)}catch(e){console.error("Error fetching schedule:",e)}}createCalendar(){let e=new Date,t=e.getFullYear(),a=e.getMonth(),i=new Date(t,a+1,0).getDate(),s=[];new Date(t,a,1).getDay();let l=Array(7).fill(null);for(let e=1;e<=i;e++){let n=new Date(t,a,e).getDay();l[n]=e,(6===n||e===i)&&(s.push(l),l=Array(7).fill(null))}return s}populateEventDetails(){let e=document.getElementById("events").value,t=this.eventsList.find(t=>t._id===e);if(t){let e=document.querySelector(".info-address"),a=t.location;e&&(e.textContent=a,console.log("address?",e.textContent))}}createTimePicker(){let e=document.querySelector(".timePicker"),t=document.querySelector("#timePicker .input-group-addon");e&&flatpickr(e,{enableTime:!0,noCalendar:!0,dateFormat:"h:i:K"}),t&&t.addEventListener("click",()=>{e.focus()})}renderUpcomingEvents(){scheduleList.forEach(e=>this.eventsList.find(t=>t._id===e._id).map(e=>d(e)).join(""))}markSchedule(){let e=document.querySelectorAll(".event"),t=[];this.scheduleList.forEach(e=>{let a=new Date(e.startDate);isNaN(a.getTime())||t.push(a)}),e.forEach(e=>{let a=new Date(e.getAttribute("data-date"));isNaN(a.getTime())?console.warn(`Invalid date for event: ${e.getAttribute("data-date")}`):t.some(e=>e.getTime()===a.getTime())&&(e.style.display="inline")})}}class p extends e{constructor(e){super(e),this.setTitle("Attendees"),this.attendeesList=[]}async getHtml(){return this.attendeesList=await this.fetchAttendees(),`
     <section class="py-3">
      <div class="container bg-white p-3">
        <div class="border-bottom border-secondary-subttle">
          <h5><i class="bi bi-person-check"></i> Attendees</h5>
        </div>
        <div class="table-wrapper pb-4 px-4">
          <table id="attendees" class="table table-striped table-sm">
            <thead>
              <tr>
                <th></th>
                <th>NAME</th>
                <th>CITY</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
            ${this.attendeesList.map(e=>`
              <tr>
                <td>
                  <img class="attendee-avatar" src="${e.avatar}" alt="attendee-photo"/>
                </td>
                <td class="align-middle">${e.name}</td>
                <td class="align-middle">${e.city}</td>
                <td class="align-middle">${e.email}</td>
                <td class="align-middle">${e.phone}</td>
                <td class="px-0 align-middle">
                    <div>
                      <a href="/attendee-details?id=${e._id}"  data-link class="btn btn-primary" >Details <i class="bi bi-arrow-right"></i></a>
                    </div>
                </td>
              </tr> 
              `).join("")}                
            </tbody>
          </table>
        </div>
      </div>
    </section> 
    `}async fetchAttendees(){try{return await s("/api/attendees")}catch(e){console.error("Error fetching attendees:",e)}}}var m=(e,t)=>`
  <div class="row w-100 m-auto">
        <div class="col-md-3 py-4 contacts-pannel">
            <div class="contacts-pannel-header py-3">
                <h5 class="text-center fw-bold">Attendees</h5>
            </div>
            <div class="panel panel-default bg-white px-3 py-4">
			<div class="panel-body contacts"> 
				<ul>
                    ${e.map(e=>`
                        <li>
                            <button data-email="${e.email}" class="btn btn-contact text-start">${e.name}</button>
                        </li>                       
                        `).join("")}					
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
                ${t.map(e=>`
                    <li>
                         <button class="text-start btn btn-contact" data-email="${e.email}">${e.name}</button>
                    </li>
                    `).join("")}
                </ul>			
			</div>		
		</div>	      
  </div>
`;class b extends e{constructor(e){super(e),this.setTitle("Communication"),this.attendeesList=[],this.eventsList=[],this.organizersList=[]}async getHtml(){return this.attendeesList=await this.fetchAttendees(),this.organizersList=await this.fetchOrganizers(),this.manageState()}renderHTML(){let e=m(this.attendeesList,this.organizersList),t=document.querySelector(".app");t?t.innerHTML=`
        <section>
          <div class="container p3">
            <h5>Communication</h5>
            <button onclick="window.history.back()" data-link class="btn btn-outline-primary btn-back">
              <i class="bi bi-arrow-left-circle-fill"></i> Go Back
            </button>
            <div class="form-container">
              ${e}
            </div>
          </div>
        </section>
      `:console.error("The .app container does not exist.")}manageState(){this.renderHTML(),this.handleContactButtons(),this.handleEmailForm()}handleContactButtons(){let e=document.querySelectorAll(".btn-contact");e.length>0&&e.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let a=e.getAttribute("data-email");a&&this.insertEmail(a)})})}insertEmail(e){let t=document.getElementById("to");document.getElementById("cc"),document.getElementById("bcc"),t?t.value=e:console.error("Email input field not found.")}async fetchAttendees(){try{return await s("/api/attendees")}catch(e){console.error("Error fetching attendees:",e)}}async fetchOrganizers(){try{return await s("/api/organizers")}catch(e){console.error("Error fetching organizers:",e)}}handleEmailForm(){document.querySelector("form").addEventListener("submit",async e=>{e.preventDefault();let t={to:document.getElementById("to").value,cc:document.getElementById("cc").value,bcc:document.getElementById("bcc").value,subject:document.getElementById("subject").value,message:document.getElementById("message").value};try{(await fetch("/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?(alert("Message sent succesfully!"),this.resetForms()):alert("Failed to send message")}catch(e){console.error("Error:",e),alert("Error sending email.")}})}resetForms(){document.querySelectorAll(".message-form input").forEach(e=>{e.value=""}),document.getElementById("message").value=""}}var u=(e,t)=>`
<div class="row w-100 m-auto">
    <div class="col-lg-7 p-3 event-col-one">
        <div class="event-wrap p-3">
            <div class="event-header-wrap">
                <h2 class="py-3 fw-bold">${e.name}</h2>
            </div>
            <div class="event-media">
                <img
                class="image-fluid"
                src="${e.img_url}"
                alt="event-media"
                />
                <div class="event-tags py-2">
                <a href="" class="category-box">${e.category}</a>
                </div>
            </div>

            <div class="event-content py-5">
                <h3
                class="py-3 fw-bold border-bottom border-secondary-subttle"
                >
                Description
                </h3>
                <p>${e.description}</p>
                <h3
                class="py-3 fw-bold border-bottom border-secondary-subttle"
                >
                During this event the following will be covered:
                </h3>
                <ul>
                ${e.topicsCovered.map(e=>`
                <li>${e}</li>
                `).join("")}
                </ul>
                <h3 class="py-3 fw-bold">Event Preview</h3>
                <p>
                <iframe
                    width="100%"
                    height="450"
                    src="${e.preview}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
                </p>
            </div>
        </div>
    </div>
    <div class="col-lg-5 py-3 event-col-two">
        <div class="event-sidebar d-flex flex-column gap-3">
        <div class="event-sidebar-header bg-white p-4">
            <ul class="d-flex flex-column gap-1 ps-0">
            <li class="list-group-item">
                <i class="bi bi-geo-alt text-dark"></i>${e.location}</li>
                 <hr />
            <li class="list-group-item">
                <strong>Date:</strong> January 3, 2025 - January 8, 2025
            </li>
            <hr />
            <li class="list-group-item">
                <strong>Time:</strong> 12:00 pm - 8:00 pm (UTC)
            </li>   
            </ul>
        </div>
        <div class="goto-attendees-list p-4 bg-white">
            <a
            class="btn btn-outline-primary m-auto w-75 d-flex align-items-center gap-3 justify-content-center"
            href="/event-attendees?id=${e._id}" data-link
            ><i class="bi bi-person-video2 fs-5"></i>
            Attendees List</a
            >
        </div>
        <div class="add-calendar p-4 bg-white">
            <div class="add-calendar-title">
            <h4 class="pb-3 fw-bold">Add Event To Calendar</h4>
            </div>
            <div class="calendar-links">
            <ul class="ps-0 d-flex flex-column gap-2">
                <li class="list-group-item">
                <a class="btn w-50 m-auto text-start" href=""
                    ><svg
                    fill="#ff5733"
                    width="35px"
                    height="35px"
                    viewBox="0 0 14 14"
                    role="img"
                    focusable="false"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                        d="m 13,4.69375 0,5.239 c 0,0.115 -0.04,0.212 -0.119,0.288 -0.079,0.077 -0.176,0.115 -0.29,0.115 l -4.2735,0 0,-3.4795 0.8,0.6145 c 0.051,0.0425 0.1145,0.063 0.1895,0.063 0.074,0 0.1385,-0.0205 0.1945,-0.0635 L 13,4.69375 Z m -4.6825,-1.0105 4.2735,0 c 0.1055,0 0.1965,0.0315 0.2715,0.096 0.075,0.064 0.117,0.15 0.124,0.255 l -3.6845,2.938 -0.9845,-0.7745 0,-2.5145 z m -0.6155,-2.251 0,11.1355 -6.702,-1.158 0,-8.7875 6.703,-1.19 -0.001,0 z m -2.0245,5.59 c -0.01,-0.5665 -0.1565,-1.036 -0.4395,-1.407 -0.2775,-0.37 -0.6375,-0.5655 -1.0655,-0.582 -0.412,0.0165 -0.7645,0.2115 -1.05,0.582 -0.285,0.371 -0.4275,0.841 -0.435,1.407 0.0075,0.5585 0.1575,1.0235 0.4425,1.3955 0.2855,0.37 0.637,0.5665 1.0505,0.588 0.4275,-0.0175 0.787,-0.212 1.0725,-0.585 0.285,-0.374 0.435,-0.84 0.4425,-1.3985 l -0.018,0 z m -1.56,-1.241 c 0.2155,0.01 0.397,0.128 0.5415,0.3585 0.1425,0.2305 0.2175,0.5225 0.2175,0.876 0,0.3605 -0.0745,0.6535 -0.2175,0.8855 -0.1505,0.232 -0.33,0.352 -0.548,0.352 -0.218,0 -0.3975,-0.113 -0.5475,-0.345 -0.15,-0.232 -0.2175,-0.525 -0.2175,-0.877 0,-0.3525 0.0675,-0.6455 0.2175,-0.87 0.142,-0.225 0.323,-0.345 0.5405,-0.3605 l 0.0135,-0.0195 z"
                        ></path>
                    </g></svg
                    >Outlook</a
                >
                </li>
                <li class="list-group-item">
                <a class="btn w-50 m-auto text-start" href=""
                    ><i class="bi bi-google"></i> Google</a
                >
                </li>
                <li class="list-group-item">
                <a class="btn w-50 m-auto text-start" href=""
                    ><i class="bi bi-microsoft-teams"></i> Teams</a
                >
                </li>
                <li class="list-group-item">
                <a class="btn w-50 m-auto text-start" href=""
                    ><i class="bi bi-apple"></i> Apple</a
                >
                </li>
            </ul>
            </div>
        </div>
        <div class="event-organizers bg-white p-4">
            <h4 class="pb-3 fw-bold">Organizers</h4>
           <div class="organizers-container">
                ${t.map(e=>`
                    <div class="organizer-card px-4 border-bottom">
                    <div class="organizer-photo py-3">
                        <img
                        class="w-25 image-fluid"
                        src="${e.avatarOrLogo}"
                        alt="organizer-photo"
                        />
                    </div>
                    <div class="organizer-details">
                        <p><strong>${e.name}</strong></p>
                        <div>
                        <p><strong>Email:</strong></p>
                        <p>${e.email}</p>
                        </div>
                    </div>
                </div>
                    `)}
           </div>
        </div>
        </div>
    </div>
    </div>

`,h=e=>`
<div class="p-3">
            <div class="bg-white px-3">
              <h3 class="py-3 border-bottom border-secondary-subttle"><strong>${e.name} - Photo Gallery</strong></h3>
              <div class="scroll-wrapper ">
                <div class="event-photo-gallery row d-flex flex-nowrap py-4">
                  ${e.imageGallery.map(e=>`
                    <div class="col-lg-4 col-sm-6 col-md-4">
                        <div class="gallery-card">
                            <div class="img-container w-100">
                                <img class="img-fluid w-100" src="${e}" alt="event-gallery-image"/>
                            </div>  
                        </div>              
                    </div>  
                    `).join("")}
                </div>
              </div>
            </div>
        </div>
`;class g extends e{constructor(e){super(e),this.setTitle("Event Details"),this.eventsList=[],this.organizersList=[],this.eventOrganizers=[]}async getHtml(){this.eventsList=await this.fetchEvents(),this.organizersList=await this.fetchOrganizers(),this.urlParams=new URLSearchParams(window.location.search);let e=this.urlParams.get("id"),t=this.eventsList.find(t=>t._id===e);return t.organizerId.forEach(e=>{let t=this.organizersList.find(t=>t._id===e);this.eventOrganizers.push(t)}),`
    <section>
      <div class="container p-3 event-details">
        <div class="border-bottom border-secondary-subttle d-block pb-3">
          <h5 class="mb-3">Event Details</h5>
         <div class="d-flex justify-content-between">
            <a href="/events" data-link class="btn btn-outline-primary"
              ><i class="bi bi-arrow-left-circle-fill"></i> Back to Events Listing</a
            >
            <a href="/edit-event?id=${e}" data-link class="btn btn-info"
              ><i class="bi bi-pencil-square"></i> Edit Event</a
            >
         </div>
        </div>
        <div class="event-details-container py-3"> 
        ${u(t,this.eventOrganizers)}         
        </div>
      </div>
    </section>
    <section>
      <div class="container px-3 py-3 event-details">       
        ${h(t)}
      </div>
    </section>
    `}async fetchEvents(){try{return await s("/api/events")}catch(e){console.error("Error fetching events:",e)}}async fetchOrganizers(){try{return await s("/api/organizers")}catch(e){console.error("Error fetching organizers:",e)}}}var f=(e,t)=>`
<div class="row w-100 m-auto">
    <div class="col-4 p-3 attendee-details-col-one">
        <div class="p-3 attendee-details-warap bg-white">

        <div class="py-3">
            <img src="${e.avatar}" alt="attendee-photo"></img>
        </div>
        <div>
            <h5 class="text-center fw-bold">${e.name}</h5>
            <p class="text-center">${e.city}</p>
        </div>
        <div class="text-center">
            <a href="communication" data-link class="btn btn-primary btn-contact">Contact</a>
        </div>
        
        </div>
    </div>
    <div class="col-8 p-3">
        <div class="p-4 bg-white">
           <div>
                <ul class="ps-0">
                    <li class="border-bottom list-group-item">
                        <div class="row w-100"> 
                        <div class="col-4">
                            <p><strong>Name:</strong></p>
                        </div>
                        <div class="col-8">
                            <p>${e.name}</p >
                        </div>
                        </div>
                    </li>
                    <li class="border-bottom list-group-item">
                        <div class="row w-100"> 
                        <div class="col-4">
                            <p><strong>Email:</strong></p>
                        </div>
                        <div class="col-8">
                            <p>${e.email}</p >
                        </div>
                        </div>
                    </li>
                    <li class="border-bottom list-group-item">
                        <div class="row w-100"> 
                        <div class="col-4">
                            <p><strong>Phone:</strong></p>
                        </div>
                        <div class="col-8">
                            <p>${e.phone}</p >
                        </div>
                        </div>
                    </li>
                    <li class="border-bottom list-group-item">
                        <div class="row w-100"> 
                        <div class="col-4">
                            <p><strong>Address:</strong></p>
                        </div>
                        <div class="col-8">
                            <p>${e.address}, ${e.city}</p >
                        </div>
                        </div>
                    </li>
                </ul>         
           </div>            
        </div> 
        <div class="bg-white mt-4 pb-4">
            <div class="table-wrapper pt-4">

            <table id="attendees" class="table table-striped table-sm">
                <thead>
                <tr>                  
                    <th class="ps-3">EVENT</th>
                    <th>DATE</th>
                    <th>LOCATION</th>
                </tr>
                </thead>
                <tbody>
                    ${t.map(e=>`
                    <tr>
                        <td class="ps-3">${e.name}</td>
                        <td>Date</td>
                        <td>${e.location}</td>
                    </tr>                        
                        `).join("")}
                </tbody>
            </table>

            
            </div>

           </div>                       
    </div>              
    </div>
`;class y extends e{constructor(e){super(e),this.setTitle("Attendee Details"),this.attendeesList=[],this.eventsList=[]}async getHtml(){this.eventsList=await this.fetchEvents(),this.attendeesList=await this.fetchAttendees(),this.urlParams=new URLSearchParams(window.location.search);let e=this.urlParams.get("id"),t=this.attendeesList.find(t=>t._id===e),a=[];return t.events.forEach(e=>{let t=this.eventsList.find(t=>t._id===e);a.push(t)}),`
    <section>
        <div class="container p-3  event-details">    
            <div class="border-bottom border-secondary-subttle d-block pb-3">
              <h5 class="mb-3">Attendee Details</h5>
              <button onclick="window.history.back()" data-link class="btn btn-outline-primary"
                ><i class="bi bi-arrow-left-circle-fill"></i> Back</
              >
            </div>
            <div class="attendee-details-container py-3">
              ${f(t,a)}
                          
            </div>
        </div>
    </section>
    `}async fetchAttendees(){try{return await s("/api/attendees")}catch(e){console.error("Error fetching attendees:",e)}}async fetchEvents(){try{return await s("/api/events")}catch(e){console.error("Error fetching events:",e)}}}class w extends e{constructor(e){super(e),this.setTitle("Event Attendees"),this.attendeesList=[],this.eventsList=[]}async getHtml(){this.eventsList=await this.fetchEvents(),this.attendeesList=await this.fetchAttendees(),this.urlParams=new URLSearchParams(window.location.search);let e=this.urlParams.get("id"),t=this.eventsList.find(t=>t._id===e),a=this.attendeesList.filter(e=>e.events.includes(t._id));return`
    <section class="py-3">
        <div class="container bg-white p-3">
            <div class="border-bottom border-secondary-subttle pb-3">
                <h5 class="mb-3"><i class="bi bi-calendar2-event"></i> ${t.name} - Attendees</h5>
                <button onclick="window.history.back()" data-link class="btn btn-outline-primary btn-back"
            ><i class="bi bi-arrow-left-circle-fill"></i> Back to Event Details</button
          >
            </div>
             <div class="table-wrapper pb-4 px-4">
          <table id="attendees" class="table table-striped table-sm">
            <thead>
              <tr>
                <th></th>
                <th>NAME</th>
                <th>CITY</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
            ${a.map(e=>`
              <tr>
                <td>
                  <img class="attendee-avatar" src="${e.avatar}" alt="attendee-photo"/>
                </td>
                <td class="align-middle">${e.name}</td>
                <td class="align-middle">${e.city}</td>
                <td class="align-middle">${e.email}</td>
                <td class="align-middle">${e.phone}</td>
                <td class="px-0 align-middle">
                    <div>
                      <a href="/attendee-details?id=${e._id}"  data-link class="btn btn-primary" >Details <i class="bi bi-arrow-right-circle-fill"></i></a>
                    </div>
                </td>
              </tr> 
              `).join("")}                
            </tbody>
          </table>
     
      </div>  
        </div>     
       
    </section>
    `}async fetchAttendees(){try{return await s("/api/attendees")}catch(e){console.error("Error fetching attendees:",e)}}async fetchEvents(){try{return await s("/api/events")}catch(e){console.error("Error fetching events:",e)}}goBackToPreviousPage(){window.history.back()}}class E extends e{constructor(e){super(e),this.setTitle("Create Event")}async getHtml(){return this.organizersList=await s("/api/organizers"),`
     <section class="py-3">
      <div class="container bg-white p-3">
        <div class="border-bottom border-secondary-subttle pb-3">
          <h5 class="mb-3">
            <i class="bi bi-calendar-plus-fill"></i> Create Events
          </h5>
          <button
            onclick="window.history.back()"
            data-link
            class="btn btn-outline-primary btn-back"
          >
            <i class="bi bi-arrow-left-circle-fill"></i> Back to Events
          </button>
          
        </div>
        <div>
          <div>
            <form class="event-form">
              <div>
                <div class="row py-4 ps-0">
                  <label class="form-label col-3" for="event-name">
                    Event Name:
                  </label>
                  <div class="col-9 p-0">
                    <input
                      class="form-control w-75"
                      name="name"
                      id="event-name"
                      type="text"
                    ></input>
                    <div
                      id="invalid-event-name"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid Event Name</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-description">
                    Description:
                  </label>
                  <div class="col-9 ps-0">
                    <textarea
                      class="form-control w-75"
                      name="description"
                      id="event-description"
                      type="text"
                      rows="4"
                    ></textarea>
                    <div
                      id="invalid-event-description"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event description</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-topics">
                    Topics to Cover:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                      class="form-control w-75"
                      name="topicsCovered"
                      id="event-topics"
                      type="text"
                      placeholder="e.g. ReactJS, Bootstrap, NodeJS"
                    ></input>
                    <div
                      id="invalid-event-topics"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event topics</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-location">
                    Location:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                      class="form-control w-75"
                      name="location"
                      id="event-location"
                      type="text"
                    ></input>
                    <div
                      id="invalid-event-location"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event location</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-delivery">
                    Delivery Mode:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="delivery"
                      id="event-delivery"
                      type="text"
                    >
                      <option selected value="0">
                        Select a modality . . .
                      </option>
                      <option value="In-Person">In-Person</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    <div
                      id="invalid-event-delivery"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event modality</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-capacity">
                    Capacity:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                      class="form-control w-75"
                      name="maxCapacity"
                      id="event-capacity"
                      type="number"
                      value="0"
                    />
                    <div
                      id="invalid-event-capacity"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event capacity</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-category">
                    Category:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="category"
                      id="event-category"
                    >
                      <option selected value="0">
                        Select a category . . .
                      </option>
                      <option value="Social">Social</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Fair">Fair</option>
                      <option value="Festival">Festival</option>
                    </select>
                    <div
                      id="invalid-event-category"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event category</span>
                    </div>
                  </div>
                </div>                
                <div class="row pb-4">
                  <label class="form-label col-3" for="event-organizer">
                    Organizer:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="organizerId"
                      id="event-organizer"
                    >
                      <option value="0" selected>
                        Select organizer . . .
                      </option>
                      ${this.organizersList.length>0?this.organizersList.map(e=>`<option value="${e._id}">${e.name}</option>`).join(""):'<option value="none" disabled>No organizers available</option>'}
                    </select>
                    <div
                      id="invalid-event-organizer"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event organizer</span>
                    </div>
                  </div>
                </div>               
                <div class="w-50 m-auto py-3 text-center">
                  <button class="btn btn-success">
                    <i class="bi bi-floppy"></i> Save Event
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> 
    `}manageState(){this.initializeElements(),this.removeErrorMessagesOnInput();let{eventForm:e}=this.domElements;e&&e.addEventListener("submit",this.handleAddEventForm)}initializeElements(){this.domElements={eventForm:document.querySelector(".event-form"),invalidFeedbackMessages:document.querySelectorAll(".invalid-feedback"),addEventFormInputs:document.querySelectorAll(".event-form input"),eventFormSelect:document.querySelectorAll(".event-form select"),eventDescription:document.getElementById("event-description")}}handleAddEventForm=async e=>{e.preventDefault();let t=Object.fromEntries(new FormData(e.target).entries());console.log("event data",t);let a=this.validateCreateEventForm(t);if(a){console.log("is the form valid?",a);try{await this.createNewEvent(t.name,t.description,t.topicsCovered,t.location,t.delivery,t.maxCapacity,t.category,t.organizerId)&&(alert("Event added succesfully."),this.resetForms())}catch(e){console.error("Error creating event:",e),alert("There was an error adding the event.")}}};validateCreateEventForm(e){let t=!0;return t=this.validateField(e.name,"invalid-event-name")&&t,t=this.validateField(e.description,"invalid-event-description")&&t,t=this.validateField(e.topicsCovered,"invalid-event-topics")&&t,t=this.validateField(e.location,"invalid-event-location")&&t,t=this.validateField("0"!==e.delivery,"invalid-event-delivery")&&t,t=this.validateField(e.maxCapacity,"invalid-event-capacity")&&t,t=this.validateField("0"!==e.category,"invalid-event-category")&&t,!!(t=this.validateField("0"!==e.organizerId,"invalid-event-organizer")&&t)}validateField(e,t){let a=document.getElementById(t);return e?(a.classList.remove("d-block"),!0):(a.classList.add("d-block"),!1)}async createNewEvent(e,t,a,i,s,n,o,r){try{let d=await l("/api/events",{name:e,description:t,topicsCovered:a,location:i,delivery:s,maxCapacity:n,category:o,organizerId:r});console.log("Event created successfully:",d)}catch(e){throw console.error("Error sending event:",e),e}return!0}resetForms(){document.querySelectorAll(".form-control").forEach(e=>{e.value=""}),document.querySelectorAll(".form-select").forEach(e=>{e.selectedIndex="0"})}resetFeedbaackMessages(){this.domElements.invalidFeedbackMessages.forEach(e=>{e.classList.remove("d-block")})}removeErrorMessagesOnInput(){let{addEventFormInputs:e,eventDescription:t,eventFormSelect:a}=this.domElements;e.forEach(e=>{e.addEventListener("input",t=>{let a=e.id,i=document.getElementById(`invalid-${a}`);e.value&&i.classList.remove("d-block")})}),t.addEventListener("input",()=>{let e=document.getElementById("invalid-event-description");t.value&&e.classList.remove("d-block")}),a.forEach(e=>{e.addEventListener("change",()=>{let t=e.id,a=document.getElementById(`invalid-${t}`);"0"!==t.value&&a.classList.remove("d-block")})})}}const x="/api/events";class k extends e{constructor(e){super(e),this.setTitle("Create Event"),this.organizersList=[],this.eventOrganizers=[],this.currentEvent=""}async getHtml(){this.eventsList=await s(x),this.organizersList=await s("/api/organizers"),this.urlParams=new URLSearchParams(window.location.search);let e=this.urlParams.get("id");return this.currentEvent=this.eventsList.find(t=>t._id===e),this.currentEvent.organizerId.forEach(e=>{let t=this.organizersList.find(t=>t._id===e);this.eventOrganizers.push(t)}),`
     <section class="py-3">
      <div class="container bg-white p-3">
        <div class="border-bottom border-secondary-subttle pb-3">
          <h5 class="mb-3">
            <i class="bi bi-pencil-square"></i> Edit Event
          </h5>
          <button
            onclick="window.history.back()"
            data-link
            class="btn btn-outline-primary btn-back"
          >
            <i class="bi bi-x-circle-fill"></i> Cancel
          </button>
        </div>
        <div>
          <div>
            <form class="event-form">
              <div>
                <div class="row py-4 ps-0">
                  <label class="form-label col-3" for="event-name">
                    Event Name:
                  </label>
                  <div class="col-9 p-0">
                    <input
                      readonly 
                      class="form-control w-75 bg-secondary-subtle"
                      name="name"
                      id="event-name"
                      type="text"
                      value="${this.currentEvent.name}"
                    >
                    <div
                      id="invalid-event-name"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid Event Name</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-description">
                    Description:
                  </label>
                  <div class="col-9 ps-0">
                    <textarea
                      class="form-control w-75"
                      name="description"
                      id="event-description"
                      type="text"
                      rows="4"
                    >${this.currentEvent.description}</textarea>
                    <div
                      id="invalid-event-description"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event description</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-topics">
                    Topics to Cover:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                    value="${this.currentEvent.topicsCovered}"
                      class="form-control w-75"
                      name="topicsCovered"
                      id="event-topics"
                      type="text"
                      placeholder="e.g. ReactJS, Bootstrap, NodeJS"
                    >
                    <div
                      id="invalid-event-topics"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event topics</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-location">
                    Location:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                      value="${this.currentEvent.location}"
                      class="form-control w-75"
                      name="location"
                      id="event-location"
                      type="text"
                    >
                    <div
                      id="invalid-event-location"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event location</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-delivery">
                    Delivery Mode:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="delivery"
                      id="event-delivery"
                      type="text"
                    >
                      <option selected value="0">
                        Select a modality . . .
                      </option>
                      <option value="In-Person">In-Person</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    <div
                      id="invalid-event-delivery"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event modality</span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="form-label col-3" for="event-capacity">
                    Capacity:
                  </label>
                  <div class="col-9 ps-0">
                    <input
                      value="${this.currentEvent.maxCapacity}"
                      class="form-control w-75"
                      name="maxCapacity"
                      id="event-capacity"
                      type="number"
                      value="0"
                    />
                    <div
                      id="invalid-event-capacity"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event capacity</span>
                    </div>
                  </div>
                </div>
                <div class="row py-4">
                  <label class="form-label col-3" for="event-category">
                    Category:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="category"
                      id="event-category"
                    >
                      <option selected value="0">
                        Select a category . . .
                      </option>
                      <option value="Social">Social</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Fair">Fair</option>
                      <option value="Festival">Festival</option>
                    </select>
                    <div
                      id="invalid-event-category"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event category</span>
                    </div>
                  </div>
                </div> 
                 <div class="row pb-4">
                  <label class="form-label col-3" for="current-event-location"">
                    Current Organizer(s):
                  </label>
                  <div class="col-9 ps-0">
                  ${this.eventOrganizers.length>0?this.eventOrganizers.map(e=>`
                     <input
                      readonly 
                      value="${e.name}"
                      class="form-control w-75 mb-3 bg-secondary-subtle"
                      name="currentOrganizer"
                      id="current-event-location"
                      type="text"
                    > `).join(""):'<input value="No organizers available" readonly  class="form-control w-75">'}
                                   
                  </div>
                </div>               
                <div class="row pb-4">
                  <label class="form-label col-3" for="event-organizer">
                    Add Organizer:
                  </label>
                  <div class="col-9 ps-0">
                    <select
                      class="form-select col-8 w-50 text-muted"
                      name="organizerId"
                      id="event-organizer"
                    >
                      <option value="0" selected>
                        Select organizer . . .
                      </option>
                      ${this.organizersList.length>0?this.organizersList.map(e=>`<option value="${e._id}">${e.name}</option>`).join(""):'<option value="none" readonly >No organizers available</option>'}
                    </select>
                    <div
                      id="invalid-event-organizer"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid event organizer</span>
                    </div>
                  </div>
                </div>
                <div class="row w-75 m-auto py-3">
                  <div class="col-3">
                    <button class="btn btn-outline-info btn-upload" type="button">
                      Upload Image
                    </button>
                  </div>
                  <div class="col-9 p-0">
                    <input
                      type="file"
                      id="file"
                      name="eventImage"
                      accept="image/*"
                      class="text-muted form-control file-input"
                    >
                     <div
                      id="invalid-file"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span id="message">Invalid file</span>
                    </div>
                  </div>
                </div>
                <div class="w-50 m-auto py-3 text-center">
                  <button class="btn btn-success">
                    <i class="bi bi-floppy"></i> Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section> 
    `}manageState(){this.initializeElements(),this.removeErrorMessagesOnInput();let{eventForm:e}=this.domElements;e&&e.addEventListener("submit",this.handleAddEventForm),this.setSelectElementsInitialValue(this.currentEvent),this.uploadPictures()}initializeElements(){this.domElements={eventForm:document.querySelector(".event-form"),invalidFeedbackMessages:document.querySelectorAll(".invalid-feedback"),addEventFormInputs:document.querySelectorAll(".event-form input"),eventFormSelect:document.querySelectorAll(".event-form select"),eventDescription:document.getElementById("event-description"),selectEventCategory:document.getElementById("event-category"),selectEventDelivery:document.getElementById("event-delivery"),uploadButton:document.querySelector(".btn-upload"),fileInput:document.querySelector(".file-input")}}setSelectElementsInitialValue(e){let{selectEventCategory:t,selectEventDelivery:a}=this.domElements;a.value=e.delivery,t.value=e.category}handleAddEventForm=async e=>{e.preventDefault(),this.urlParams=new URLSearchParams(window.location.search);let t=this.urlParams.get("id"),a=Object.fromEntries(new FormData(e.target).entries());console.log(t);let i=this.validateCreateEventForm(a);if(i){console.log("is the form valid?",i);try{await this.updateCurrentEvent(t,a.name,a.description,a.topicsCovered,a.location,a.delivery,a.maxCapacity,a.category,a.organizerId)&&(alert("Event updated succesfully."),this.resetForms())}catch(e){console.error("Error updating event:",e),alert("There was an error updating the event.")}}};validateCreateEventForm(e){let t=!0;return t=this.validateField(e.name,"invalid-event-name")&&t,t=this.validateField(e.description,"invalid-event-description")&&t,t=this.validateField(e.topicsCovered,"invalid-event-topics")&&t,t=this.validateField(e.location,"invalid-event-location")&&t,t=this.validateField("0"!==e.delivery,"invalid-event-delivery")&&t,t=this.validateField(e.maxCapacity,"invalid-event-capacity")&&t,t=this.validateField("0"!==e.category,"invalid-event-category")&&t,!!(t=this.validateField("0"!==e.organizerId,"invalid-event-organizer")&&t)}validateField(e,t){let a=document.getElementById(t);return e?(a.classList.remove("d-block"),!0):(a.classList.add("d-block"),!1)}async updateCurrentEvent(e,t,a,i,s,l,o,r,d){try{await n(x,e,{name:t,description:a,topicsCovered:i,location:s,delivery:l,maxCapacity:o,category:r,organizerId:d})}catch(e){throw console.error("Error updating event:",e),e}return!0}resetForms(){document.querySelectorAll(".form-control").forEach(e=>{e.value=""}),document.querySelectorAll(".form-select").forEach(e=>{e.selectedIndex="0"})}resetFeedbaackMessages(){this.domElements.invalidFeedbackMessages.forEach(e=>{e.classList.remove("d-block")})}removeErrorMessagesOnInput(){let{addEventFormInputs:e,eventDescription:t,eventFormSelect:a}=this.domElements;e.forEach(e=>{e.addEventListener("input",t=>{let a=e.id,i=document.getElementById(`invalid-${a}`);e.value&&i.classList.remove("d-block")})}),t.addEventListener("input",()=>{let e=document.getElementById("invalid-event-description");t.value&&e.classList.remove("d-block")}),a.forEach(e=>{e.addEventListener("change",()=>{let t=e.id,a=document.getElementById(`invalid-${t}`);"0"!==t.value&&a.classList.remove("d-block")})})}uploadPictures(){let{uploadButton:e,fileInput:t}=this.domElements;if(!e||!t){console.error("DOM elements not found!");return}e.addEventListener("click",async e=>{e.preventDefault();let a=t.files[0];if(!a){alert("Please select a file to upload"),console.error("No file selected");return}console.log("Selected file:",a);let i=new FormData;i.append("eventImage",a);try{let e=await fetch("/api/upload",{method:"POST",body:i});if(console.log("Response:",e),e.ok){let t=await e.json();alert(`Image uploaded successfully! File URL: ${t.filePath}`),console.log(`Uploaded File URL: ${t.filePath}`)}else{let t=await e.json();alert(`Upload failed: ${t.message}`),console.error("Error response:",t)}}catch(e){console.error("Error during file upload:",e),alert("An error occurred while uploading the file.")}})}}const S=e=>RegExp("^"+e.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$"),L=e=>{let t=e.result.slice(1);return Object.fromEntries(Array.from(e.route.path.matchAll(/:(\w+)/g)).map(e=>e[1]).map((e,a)=>[e,t[a]]))},$=e=>{history.pushState(null,null,e),I()},I=async()=>{let e=[{path:"/",view:t},{path:"/dashboard",view:a},{path:"/events",view:r},{path:"/event-details",view:g},{path:"/create-event",view:E},{path:"/edit-event",view:k},{path:"/event-attendees",view:w},{path:"/schedule",view:v},{path:"/attendees",view:p},{path:"/attendee-details",view:y},{path:"/communication",view:b}],i=e.map(e=>({route:e,result:location.pathname.match(S(e.path))})).find(e=>null!==e.result);i||(i={route:e[0],result:[location.pathname]});let s=new i.route.view(L(i)),l=document.querySelector(".app");l&&(l.innerHTML=await s.getHtml()),"function"==typeof s.manageState&&s.manageState()};window.addEventListener("popstate",I),document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",e=>{e.target.matches("a[data-link]")&&(e.preventDefault(),$(e.target.href))}),I()}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",function(){document.querySelectorAll(".nav-link").forEach(e=>e.classList.remove("active")),this.classList.add("active")})});
//# sourceMappingURL=index.46a05e0a.js.map
