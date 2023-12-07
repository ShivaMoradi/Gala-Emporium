import clubPages from "./pages/clubpages.js";
import bookClub from "./pages/clubpages.js";

async function router() {
let content;
  // Populate "content" with whatever
switch(window.location.hash){
    case "":
      content = ""
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
    case "addevent":
      content = "<h1>Placeholder for addevent page</h1>"
      break;
    default:
      content = "<h1><bold>Page not found!</bold></h1>"
      break
  }

  // Populate <main> with whatever content.
 $('main').html(content);

}

window.onload = router
window.onhashchange = router
