export default async function midnightOasis(){
    const clubInfo = await fetchClubInfo();
    const eventInfo = await fetchEventInfo();
    
    if(!clubInfo || clubInfo.length === 0){
        return `<p> There was an error fetching club data for Midnight Oasis </p> `
    }
    const clubDetails = clubInfo[0]


    // Check if eventInfo contains events, return HTML div for each event.
    let eventsHtml = eventInfo && eventInfo.length > 0 ? eventInfo.map(createEventHTML).join('') : eventsHtml = '<p>No upcoming events.</p>';


     
  


    console.log(eventsHtml)

    // Construct the HTML for the club details and events
    return `
        <div id="midnightOasisBody"> 
            <header>
                <div id="titleBackdrop">
                    <h1>${clubDetails.name}</h1>
                </div>
            </header>
            
            <main id="midnightOasisMain">
                <section id="aboutSection">
                    <p>${clubDetails.description}</p>
                </section>

                <section id="mediaBox"></section>
                
                <section id="eventBoxContainer">
                    <h2>Events</h2>
                    ${eventsHtml}
                </section>
            </main>
        </div>
    `;

}


function createEventHTML(eventData) {
    const formattedDate = new Date(eventData.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });

    return `
    <div class='eventBox'>
      <h3>${eventData.eventName}</h3>
      <img src="${eventData.images}" class="eventImage">
      <p>${formattedDate}</p>
      <p>${eventData.eventDescription}</p>
      <p>Price: ${eventData.price}</p>
      <button class="midnightBook-button" data-event-id="${eventData.id}">Book Now</button>
    </div>
  `;
}






async function fetchClubInfo(){
    const response = await fetch("/api/club/details/Midnight Oasis");
    const clubData = await response.json();
    return clubData;
}


async function fetchEventInfo(){
    const response = await fetch("/api/club/Midnight Oasis");
    const clubData = await response.json();
    return clubData;
}