import { getEventsForClub, createEventHTML, createEventHTMLDetails, mockEventData, mockClubData} from './addevents.js';

export default async function clubpages(clubName) {
    const clubData = await getClubEvents(clubName);
    console.log("All events - ", clubData);
    
    // Changed mockClubData to instead go through clubData.
    const clubDetails = clubData.find(club => club.club_name.toLowerCase() === clubName.toLowerCase());

    console.log(clubDetails);


    if (!clubDetails) {
        return `
            <div> 
                <p>Club not found</p>
                <h1>${clubData[0].event_name}</h1>
            </div>
        `
    }

    // Filter events based on Club name and mockData. 
    const clubEvents = getEventsForClub(clubName, mockEventData);

    //Generate HTML for each Event. 
    const eventsHTML = clubEvents.map(createEventHTML).join('');



        // Changed clubdata attribute names to correspond to names fetched from database,.
    return `
        <div id = "clubPage">
            <header>
                <h1>${clubDetails.club_name}</h1>
            </header>

            <section id="clubBody">

                <div id="mediaContainer"> 
                <p> Video and images goes here</p>       
                <!---VIDEO AND IMAGES GO HERE-->
                </div>

                <article id="clubDescription">
                <p>${clubDetails.club_description}</p>
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

