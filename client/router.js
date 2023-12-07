import clubpages from "./pages/clubpages.js";
import bookClub from "./pages/clubpages.js";
import homePage from "./pages/home.js";

async function router() {
//let content;
  // Populate "content" with whatever
switch(window.location.hash){
  case "":
    console.log("Home")
     $('main').html(await homePage()); 
      break;
    case "":
     $('main').html(await clubpages("blue club")); 
    break;
    case "#bookClub":
     $('main').html( await clubpages("book club"));
    break;
    case "addevent":
       $('main').html("<h1>Placeholder for addevent page</h1>"); 
      break;
    default:
       $('main').html("<h1><bold>Page not found!</bold></h1>"); 
      break
  }

  // Populate <main> with whatever content.


}

window.onload = router
window.onhashchange = router
