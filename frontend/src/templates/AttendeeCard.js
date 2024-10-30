const attendeeCard = (attendee, events) => `
<div class="row w-100 m-auto">
    <div class="col-4 p-3 attendee-details-col-one">
        <div class="p-3 attendee-details-warap bg-white">

        <div class="py-3">
            <img src="${attendee.avatar}" alt="attendee-photo"></img>
        </div>
        <div>
            <h5 class="text-center fw-bold">${attendee.name}</h5>
            <p class="text-center">${attendee.city}</p>
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
                            <p>${attendee.name}</p >
                        </div>
                        </div>
                    </li>
                    <li class="border-bottom list-group-item">
                        <div class="row w-100"> 
                        <div class="col-4">
                            <p><strong>Email:</strong></p>
                        </div>
                        <div class="col-8">
                            <p>${attendee.email}</p >
                        </div>
                        </div>
                    </li>
                    <li class="border-bottom list-group-item">
                        <div class="row w-100"> 
                        <div class="col-4">
                            <p><strong>Phone:</strong></p>
                        </div>
                        <div class="col-8">
                            <p>${attendee.phone}</p >
                        </div>
                        </div>
                    </li>
                    <li class="border-bottom list-group-item">
                        <div class="row w-100"> 
                        <div class="col-4">
                            <p><strong>Address:</strong></p>
                        </div>
                        <div class="col-8">
                            <p>${attendee.address}, ${attendee.city}</p >
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
                    ${events
                      .map(
                        (event) => `
                    <tr>
                        <td class="ps-3">${event.name}</td>
                        <td>Date</td>
                        <td>${event.location}</td>
                    </tr>                        
                        `
                      )
                      .join("")}
                </tbody>
            </table>

            
            </div>

           </div>                       
    </div>              
    </div>
`;

export default attendeeCard;
