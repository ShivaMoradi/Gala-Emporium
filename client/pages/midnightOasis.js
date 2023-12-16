export default async function midnightOasis(){
    const clubInfo = await fetchClubInfo();
    const eventInfo = await fetchEventInfo();
    
    if(!clubInfo || clubInfo.length === 0){
        return `<p> There was an error returning club data for Midnight Oasis </p> `
    }


    const clubDetails = clubInfo[0]
    console.log(clubInfo);
    console.log(clubDetails);
    console.log(eventInfo);




    // Generate the events HTML if there are any events
    let eventsHtml = '<p>No upcoming events.</p>';

    // Construct the HTML for the club details and events
    return `
        <div id="midnightOasisBody"> 
            <header>
                <div id="titleBackdrop">
                    <h1>${clubDetails.name}</h1>
                </div>
            </header>
            
            <main>
                <section>
                    <h2>About</h2>
                    <p>${clubDetails.description}</p>
                </section>
                
                <section>
                    <h2>Events</h2>
                    ${eventsHtml}
                </section>
            </main>
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