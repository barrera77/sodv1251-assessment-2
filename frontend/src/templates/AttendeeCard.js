const attendeeCard = (attendee) => `
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
            <button class="btn btn-primary btn-contact">Contact</button>
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
           <div class="bg-white">
            <div class="table-wrapper pb-4">

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
                <tbody></tbody>
            </table>

            
            </div>

           </div>        
        </div>                
    </div>              
    </div>
`;

export default attendeeCard;
