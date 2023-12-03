import clubpages from "./pages/clubpages.js";
import footer from "./pages/footer.js";
import { club1, head, body } from "./pages/club1.js";
import club2 from "./pages/club2.js";
import club3 from "./pages/club3.js";
import club4 from "./pages/club4.js";
const urlRoutes = {
  "#club1": {
    template: "pages/club1.html",
    style : "styles/club1.css",
    title: ""
  },
  "#club2": {
    template: "pages/club2.html",
    style : "styles/club2.css",
    title: ""
  },
  "#club3": {
    template: "pages/club3.html",
    style : "styles/club3.css",
    title:""
  },
  "#club4": {
    template: "pages/club4.html",
    style : "styles/club4.css",
    title: ""
  }
 }
async function router() {
   let ruta = window.location.hash
  switch (ruta) {
    case "":
      $("main").html("<h1>Start Sida</h1>")
      break;

    case "#clubpages":
      $("main").html(clubpages())
      
      break;
    case "#addevent":
      $("main").html("<h1>This page will ad an event</h1>")
      break;
    case "#club1":
      cargarContenido(urlRoutes[ruta].template)
     /*   $(document).ready(function() {
    // Desactivar todos los estilos por defecto
    $('cssArchivo').attr('disabled', 'disabled');

});
      $("main").html(club1())
      $("head").html(head())
      */
      break;

    case "#club2":
     
     cargarContenido(urlRoutes[ruta].template)
      
      break;
    case "#club3":
     cargarContenido(urlRoutes[ruta].template)
      break;
    case "#club4":
      cargarContenido(urlRoutes[ruta].template)
      break;
    default:
      $("main").html("<h1>Denna sidan finns inte!</h1>")
      break;
  }
}

function cargarContenido(ruta) {
  // Cargar el contenido HTML de la nueva página
    $('main').load(ruta);
  // Cambiar la hoja de estilos según la ruta
    $('link[rel="stylesheet"]').attr('href',urlRoutes[window.location.hash].style);
}

window.onload = router()
window.onhashchange = router
