import clubPages from "./clubpages.js";
//import { eventsHTML } from "./addevents.js";

export default async function danceclub () {
  
  const dance = await new clubPages(clubName)
  return   `
    
   <div class="danceClub">
      <h2>${ clubData.clubName }</h2>
      <img src="./client/images/dance.jpg" alt="dance club image" class="danceClub-image" width="300" height="200">
      <h3></h3>
      <p>Dance has always been a part of human culture, rituals and celebrations. Today, most dancing is about recreation and self-expression, although it can also be done as a competitive activity.

      </p>
      <button class="related-events"> ${eventsHTML} Show events</button>
    </div>
      
      `

}
dance()

  /*< section id = "home-events-search" class="dark center" > <div class="bg-overlay"> <div class="container"> <div class="content-text"> <h1>Find the best events to dance</h1> <p>Find festivals, congresses, trips, parties, workshops and intensive dance workshops that you like the most (salsa, bachata, kizomba, tango, swing, hip hop...). Live the dance to the fullest, share your experience and enjoy life dancing</p> </div> <form method="get" id="search-event-form" action="/en/events/search"> <div class="landing-form-h f1"> <div class="form-group"> <input name="name" id="event-name-search" class="form-control input-lg" placeholder="Event name..."> </div> <button type="submit" class="btn btn-lg btn-primary" id="btn-search">
                        Buscar
                    </button> </div> </form> </div> </div> <script type="text/javascript">
        $(document).ready(function(){
            $('#search-event-form').on('submit', function(e) {
                var event = $('#event-name-search').val();
                if (event.trim() == ""){
                    e.preventDefault();
                    $('#event-name-search')
                        .addClass('shake animated')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass('animated shake');
                        });
                }
                else{
                    $('#event-name-search').val($('#event-name-search').val().trim());
                    $('#loading-layer').addClass("in");
                }
            });
        })
    </script> </section >*/