import login from "./pages/login.js";
$('#login').html(await login());
import { createEventHTML } from "./pages/addevents.js";
import { bookEvent } from "./pages/booking.js";
import clubPages from "./pages/clubpages.js";
import clubHtml from "./pages/club.js";



async function router() {
  let content;
  // Populate "content" with whatever
  switch (window.location.hash) {
    case "":
      content = await getAllEvents();
      break;
    case "#rockClub":
      content = await clubPages("rock club");
      break;
    case "#blueClub":
      content = await clubPages("blue club");
      break;
    case "#bookClub":
      content = await clubPages("book");
      break;
    case "#jumpingClub":
      content = await clubPages("jumping club");
      break;
    case "#loveClub":
      content = await clubPages("jumping club");
      break;
    case "addevent":
      content = "<h1>Placeholder for addevent page</h1>"
      break;
    case "#club":
    content = await clubHtml();
    break;
    case "#admin":
    content = await init();
  
    default:
      content = "<h1><bold>Page not found!</bold></h1>"
      break;
  }

  // Populate <main> with whatever content.
  $('main').html(content);

}

async function getAllEvents() {
  try {
    const data = await fetch('/api/club');
    if (!data.ok) {
      throw new Error(`Failed to fetch events. Status: ${data.status}`);
    }

    const eventData = await data.json();
    const eventsHTML = eventData.map(createEventHTML).join('');
    return `<div class="grid-container">${eventsHTML}</div>`;
  } catch (error) {
    console.error('Error fetching events:', error);
    return '<p>Error fetching events. Please try again later.</p>';
  }
}


window.onload = router
window.onhashchange = router

