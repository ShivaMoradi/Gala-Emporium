export {getEventsForClub, createEventHTML, createEventHTMLDetails, mockEventData, mockClubData};

// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
    const mockEventData = [
        { id: 1, name: "Jazz Night", date: "2023-12-10", time: "20:00", club: "Blue Club", description: "A night with smooth jazz.", image: "https://shorturl.at/fkLO1", price: "100 kr" },
        { id: 2, name: "Rock Concert", date: "2023-12-12", time: "18:00", club: "Rock Club", description: "Experience the best of rock.", image: "https://shorturl.at/ajvGV", price: "150 kr" },
    ];


    const mockClubData = [
        {
            name: "Blue Club",
            description: "Blue Club is known for its vibrant jazz nights and soulful music sessions.",
            image: "https://example.com/images/blue-club.jpg", // Placeholder image URL
        },
        {
            name: "Rock Club",
            description: "Rock Club offers an electrifying atmosphere with rock and roll classics and modern hits.",
            image: "https://example.com/images/rock-club.jpg", // Placeholder image URL
        },
        // Add more clubs as needed
    ];
    
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //




// Filter Events based on club.
    function getEventsForClub(clubName, eventList){
        return eventList.filter(event => event.club === clubName)
    }




//Create HTML structure to display events.
//TODO Remove image style when css has been applied to event-image.
//TODO Create link to event webpage.
    function createEventHTML(event){
        return `
            <div class='event'>
                <h3> <a href="#" class="event-title-link" data-id="${event.id}">${event.name}</a></h3> 
                <p>${event.club}</p>
                <img src="${event.image}" alt="Image of ${event.name}" class="event-image" style="max-width:300px;height:auto;">  
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <p>Description: ${event.description}</p>
                <p>Price: ${event.price}</p>
            </div>    
        `
    };


// Create HTML Structure in different div to style differently. (full-page event view?)
    function createEventHTMLDetails(event){
        return `
            <div class="event-details">
                <h2>${event.name}</h2>
                <img src="${event.image}" alt="${event.name}" style="max-width: 300px; height: auto;">
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <p>${event.description}</p>
                <p>Price: ${event.price}</p>
                <button id="return-button">Back</button>
            </div>
        `
    };




// Sort events based on date.
    function sortEvents(eventList){ 
        return eventList.sort((a,b) => new Date(a.date) - new Date(b.date))
    };





// Event handlers:
$(document).ready(function(){
// Event handler for listening to click on Event title
    $(document).on('click', '.event-title-link', function(e){
        e.preventDefault();
        let eventID = $(this).data('id')
        const foundEvent = mockEventData.find(event => event.id === eventID)
        if(foundEvent){
            $('#event-details-page').html(createEventHTMLDetails(foundEvent)).show();
            $('#event-list').hide();
        }
    });


// Event handler for back-button
    $(document).on('click', '#return-button', function(){
        $('#event-details-page').hide();
        $('#event-list').show();
    });




});