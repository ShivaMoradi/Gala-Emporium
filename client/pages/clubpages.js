import { getEventsForClub, createEventHTML, event } from './addevents.js';

export default async function clubPages(clubName) {
    //Clubdata includes all event information.
    const clubData = await getClubEvents(clubName.toLowerCase());

    

    // Changed mockClubData to instead go through clubData.
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



        // Changed clubdata attribute names to correspond to names fetched from database,.
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


async function getClubEvents(clubName) {
    const response = await fetch("/api/club/" + clubName)
    const data = await response.json()
    return data;
}


