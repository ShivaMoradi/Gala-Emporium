
import init from "./login.js";
export { getEventsForClub, createEventHTML,event, addEvent };

// Function to filter events based on clubName
function getEventsForClub(clubName, clubData) {
    return clubData.filter(event => clubName.toLowerCase() === event.clubName.toLowerCase());
}

// Create HTML structure to display events
function createEventHTML(clubData) {
    return `
    <div class='event'>
      <h3><a href="#" class="event-title-link" data-id="${clubData.id}">${clubData.eventName}</a></h3>
      <p>${clubData.clubName}</p>
      <img src="${clubData.image}" alt="Image of ${clubData.eventName}" class="event-image">
      <p>Date and time: ${clubData.date}</p>
      <p>Description: ${clubData.eventDescription}</p>
      <p>Price: ${clubData.price}</p>
    </div>
  `;
}
init()




// Function to define the structure of the event form
async function event() {
    return `
  <form class= "addEvent" onsubmit="addEvent(); return false">
    <h1>Add new Event!</h1>
    <input type="varchar(200)" name="eventsName" placeholder="events name">
    <input type="varchar(255)" eventDescription="eventsDescription" placeholder="events description">
    <input type="datetime" date="eventsDate" placeholder="events date">
    <input type="varchar(200)" address="eventsAddress" placeholder="events address">
    <input type="int" price="eventsPrice" placeholder="events price">
    <input type="int" clubId="clubId" placeholder="club id">
    <input type="blob" images="eventsImages" placeholder="events images">
    <input id="submit" type="submit" value="Add Event">
    
  </form>
  `
}

// Function to add a new event
async function addEvent () {
    try {
        const eventName = document.querySelector( 'input[name="eventsName"]' ).value;
        const eventDescription = document.querySelector( 'input[name="eventsDescription"]' ).value;
        const date = document.querySelector( 'input[name="eventsDate"]' ).value;
        const address = document.querySelector( 'input[name="eventsAddress"]' ).value;
        const price = document.querySelector( 'input[name="eventsPrice"]' ).value;
        const clubName = document.querySelector( 'input[name="clubId"]' ).value;
        // Assuming clubId is actually clubName
        const clubDescription = "";  // Assuming clubDescription is not present in your form

        const response = await fetch( "/api/club", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                eventName,
                eventDescription,
                date,
                address,
                price,
                clubName,
                clubDescription,
            } ),
            
        } );
    

        if ( !response.ok ) {
            throw new Error( `Error adding event: ${ response.statusText }` );
        }
        
        const result = await response.json();
        console.log( "Result from server:", result );
    

        // Handle success as needed
    } catch (error) {
        console.error('Error adding event:', error);
        // Handle the error appropriately
    }
}

window.addEvent = addEvent

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
    const eventDisplay = document.getElementById("eventDisplay");

    if (!eventDisplay) {
        console.error('Error: Could not find element with id "eventDisplay"');
        return;
    }

    try {
        const response = await fetch("/api/club");
        if (!response.ok) {
            throw new Error(`Error fetching events: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Data from server:", data);

        data.forEach(clubData => {
            const eventHTML = createEventHTML(clubData);
            const eventContainer = document.createElement("div");
            eventContainer.innerHTML = eventHTML;
            eventContainer.classList.add("event");
            eventDisplay.appendChild(eventContainer);
        });
    } catch (error) {
        console.error("Error fetching club data:", error);
    }
});

// Call the event function to render the form
event();
