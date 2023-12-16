
export {clubPages, createEventHTML, getClubData, getEventsForClub}

export default async function clubPages(clubName) {
    //Clubdata includes Club details: (clubID, clubName, clubDescription). Event details: (eventName, eventDescription, date, address, price, images)
    const clubData = await getClubData(clubName.toLowerCase());
    
    //Find club based on the function parameter. If club is not found return club not found.
    const clubDetails = clubData.find(club => club.clubName.toLowerCase() === clubName.toLowerCase());

    if (!clubDetails) {
        return `
            <div> 
                <p>Club not found</p>
            </div>
        `
    }

    // Filter events based on Club name and mockData. 
    const clubEvents = getEventsForClub(clubName, clubData);

    //Generate HTML for each Event. 
    const eventsHTML = clubEvents.map(createEventHTML).join('');



    // Return basic club HTML structure.
    return `
        <div id = "clubPage">
            <header>
                <h1>${clubDetails.clubName}</h1>
            </header>
 
            <section id="clubBody">
                <div id="mediaContainer"> 
                <p> Video and images goes here</p>       
                <!---VIDEO AND IMAGES GO HERE-->
                </div>

                <article id="clubDescription">
                <p>${clubDetails.clubDescription}</p>
                <!-- CLUB DESRIPTION GOES HERE  -->
                </article>


                <section id="event-list">
                    ${eventsHTML}
                </section>
            
            </section>
        </div >

        `;
}


// Filter Events based on  clubName.
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
const clubStyleClass = clubData.clubName.toLowerCase().replace(/\s+/g, '-');

return `
<div class='event ${clubStyleClass}'>
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



async function getClubData(clubName) {
    const response = await fetch("/api/club/" + clubName)
    const data = await response.json()
    return data;
}