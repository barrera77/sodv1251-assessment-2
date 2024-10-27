import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Event Details");
  }

  async getHtml() {
    return `
    <section>
      <div class="container p-3 event-details">
        <div class="border-bottom border-secondary-subttle d-block pb-3">
          <h5 class="mb-3">Event Details</h5>
          <a href="/events" data-link class="btn btn-outline-primary"
            ><i class="bi bi-arrow-left"></i> Back to Events Listing</a
          >
        </div>

        <div class="event-details-container py-3">
          <div class="row w-100 m-auto">
            <div class="col-lg-7 p-3 event-col-one">
              <div class="event-wrap p-3">
                <div class="event-header-wrap">
                 
                  <h2 class="py-3 fw-bold">Event Name</h2>
                </div>
                <div class="event-media">
                  <img
                    class="image-fluid"
                    src="https://placedog.net/500/400"
                    alt="event-media"
                  />
                  <div class="event-tags py-2">
                  <a href="" class="category-box">Category</a>
                </div>
                </div>
                
                <div class="event-content py-5">
                  <h3 class="py-3 fw-bold border-bottom border-secondary-subttle">Description</h3>
                  <p>
                    Influential media, entertainment & technology show
                    inspirational speakers including game changing not just a
                    large-scale conference, but a large educational hub on
                    digital technologies for business, where people communicate,
                    get inspired and find ready-made solutions or business.
                    Taking place over two days this year will be the 10th
                    Conference Ideas with a theme of Dangerous Realities. It
                    features sessions and performances that explore climate
                    change, meritocracy, giving Influential media, entertainment
                    & technology show inspirational speakers including game
                    changing not just a large-scale conference, but a large
                    educational hub on digital technologies for business, where
                    people communicate, get inspired and find ready-made
                    solutions or business.
                  </p>
                  <h3 class="py-3 fw-bold border-bottom border-secondary-subttle">
                    During this event the following will be covered:
                  </h3>
                  <ul>
                    <li>
                      How to get started learning JavaScript the right way
                    </li>
                    <li>
                      JavaScript for Beginners & CS Prep curriculum details
                    </li>
                    <li>
                      What the experience of learning in an online classroom is
                      like
                    </li>
                    <li>
                      How these programs prepare you for Coders and other top
                      coding programsHere is the teaser
                    </li>
                  </ul>
                  <h3 class="py-3 fw-bold">Event Preview</h3>
                  <p>
                    <iframe
                      width="100%"
                      height="450"
                      src="https://www.youtube.com/embed/2w4sRkTnhPM?si=58Is-mkbwQw5rtxW"
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
                      <strong>Date:</strong> January 3, 2025 - January 8, 2025
                    </li>
                    <hr />
                    <li class="list-group-item">
                      <strong>Time:</strong> 12:00 pm - 8:00 pm (UTC)
                    </li>
                    <hr />
                    <li class="list-group-item">
                      <i class="bi bi-geo-alt text-dark"></i> Bow Valley College
                      Room 74035
                    </li>
                  </ul>
                </div>
                <div class="goto-attendees-list p-4 bg-white">
                  <a
                    class="btn btn-outline-primary m-auto w-75 d-flex align-items-center gap-3 justify-content-center"
                    href=""
                    ><i class="bi bi-person-video2 fs-5"></i>
                    <span>Attendees List</span></a
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
                  <div class="organizer-card px-4 border-bottom">
                    <div class="organizer-photo py-3">
                      <img
                        class="w-25 image-fluid"
                        src="https://avatar.iran.liara.run/public"
                        alt="organizer-photo"
                      />
                    </div>
                    <div class="organizer-details">
                      <p><strong>Name</strong></p>
                      <div>
                        <p><strong>Email:</strong></p>
                        <p>organizer@email.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="organizer-card px-4 border-bottom">
                    <div class="organizer-photo py-3">
                      <img
                        class="w-25 image-fluid"
                        src="https://avatar.iran.liara.run/public"
                        alt="organizer-photo"
                      />
                    </div>
                    <div class="organizer-details">
                      <p><strong>Name</strong></p>
                      <div>
                        <p><strong>Email:</strong></p>
                        <p>organizer@email.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container px-3 py-3 event-details">       
        <div class="p-3">
            <div class="bg-white px-3">
              <h3 class="py-3 border-bottom border-secondary-subttle"><strong>Event Photo Gallery</strong></h3>
              <div class="scroll-wrapper ">
                <div class="event-photo-gallery row d-flex flex-nowrap py-4">
                  <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="gallery-card">
                      <div class="img-container w-100">
                        <img class="img-fluid w-100" src="https://picsum.photos/200/130" alt="event-gallery-image"/>
                      </div>  
                    </div>              
                  </div>  
                  <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="gallery-card">
                      <div class="img-container w-100">
                        <img class="img-fluid w-100" src="https://picsum.photos/200/130" alt="event-gallery-image"/>
                      </div>  
                    </div>              
                  </div>  
                  <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="gallery-card">
                      <div class="img-container w-100">
                        <img class="img-fluid w-100" src="https://picsum.photos/200/130" alt="event-gallery-image"/>
                      </div>  
                    </div>              
                  </div>  
                  <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="gallery-card">
                      <div class="img-container w-100">
                        <img class="img-fluid w-100" src="https://picsum.photos/200/130" alt="event-gallery-image"/>
                      </div>  
                    </div>              
                  </div>  
                  <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="gallery-card">
                      <div class="img-container w-100">
                        <img class="img-fluid w-100" src="https://picsum.photos/200/130" alt="event-gallery-image"/>
                      </div>  
                    </div>              
                  </div>  
                  <div class="col-lg-4 col-sm-6 col-md-4">
                    <div class="gallery-card">
                      <div class="img-container w-100">
                        <img class="img-fluid w-100" src="https://picsum.photos/200/130" alt="event-gallery-image"/>
                      </div>  
                    </div>              
                  </div>               
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    `;
  }
}
