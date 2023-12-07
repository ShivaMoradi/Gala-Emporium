export {getEventsForClub, createEventHTML, createEventHTMLDetails};


// Filter Events based on 
    function getEventsForClub(clubName, clubData){
        return clubData.filter(event =>  clubName.toLowerCase() ===  event.clubName.toLowerCase())
    }




//Create HTML structure to display events.
//TODO Remove image style when css has been applied to event-image.
//TODO Create link to event webpage.
    function createEventHTML(clubData){
        return `
            <div class='event'>
                <h3> <a href="#" class="event-title-link" data-id="${clubData.id}">${clubData.eventName}</a></h3> 
                <p>${clubData.clubName}</p>
                <img src="${clubData.image}" alt="Image of ${clubData.eventName}" class="event-image" style="max-width:300px;height:auto;">  
                <p>Date: ${clubData.date}</p>
                <p>Time: ${clubData.time}</p>
                <p>Description: ${clubData.eventDescription}</p>
                <p>Price: ${clubData.price}</p>
            </div>    
        `
    };


// Create HTML Structure in different div to style differently. (full-page event view?)
    function createEventHTMLDetails(clubData){
        return `
            <div class="event-details">
                <h2>${clubData.eventName}</h2>
                <img src="${clubData.image}" alt="${clubData.eventName}" style="max-width: 300px; height: auto;">
                <p>Date: ${clubData.date}</p>
                <p>Time: ${clubData.time}</p>
                <p>${clubData.eventDescription}</p>
                <p>Price: ${clubData.price}</p>
                <button id="return-button">Back</button>
            </div>
        `
    };




// Sort events based on date.
    // function sortEvents(eventList){ 
    //     return eventList.sort((a,b) => new Date(a.date) - new Date(b.date))
    // };





// // Event handlers:
// $(document).ready(function(){
// // Event handler for listening to click on Event title
//     $(document).on('click', '.event-title-link', function(e){
//         e.preventDefault();
//         let eventID = $(this).data('id')
//         const foundEvent = mockEventData.find(event => event.id === eventID)
//         if(foundEvent){
//             $('#event-details-page').html(createEventHTMLDetails(foundEvent)).show();
//             $('#event-list').hide();
//         }
//     });


// // Event handler for back-button
//     $(document).on('click', '#return-button', function(){
//         $('#event-details-page').hide();
//         $('#event-list').show();
//     });




// });