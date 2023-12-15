import init from "./login.js";
import { bookEvent } from "./booking.js";
export { getEventsForClub, createEventHTML, event, addEvent };

// Filter Events based on 
    function getEventsForClub(clubName, clubData){
        return clubData.filter(event =>  clubName.toLowerCase() ===  event.clubName.toLowerCase())
    }




// Create HTML structure to display events
function createEventHTML(clubData) {
    const formattedDate = new Date(clubData.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    // Add a class based on clubName for styling differentiation
    const eventColumnStyle = clubData.clubName.toLowerCase().replace(/\s+/g, '-');

    return `
    <div class='event ${eventColumnStyle}'>
      <h3><a href="#" class="event-title-link" data-id="${clubData.id}">${clubData.eventName}</a></h3>
      <p>${clubData.clubName}</p>
      <img src="${clubData.images}" class="event-image" width="300" height="200">
      <p>Date and time: ${formattedDate}</p>
      <p>Description: ${clubData.eventDescription}</p>
      <p>Price: ${clubData.price}</p>
      <button class="book-button" data-event-id="${clubData.id}">Book Now</button>
    </div>
  `;
}
init()




// Function to define the structure of the event form
async function event() {
    return `
    <form class="addEvent" onsubmit="addEvent(); return false">
      <h1>Add new Event!</h1>
      <input type="text" name="eventsName" placeholder="events name">
      <input type="text" name="eventsDescription" placeholder="events description">
      <input type="datetime-local" name="eventsDate" placeholder="events date">
      <input type="text" name="eventsAddress" placeholder="events address">
      <input type="number" name="eventsPrice" placeholder="events price">
      <input type="text" name="clubId" placeholder="club id">
      <input type="file" name="eventsImages" placeholder="events images">
      <input id="submit" type="submit" value="Add Event">
    </form>
  `;
}

// Function to add a new event
async function addEvent() {
      
        const eventName = document.querySelector('input[name="eventsName"]').value;
        const eventDescription = document.querySelector('input[name="eventsDescription"]').value;
        const date = document.querySelector('input[name="eventsDate"]').value;
        const address = document.querySelector('input[name="eventsAddress"]').value;
        const price = document.querySelector('input[name="eventsPrice"]').value;
        const clubId = document.querySelector('input[name="clubId"]').value;
        // Assuming clubId is actually clubName
        const clubDescription = "";  // Assuming clubDescription is not present in your form
        if(eventName.trim().length > 0 && eventDescription.trim().length > 0 && date.trim().length > 0 && address.trim().length > 0 && price.trim().length > 0 && clubId.trim().length > 0 ){
        const response = await fetch("/api/club", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventName,
                eventDescription,
                date,
                address,
                price,
                clubId,
                clubDescription,
               
            }),
        });
          const result = await response.json()
          console.log(result)
             if (result.insertEvent) {
      alert(`${eventName.trim()} was added`)
      $("[name=bookName]").val("")
    }
  } else {
    alert("Du måste skriva något!")
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

document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("book-button")) {
        const eventsId = event.target.dataset.eventId;
        await bookEvent(eventsId);
    }
});