import { getClubEvents} from "./clubpages.js";
//import { eventsHTML } from "./addevents.js";


const clubData = await getClubEvents( clubName.toLowerCase() )
const clubDetails = clubData.find( club => club.clubName.toLowerCase() === clubName.toLowerCase() )

export async function danceclub () {
  const response = await fetch( "api/club" )
  const result = await response.json()
  if ( clubName == "Dance Club" ) {

    return ` 
    <head>
  <title>My Dance Club page</title>
</head>
<body>
<div>
   <nav>
        <ul id="menu-links-list">
          <li><a href="">Back to Home</a></li>
                <li>
                  <div class="dropdown-container">
                       <div class="dropdown-trigger">Clubs</div>
                       <div class="dropdown-menu">
                            <ul>
                                <li><a href="#rockClub">Rock Club</a></li>
                                <li><a href="#blueClub">Blue Club</a></li>
                                <li><a href="#bookClub">Book Club</a></li>
                                <li> <a href="#danceClub">Dance club </a></li>
                                <li> <a href="#loveClub">Loving club</a> </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
            </ul>
        </nav>
    </div>
      <section>
              <img src="./images/dance.jpg" alt="dance club image">
              <section>
               <p>Dance has always been a part of human culture, rituals and celebrations. Today, most dancing is about recreation and self-expression, although it can also be done as a competitive activity.

              </section>
      <button type="button" onclick= clubData > Show events</button>

      </section>
      
</body>
</html > `

  }

}

  




window.onload=danceclub
  /*const clubPagesInstance = new clubPages();
  const clubDetails = await clubPagesInstance.getClubDetails("Dance Club");
  const eventsInstance = new getClubEvents();
  const eventsHTML = await eventsInstance.getEventsHTML();
 
  // Use the fetched clubDetails to populate your HTML*/
