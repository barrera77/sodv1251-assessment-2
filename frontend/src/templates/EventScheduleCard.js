const eventScheduleCard = (schedule, event) => {
  const date = new Date(schedule.startDate);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  });

  return ` 
  
     
          <div class="w-100 mt-3">
            <div class="card event-schedule-card">
              <div class="card-image-container">
                <img src="${event.img_url} alt="product image" class="img-fluid" />
                <a href="" class="category-box">${event.category}</a>
              </div>
              <div class="card-description pb-2">
                <div class="text-center pt-2 description-container">
                  <p><strong>${event.name}</strong></p>
                </div>
                <div class="row px-3 m-auto">
                  <div class="col-6 py-2 text-center">
                    <i class="bi bi-calendar-date"></i>
                    <span>${formattedDate}</span>
                  </div>
                  <div class="col-6 text-center">
                    <a
                      href="/event-details?id=${event._id}"
                      data-link
                      class="btn btn-primary"
                      >Details <i class="bi bi-arrow-right-circle-fill"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
`;
};

export default eventScheduleCard;
