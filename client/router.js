import login from "./pages/login.js";
$('#login').html(login());

import { createEventHTML, event, addEvent } from "./pages/addevents.js";
import clubPages from "./pages/clubpages.js";

async function router() {
  let content;
  // Populate "content" with whatever
  switch (window.location.hash) {
    case "":
      content = await createEventHTML();
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
      content = event();
      break;
    case "#loveClub":
      content = "<h1>Hola LOve</h1>";
      break;
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

    const clubData = await data.json();

    // Map over each club and create HTML for events
    const clubsHTML = clubData.map(createClubHTML).join('');

    return `<div class="grid-container">${clubsHTML}</div>`;
  } catch (error) {
    console.error('Error fetching events:', error);
    return '<p>Error fetching events. Please try again later.</p>';
  }
}

window.onload = router;
window.onhashchange = router;