export default async function htmlAdminEvent() {

  const nuevoCSS = document.createElement('link');
  nuevoCSS.rel = 'stylesheet';
  nuevoCSS.href = './styles/admin.css';
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
        return` <h1>Admin&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Event</h1>
        <nav class="navbar">
            <a href="#clubAdmin">Club</a>
            
        </nav>
        <div class="contenedor">
            <!-- Añadir -->
            <div class="añadir">
                <h2>Añadir</h2>
                <form>
                    <label>Nombre del producto</label>
                    <input type="text" id="productoAñadir" name="nombreDelProducto">

                    <label>Valor del producto</label>
                    <input type="number" id="valorAñadir">

                    <label>Existencia</label>
                    <input type="number" id="existenciaAñadir">

                    <label>Url Imagen</label>
                    <input type="text" id="ImagenAñadir">

                    <input class="button" type="button" id="botonAñadir" value="Añadir">
                </form>
            </div>
            <!-- Editar -->
            <div class="editar">
                <h2>Editar</h2>
                <form>
                    <label>Nombre del producto</label>
                    <select id="productoEditar">
                        <option value="">---</option>
                    </select>

                    <label>Atributo</label>
                    <select id="atributoEditar">
                        <option value="">---</option>
                    </select>

                    <label>Nuevo valor</label>
                    <input type="text" id="nuevoAtributo">

                    <input class="button" type="button" id="botonEditar" value="Editar">
                </form>
            </div>

            <!-- Eliminar -->
            <div class="eliminar">
                <h2>Eliminar</h2>

                <form>
                    <label>Nombre del producto</label>
                    <select id="productoEliminar">
                        <option value="">---</option>
                    </select>
                    <input class="button" type="button" id="botonEliminar" value="Eliminar">
                </form>
            </div>
        </div>

        <!-- Mostrar el mensaje -->
        <div class="contenedorMensaje">
            <div id="mensaje"></div>
        </div>

        
        </div>
        </div>
        `
}