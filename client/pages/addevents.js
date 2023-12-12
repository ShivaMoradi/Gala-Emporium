export { getEventsForClub, createEventHTML, event, addEvent, eventsByClub, getClubEvents };

async function getEventsForClub(clubName, clubData) {
    return clubData.filter(event => clubName.toLowerCase() === event.clubName.toLowerCase());
}

async function createSingleEventHTML(event) {
    const dateNew = new Date(event.date);
    const date = dateNew.getUTCDate();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthLetter = month[dateNew.getUTCMonth()];

    return `
        <ul>
            <li>
                <div class="time">
                    <h2>${date}<br><span>${monthLetter}</span></h2>
                </div>
                <div class="details">
                    <h3>${event.eventName}</h3>
                    <p>${event.eventDescrip} .</p>
                    <a href="#">View Details</a>
                </div>
                <div style="clear: both;"></div>
            </li>
        </ul>`;
}

async function createClubHTML(club) {
    const eventsHTML = await Promise.all(club.eventos.map(createSingleEventHTML));

    return `
        <div class="club">
            <h1>${club.clubName}</h1>
            <p>${club.clubDescrip}</p>
            <div class="events">${eventsHTML.join('')}</div>
        </div>`;
}

//Create HTML structure to display events.
//TODO Remove image style when css has been applied to event-image.
//TODO Create link to event webpage.
// Fetch club data from the baackend
async function createEventHTML(clubData) {
    const b = await eventsByClub();
    let club = "";
    let event = "";
    for (const clave in b) {
        club += ` <h1>${b[clave].clubName}</h1>
            <p>${b[clave].clubDescrip}</p>`
        if (b.hasOwnProperty(clave)) {
            const objetoInterior = b[clave];
            if (objetoInterior.hasOwnProperty("eventos")) {
                const arregloInterior = objetoInterior.eventos;
                // Crear las listas desordenadas con elementos li
                for (const valor of arregloInterior) {
                    const datebd = `${b[clave].date}`;
                    const dateNew = new Date(datebd)
                    const date = dateNew.getUTCDate();
                    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    const monthLetter = month[dateNew.getUTCMonth()];
                    event = `<ul>
              <li>
                <div class="time">
                  <h2>${date}<br><span>${monthLetter}</span></h2>
                </div>
                <div class="details">
                  <h3>${b[clave].eventName}</h3>
                  <p>${b[clave].eventDescrip} .</p>
                  <a href="#">View Details</a>
                </div>
                <div style="clear: both;"></div>
              </li>
            </ul>`
                    club += event;
                }

            }
        }

    }
    return `
<section>
      
      </div>
        <div class="events">
        <div class="leftBox">
          <div class="content">
           
            ${club}
        
            
           

          </div>


        </div>
    </section>
    
                    `;;

}

// Fetch club data from the backend
fetch('/api/club')
    .then(response => response.json())
    .then(data => {
        const eventDisplay = document.getElementById('eventDisplay');

        data.forEach(clubData => {
            const eventHTML = createEventHTML(clubData);
            const eventContainer = document.createElement('div');
            eventContainer.innerHTML = eventHTML;
            eventContainer.classList.add('event');

            eventDisplay.appendChild(eventContainer);
        });
    })
    .catch(error => {
        console.error('Error fetching club data:', error);
    });


function event() {
    return `
        <form id="addEventForm" class="addEvent"
            <h1>Add new Event!</h1>
            <input type="text" name="eventsName" placeholder="Event name">
            <input type="text" name="eventsDescription" placeholder="Event description">
            <input type="datetime-local" name="eventsDate" placeholder="Event date">
            <input type="text" name="eventsAddress" placeholder="Event address">
            <input type="number" name="eventsPrice" placeholder="Event price">
            <input type="text" name="clubId" placeholder="Club ID">
            <input type="text" name="eventsImages" placeholder="Event images">
            <button id="submit" type="button" onclick="addEvent()">Add Event</button>
        </form>`;
}

async function addEvent() {
    try {
        const eventName = document.querySelector("[name=eventsName]").value;
        const eventDescription = document.querySelector("[name=eventsDescription]").value;
        const eventDate = document.querySelector("[name=eventsDate]").value;
        const eventAddress = document.querySelector("[name=eventsAddress]").value;
        const eventPrice = document.querySelector("[name=eventsPrice]").value;
        const clubId = document.querySelector("[name=clubId]").value;
        const eventImages = document.querySelector("[name=eventsImages]").value;

        // Basic validation
        if (!eventName || eventName.trim().length === 0 || !eventDate) {
            alert('Event name and date are required.');
            return;
        }

        const eventData = {
            eventName,
            eventDescription,
            eventDate,
            eventAddress,
            eventPrice,
            clubId,
            eventImages
        };

        const response = await fetch("/api/club", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        const result = await response.json();

        if (result.eventAdded) {
            alert(`${eventName} added`);
            // Clear form fields after successful addition
            document.querySelector("[name=eventsName]").value = "";
            document.querySelector("[name=eventsDescription]").value = "";
            document.querySelector("[name=eventsDate]").value = "";
            document.querySelector("[name=eventsAddress]").value = "";
            document.querySelector("[name=eventsPrice]").value = "";
            document.querySelector("[name=clubId]").value = "";
            document.querySelector("[name=eventsImages]").value = "";
        } else {
            alert(`Failed to add ${eventName}. Please try again.`);
        }
    } catch (error) {
        console.error('Error adding event:', error);
        // Handle error appropriately
    }
}
window.addEvent = addEvent;

async function eventsByClub() {
    const clubData = await getClubEvents();
    const eventosPorClub = {};
    for (const evento of clubData) {
        if (!eventosPorClub[evento.clubName]) {
            eventosPorClub[evento.clubName] = {
                clubName: evento.clubName,
                eventos: [],
                clubDescrip: evento.clubDescription,
                date: evento.date,
                eventName: evento.eventName,
                eventDescrip: evento.eventDescription
            };
        }
        eventosPorClub[evento.clubName].eventos.push({
            eventName: evento.eventName,
            // Puedes incluir más propiedades del evento si es necesario
        });
    }
    return eventosPorClub
}





async function getClubEvents() {
    const response = await fetch("/api/club")
    const data = await response.json()
    return data;
}