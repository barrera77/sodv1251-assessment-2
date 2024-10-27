export default EventCard = (event) => `
<div class="event-card row w-75 m-auto py-3 my-3">
    <div class="col-4">
        <div class="event-image px-2">
            <img src="${event.img_url}" alt="event-image"></img>
        </div>
    </div>
    <div class="col-8">
        <div class="event-content">
            <h4 class="pb-3 fw-bold">${event.name}</h4>
            <p>${event.description}</p>
            <div class="pt-3 d-flex justify-content-between align-items-center">
                <div class="fs-5">
                    <i class="bi bi-calendar-date"></i>
                    <span> ${event.startDate}</span>
                </div>
                <div>
                    <a href="" class="category-box">${event.Category}</a>
                </div>  
                <div>
                    <a href="/event-details" class="btn btn-primary" data-link>Details <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>   
</div>
`;
