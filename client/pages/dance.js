export default async function danceClubHtml () {
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
<head>
    </head>
    <body>
      <header class="my_header" >
        <h1>Welcome to your Dance Club!</h1>
                      <img src="./images/festival-danceClub.jpg"  alt="dance club" >

        <!-- Navigation remains the same -->
       </header>

    <section id="pageTitle">

              <div class="myinner-content">

          <h2>Do you want to be active, happy and looks fit,you are in the right place, welcome! </h2>
              <strong>Dance has always been a part of human culture, rituals and celebrations. <br>Today, most dancing is about recreation and self-expression, although it can also be done as a competitive activity.</strong>
</div>
              <section >
                <button type="button" onclick= clubData > Show events</button>
                <div class= "video">
                </div>
                                  <h2>You might like a video from Dance Club!</h2>

                                  <iframe width="560" height="315"src="https://www.youtube.com/embed/watch?v=ZSoPGMmdVpo" frameborder="0" allowfullscreen></iframe>

              </section>

    </section >
        
</div>

    </section>

    <section id="Dance_eventDisplay" class="Dance_events">
      <!-- Render events here dynamically using the clubData -->
      ${ eventsHtml }
    </section>
  `;
}

// Fetch club data dynamically from your backend API
/*async function fetchClubData () {
  const response = await fetch( "/api/club/Dance Club" );
  const data = await response.json();
  return data;
}*/

// Function to create HTML for each event
function createEventHTML ( eventData ) {
  // Customize this part based on your event data structure
  return `
    <div class="event">
      <h2>${ eventData.eventName }</h2>
      <p>${ eventData.eventDescription }</p>
      <p>Time: ${ eventData.date }</p>
      <p>Address: ${ eventData.address }</p>
      <p>Price: ${ eventData.price } Kr</p>
      <img src="${ eventData.images }" alt="Event Images">
      <button class="btn book-button" data-event-id="${ eventData.idEvent }">Book Now</button>
    </div>
  `;
}
