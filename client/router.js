import login from "./pages/login.js";
$('#login').html(await login());
import {createEventHTML, event } from "./pages/addevents.js";
import { bookEvent } from "./pages/booking.js";
import clubPages from "./pages/clubpages.js";
import midnightOasis from "./pages/midnightOasis.js";
import clubHtml from "./pages/club.js";
import loveHtml from "./pages/love.js";
import clubHtmlAdmin from "./pages/admin.js";
import htmlAdminClub from "./pages/adminClub.js";
import htmlAdminEvent from "./pages/adminEvent.js";
import wildClubHtml from "./pages/wild.js";
import danceClubHtml from "./pages/dance.js"



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
    case "#midnightOasis":
      content = await midnightOasis();
      break;
    case "#bookClub":
      content = await clubPages("book club");
      break;
    case "#danceclub":
      content = await danceClubHtml()
      break;
    case "#loveClub":
      content = await loveHtml()
      break;
     case "#eventAdmin":
      content = await  htmlAdminEvent()
      break;
    case "#clubAdmin":
      content = await htmlAdminClub()
      break;
    case "":
      content = await bookEvent();
      break;
    case "#wild":
      content = await wildClubHtml()
      break;
    case "addevent":
      content = await event("Add new Event");
      break;
    case "#club":
    content = await clubHtmlAdmin();
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

