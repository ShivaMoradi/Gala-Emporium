$(document).ready(function(){

    const mockEventData = [
        { id: 1, name: "Jazz Night", date: "2023-12-10", time: "20:00", club: "Blue Club", description: "A night with smooth jazz.", image: "https://shorturl.at/fkLO1", price: "100 kr" },
        { id: 2, name: "Rock Concert", date: "2023-12-12", time: "18:00", club: "Rock Club", description: "Experience the best of rock.", image: "https://shorturl.at/ajvGV", price: "150 kr" },
    ];

  

    // Filter Events based on club.
    function getEventsForClub(clubName, eventList){
        return eventList.filter(event => event.club === clubName)
    }


      function sortEvents(eventList){ // Sort events based on date.
        return eventList.sort((a,b) => new Date(a.date) - new Date(b.date))
    };


    function displayEvents(eventList){
        // initialize empty string
        let eventsHTML = '';
        // Iterate through eventList, populate 'eventsHTML' with HTML of each event.
        eventList.forEach(event => {
            eventsHTML += createEventHTML(event);
        });
        // Add event to #event-list on index.html. 
        $('#event-list').html(eventsHTML);
    }
        //Create HTML structure to display events.
        //Remove image style when css has been applied to event-image.

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

    //sort events, then display events.
    let sortedEvents = sortEvents(mockEventData);
    displayEvents(sortedEvents);




    // Event handler for listening to click on Event title
    $(document).on('click', '.event-title-link', function(e){
        e.preventDefault();
        let eventID = $(this).data('id')
        const foundEvent = mockEventData.find(event => event.id === eventID)
        if(foundEvent){
            $('#event-details-page').html(displayEventDetails(foundEvent)).show();
            $('#event-list').hide();
        }
    });


    // Event handler for back-button
    $(document).on('click', '#return-button', function(){
        $('#event-details-page').hide();
        $('#event-list').show();
    });


    function displayEventDetails(event){
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
    `;
    }

});