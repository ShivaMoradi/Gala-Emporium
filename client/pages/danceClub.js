//import { eventsHTML } from "./addevents.js";


export async function danceclub () {
  const response = await fetch( '/api/club/Dance Club' );
  const clubData = await response.json();

  const newCSS = document.createElement( 'link' );
  newCSS.rel = 'stylesheet';
  newCSS.href = 'client/pages/dance.css';

  // Get the head element of the document
  const headElement = document.head;

  // Get the existing CSS link you want to replace
  const css = document.querySelector( 'link[href="client/stylesheet/style.css"]' );

  if ( css ) {
    headElement.removeChild( css ); // Remove the existing link
  }

  headElement.appendChild( newCSS ); // Add the new CSS link to the head of the document

  // Render the page
  const eventsHtml = clubData.map( eventData => createEventHTML( eventData ) ).join( '' );


  return ` 
     <header >
      <h1>Min dance club</h1>
</header>

    </div>
      <section>
              <img src="./images/dance.jpg" alt="dance club image">
              <section>
               <p>Dance has always been a part of human culture, rituals and celebrations. Today, most dancing is about recreation and self-expression, although it can also be done as a competitive activity.

              </section>
      <button type="button" onclick= clubData > Show events</button>

      </section>
       <section id="eventDisplayy" class="events">
      <!-- Render events here dynamically using the clubData -->
      ${ eventsHtml }
    </section>
      
</body>
</html > `

}



// Fetch club data dynamically from your backend API
async function fetchclubData () {
  const response = await fetch( "/api/club/Dance Club" );
  const data = await response.json();
  return data;
}

// Function to create HTML for each event
function createEventHTML ( eventData ) {
  // Customize this part based on your event data structure
  return `
    <div class="event">
      <h2>${ eventData.eventName }</h2>
      <p>${ eventData.eventDescription }</p>
      <p>Time: ${ eventData.date }</p>
      <p>Address: ${ eventData.address }</p>
      <p>Price: ${ eventData.price }</p>
      <img src="${ eventData.images }" alt="Event Images">
      <button class="btn book-button-event" data-event-id="${ eventData.idEvent }">Book Now</button>
    </div>
  `;
}




/*const clubPagesInstance = new clubPages();
const clubDetails = await clubPagesInstance.getClubDetails("Dance Club");
const eventsInstance = new getClubEvents();
const eventsHTML = await eventsInstance.getEventsHTML();
 
// Use the fetched clubDetails to populate your HTML*/
