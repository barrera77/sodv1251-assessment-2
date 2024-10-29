const eventPhotoGallery = (event) => `
<div class="p-3">
            <div class="bg-white px-3">
              <h3 class="py-3 border-bottom border-secondary-subttle"><strong>${
                event.name
              } - Photo Gallery</strong></h3>
              <div class="scroll-wrapper ">
                <div class="event-photo-gallery row d-flex flex-nowrap py-4">
                  ${event.imageGallery.map(
                    (image) => `
                    <div class="col-lg-4 col-sm-6 col-md-4">
                        <div class="gallery-card">
                            <div class="img-container w-100">
                                <img class="img-fluid w-100" src="${image}" alt="event-gallery-image"/>
                            </div>  
                        </div>              
                    </div>  
                    `
                  )}
                </div>
              </div>
            </div>
        </div>
`;

export default eventPhotoGallery;
