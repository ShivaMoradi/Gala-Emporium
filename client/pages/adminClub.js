export default async function htmlAdminClub() {

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

  const club = await getClub();
let delt = "";

  for (const key in club) {
  
   delt+= `
            <option id="option" value="${club[key].id}"> ${club[key].name}</option>
                  `    
   
}
        return` <h1>Admin&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Club</h1>
        <nav class="navbar">
             <a href="">Home</a>
            <a href="#eventAdmin">Event</a>
            
        </nav>
        <div class="contenedor">
            <!-- Añadir -->
            <div class="añadir">
                <h2>Add Club</h2>
                <form>
                    <label>Club Name</label>
                    <input type="text" id="productoAñadir" name="clubNameAdd">

                    <label>Description</label>
                    <input type="text" id="valorAñadir"  name="clubDescrip" >

                    <input class="button" type="button" id="botonAñadir" value="Add Club" onclick="addClub()">
                </form>
            </div>
            <!-- Editar -->
            <div class="editar">
                <h2>Edit Club</h2>
                <form>
                    <select id="productoEditar" onchange="selectOption()">
                        ${delt}
                    </select>
                    <label>Club Name</label>
                   <input type="text" id="rea" value ="${club[0].name }" name="clubNameEdit">

                    <label>Description</label>
                  <input type="text" id="productoAna" value="${club[0].description}" name="clubDescription">

                    <input class="button" type="button" id="botonEditar" value="Edit Club" onclick="editClub()" >
                </form>
            </div>

            <!-- Eliminar -->
            <div class="eliminar">
                <h2>Delete club</h2>

                <form>
                    <label>Club Name</label>
                    <select id="productoEliminar">
                        ${delt}
                    </select>
                    <input class="button" type="button" id="botonE" value="Delete club"onclick="deleteClub()">
                </form>
            </div>
            
        </div>

        <!-- Mostrar el mensaje -->
        <div class="contenedorMensaje">
            <div id="mensaje"></div>
        </div>

        <!-- Productos -->
        </div>`
}



async function addClub() {
  const clubName = $("[name=clubNameAdd]").val()
  const clubDescrip = $("[name=clubDescrip]").val()
  console.log(clubName)

  if (clubName.trim().length > 0 && clubDescrip.trim().length > 0) {
    const response = await fetch("api/admclub", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: clubName, description:clubDescrip  })
    })
    const result = await response.json()

    if (result.clubUpdated) {
      alert(`${clubName.trim()} was added`)
      $("[name=clubDescrip]").val("")
       location.reload();
    }
  } else {
    alert("You have to fill out the input fields!")
  }
}
window.addClub = addClub


async function editClub() {
  const option = document.getElementById('productoEditar');
   const clubId = option.value;
  const clubName = $("[name=clubNameEdit]").val().trim()
  const clubDescription = $("[name=clubDescription]").val().trim()
  if (clubName.length > 0 && clubDescription.length) {
     const response = await fetch(`api/admclub/${clubId}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: clubName ,description: clubDescription })
    })
    const result = await response.json()

    if (result.clubUpdated) {
      alert(`${clubName} was updated`)
       location.reload();
    }
  } else {
    alert("You have to fill out the input fields!")
  }


  
}

window.editClub = editClub


  async function deleteClub() {
  const option = document.getElementById('productoEliminar');
  console.log("OPtion", option)
  const clubId = option.value;
  console.log("CULBID",clubId)
  const response = await fetch(`api/admclub/${clubId}`, { method: "delete" })
  const result = await response.json()
  console.log("delete club - ", result);

  if (result.message === "Club deleted successfully") {
    alert('Club was deleted')
     location.reload();
  } else {
    alert(result.message)
  }
}

window.deleteClub = deleteClub


  
async function selectOption() {
  var selectElement = document.getElementById("productoEditar");
  console.log("SelectDD",selectElement)
  var inputElement = document.getElementById("rea");
  var inputEl = document.getElementById("productoAna");

  // Escuchar el cambio en el select
  
    // Obtener el valor seleccionado
    var selectedValue = selectElement.value;
   console.log("SelectValue",selectedValue)
    const clubDB = await obtenerDatos(selectedValue)
     console.log("Clubdb",clubDB)
  inputElement.value = clubDB[0].name 
  console.log("inputElement.value",clubDB[0].name)
    inputEl.value = clubDB[0].description

}
window.selectOption = selectOption

async function obtenerDatos(selectedValue) {
   console.log("AnteConsulta",selectedValue)
    const response = await fetch(`api/admclub/${selectedValue}`)
   const data = await response.json()
   console.log("data",data)
    return data;

  }



async function getClub() {
    const response = await fetch("/api/admclub")
  const data = await response.json()
    return data;
}

