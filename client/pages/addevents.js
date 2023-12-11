
export { getEventsForClub, createEventHTML, event, addEvent };

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
      <p>Date: ${clubData.date}</p>
      <p>Description: ${clubData.eventDescription}</p>
      <p>Price: ${clubData.price}</p>
    </div>
  `;
}

// Function to define the structure of the event form
function event() {
    return `
  <form class= "addEvent" onsubmit="addEvent(); return false">
    <h1>Add new Event!</h1>
    <input type="varchar(200)" name="eventsName" placeholder="events name">
        <input type="varchar(255)" eventDescription="eventsDescription" placeholder="events description">
    <input type="datetime" data="eventsDate" placeholder="events date">
    <input type="varchar(200)" address="eventsAddress" placeholder="events address">
    <input type="int" price="eventsPrice" placeholder="events price">
    <input type="int" clubId="clubId" placeholder="club id">
    <input type="blob" name="eventsImages" placeholder="events images">
    <input id="submit" type="submit" value="Add Event">
    

  </form>
  `
}
// Function to add a new event
async function addEvent() {
    // Your implementation for adding an event
}

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
