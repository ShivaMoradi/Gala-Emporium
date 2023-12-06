
import clubpages from "./pages/clubpages.js";

async function router() {
  switch (window.location.hash) {
    case "":
      $("main").html("<h1>Start Sida</h1>")
      break;

    case "#clubpages":
      $("main").html(clubpages())
      break;

    case "#addevent":
      $("main").html("<h1>This page will add an event</h1>")
      break;

    default:
      $("main").html("<h1>Page not found!</h1>")
      break;
  }
}

window.onload = router
window.onhashchange = router
