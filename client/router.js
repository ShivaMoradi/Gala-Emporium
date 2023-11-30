import addevents from "./pages/addevents.js";
import clubpages from "./pages/clubpages.js";

async function router() {
  switch (window.location.hash) {
    case "":
      $("main").html("<h1>Start Sida</h1>")
      break;

    case "#clubpages":
      $("main").html("<h1> clubpage</h1>")
      break;

    case "#addevent":
      $("main").html("<h1>This page will ad an event</h1>")
      break;

    default:
      $("main").html("<h1>Denna sidan finns inte!</h1>")
      break;
  }
}

window.onload = router()
window.onhashchange = router
