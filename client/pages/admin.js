export default async function clubHtmlAdmin() {

 
  const nuevoCSS = document.createElement('link');
  nuevoCSS.rel = 'stylesheet';
  nuevoCSS.href = './stylesheet/admin.css';
  console.log("Entra ")
  // Obtener el elemento head del documento
  const headElement = document.head;
  // Obtener el enlace CSS existente que deseas reemplazar
  const css = document.querySelector('link[href="./style.css"]');
  console.log("ruta", css)
  if (css) {
    console.log("Entra css")
    headElement.removeChild(css); // Quitar el enlace existente
  }
  headElement.appendChild(nuevoCSS);
  // Añadir el nuevo enlace CSS al head del documento
  
  const nav = document.getElementById('nav');
  if (nav) {
    // Utiliza el método .remove() para quitar el elemento del DOM
    nav.remove();
  }
  const h1 = document.getElementById('website-title');
  if (h1) {
    // Utiliza el método .remove() para quitar el elemento del DOM
    h1.remove();
  }
  const eventDisplay = document.getElementById('eventDisplay');
  if (eventDisplay) {
    // Utiliza el método .remove() para quitar el elemento del DOM
    eventDisplay.remove();
  }
  
  
  const coverImageSection = document.getElementById('coverImage');

  // Verifica si el elemento existe antes de intentar quitarlo
  if (coverImageSection) {
    // Utiliza el método .remove() para quitar el elemento del DOM
    coverImageSection.remove();
  }
  const login = document.getElementById('login');
  if (login) {
    // Utiliza el método .remove() para quitar el elemento del DOM
    login.remove();
  }
  




  const footer = document.getElementById('footer');
  if (footer) {
    // Utiliza el método .remove() para quitar el elemento del DOM
    footer.remove();
  }
        return` <h1>Love&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Club</h1>
        <nav class="navbar">
             <a href="">Home</a>
            <a href="#eventAdmin">Event</a>
            <a href="#clubAdmin">Club</a>
        </nav>`
}