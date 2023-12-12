export {getEventsForClub, createEventHTML,event};


// Filter Events based on 
    function getEventsForClub(clubName, clubData){
        return clubData.filter(event =>  clubName.toLowerCase() ===  event.clubName.toLowerCase())
    }




//Create HTML structure to display events.
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
                      event =`<ul>
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
    return       `
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
        fetch( '/api/club' )
            .then( response => response.json() )
            .then( data => {
                const eventDisplay = document.getElementById( 'eventDisplay' );

                data.forEach( clubData => {
                    const eventHTML = createEventHTML( clubData );
                    const eventContainer = document.createElement( 'div' );
                    eventContainer.innerHTML = eventHTML;
                    eventContainer.classList.add( 'event' );
                
                    eventDisplay.appendChild( eventContainer );
                } );
            } )
            .catch( error => {
                console.error( 'Error fetching club data:', error );
            } );

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

async function addEvent () {
    const eventName = $( "[name=eventName]" ).val()
    console.log( eventName )

    if ( eventName.trim().length > 0 ) {
        const response = await fetch( "api/club", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { name: eventName } )
        } )
        const result = await response.json()

        if ( result.eventAdded ) {
            alert( `${ eventName.trim() } added` )
            $( "[name=eventName]" ).val( "" )
        }
    } else {
        alert( "Please write your event name!" )
    }
}
event();

window.addBook = addEvent


// Create HTML Structure in different div to style differently. (full-page event view?)
    // function createEventHTMLDetails(clubData){
    //     return `
    //         <div class="event-details">
    //             <h2>${clubData.eventName}</h2>
    //             <img src="${clubData.image}" alt="${clubData.eventName}" style="max-width: 300px; height: auto;">
    //             <p>Date: ${clubData.date}</p>
    //             <p>Time: ${clubData.time}</p>
    //             <p>${clubData.eventDescription}</p>
    //             <p>Price: ${clubData.price}</p>
    //             <button id="return-button">Back</button>
    //         </div>
    //     `
    // };




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
      eventDescrip:evento.eventDescription
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
