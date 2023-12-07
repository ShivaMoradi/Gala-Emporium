import { getEventsForClub, createEventHTML, createEventHTMLDetails, mockEventData, mockClubData } from './addevents.js';


export default async function bookClub(clubName) {
  //const clubData = await getclubs();



  //using club mock Data untill data has been fetched. Cannot access database data at the time of writing.  
  const clubDetails = mockClubData.find(club => club.name === clubName);

  console.log(clubDetails);


  if (!clubDetails) {
    return `
            <div> 
                <p>Club not found</p>
            </div>
        `
  }

  // Filter events based on Club name and mockData. 
  const clubEvents = getEventsForClub(clubName, mockEventData);

  //Generate HTML for each Event. 
  const eventsHTML = clubEvents.map(createEventHTML).join('');

  return `
        <div id = "clubPage">
            <header>
                <h1>${clubDetails.name}</h1>
            </header>

            <section id="clubBody">

                <div id="mediaContainer"> 
                <p> Video and images goes here</p>       
                <!---VIDEO AND IMAGES GO HERE-->
                </div>

                <article id="clubDescription">
                <p>${clubDetails.description}</p>
                <!-- CLUB DESRIPTION GOES HERE  -->
                </article>

                <section id="event-list">
                    ${eventsHTML}
                </section>
            
            </section>
        </div >

        `;
}


// async function getclubs() {
//   const response = await fetch("/api/club")
//   const data = await response.json()
//   return data;
// }


