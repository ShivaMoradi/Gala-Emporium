import login from "./pages/login.js";
$('#login').html(login());

import { createEventHTML, event } from "./pages/addevents.js";
import clubPages from "./pages/clubpages.js";


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
      content = await clubPages("book club");
      break;
    case "#addevent":
      content = await event("");
      break;
    default:
      content = "<h1><bold>Page not found!</bold></h1>"
      break
  }

  // Populate <main> with whatever content.
  $('main').html(content);

}

async function getAllEvents() {
  const data = await fetch('/api/club').then(response => response.json());
  const eventsHTML = data.map(createEventHTML).join('');
  return `<div class="grid-container">${eventsHTML}</div>`;
}

window.onload = router
window.onhashchange = router

