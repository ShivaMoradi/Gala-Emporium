import clubpages from "./pages/clubpages.js";
import footer from "./pages/footer.js";
import {club1 ,head, body} from "./pages/club1.js";


async function router() {
  switch (window.location.hash) {
    case "":
      $("main").html("<h1>Start Sida</h1>")
        $("body").append(footer() );
      break;

    case "#clubpages":
      $("main").html(clubpages())
      
      break;

    case "#addevent":
      $("main").html("<h1>This page will ad an event</h1>")
      break;
    case "#club1":
        $(document).ready(function() {
    // Desactivar todos los estilos por defecto
    $('cssArchivo').attr('disabled', 'disabled');

});
      $("main").html(club1())
      $("head").html(head())
      
      break;
    default:
      $("main").html("<h1>Denna sidan finns inte!</h1>")
      break;
  }
}

window.onload = router()
window.onhashchange = router
