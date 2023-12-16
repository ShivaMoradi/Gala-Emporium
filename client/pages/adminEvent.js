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
    const club = await getClub();
    let delt = "";

    for (const key in club) {
      delt += `
            <option id="option" value="${club[key].id}"> ${club[key].name}</option>
                  `    
    }
   
        return` <h1>Admin&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Event</h1>
        <nav class="navbar">
            <a href="#clubAdmin">Club</a>
            
        </nav>
        <div class="contenedor">
            <!-- Añadir -->
            <div class="añadir">
                <h2>Add Event</h2>
                <form class="addEvent" onsubmit="addEvent(); return false">
                    <label>Event Name</label>
                    <input type="text" id="eventsName" name="eventsName" placeholder="events name">
                    <label> Description</label>
                    <input type="text" id="eventsDescription"  name="eventsDescription" placeholder="events description">
                    <label>Date</label>
                    <input type="datetime-local"  id="eventsDate" name="eventsDate" placeholder="events date">
                     <label>address</label>
                    <input type="text" name="eventsAddress" id="eventsAddress" placeholder="events address">
                     <label>Price</label>
                     <input type="number" name="eventsPrice" id="eventsPrice" placeholder="events price">
                       <label>Club</label>
                        <select id="eventsInsert" >
                        ${delt}
                        </select>
                    <label>Imagen</label>
                    <input type="text" id="ImagenAñadir">
                     <input id="submit" class="button" type="submit" value="Add Event">
                </form>
            </div>
            <!-- Editar -->
            <div class="editar">
                <h2>Edit Event</h2>
                <form class="addEvent" onsubmit="editEvent(); return false">
                     <label>Club</label>
                        <select id="eventsEdit" onchange="selectOptionEdit()">
                        ${delt}
                        </select>
                    <label>Event Name</label>
                      <select id="eventId" onchange="selectOptionEditName()">
                       <option id="optionedit" value="" > </option>
                    </select>
                    <label>Event Name</label>
                    <input type="text" id="eventsNameEdit" name="eventsNameEdit" placeholder="events name" >
                    <label>Description</label>
                    <input type="text" id="eventsDescriptionEdit"  name="eventsDescriptionEdit" placeholder="events description">
                    <label>Date</label>
                    <input type="datetime-local"  id="eventsDateEdit" name="eventsDateEdit" placeholder="events date">
                     <label>Addresss</label>
                    <input type="text" name="eventsAddressEdit" id="eventsAddressEdit" placeholder="events address">
                     <label>Price</label>
                     <input type="number" name="eventsPriceEdit" id="eventsPriceEdit" placeholder="events price"> 
                    <label>Imagen</label>
                    <input type="text" id="ImagenAñadirEdit"  name="ImagenAñadirEdit" >
                     <input id="submitEdit" class="button" type="submit" value="Edit Event">
                </form>
            </div>

            <!-- Eliminar -->
            <div class="eliminar">
                <h2>Delete Event</h2>

                <form class="deleteEvent" onsubmit="deleteEvent(); return false">
                    <label>Club Name</label>
                    <select id="productoEliminar" onchange="selectOptionDelete()">
                       ${delt}
                    </select>
                   <label>Event Name</label>
                      <select id="eventEliminar">
                       <option id="option" value=""> </option>
                    </select>
                  
                    <input class="button" type="submit" id="botonEliminar" value="Delete Event">
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

async function addEvent() {
        const eventName = document.querySelector('input[name="eventsName"]').value;
        const eventDescription = document.querySelector('input[name="eventsDescription"]').value;
        const date = document.querySelector('input[name="eventsDate"]').value;
        const address = document.querySelector('input[name="eventsAddress"]').value;
        const price = document.querySelector('input[name="eventsPrice"]').value;
        const option = document.getElementById('eventsInsert');
        const clubId = option.value;
        // Assuming clubId is actually clubName
        const clubDescription = "";  // Assuming clubDescription is not present in your form
        if(eventName.trim().length > 0 && eventDescription.trim().length > 0 && date.trim().length > 0 && address.trim().length > 0 && price.trim().length > 0 && clubId.trim().length > 0 ){
        const response = await fetch("/api/club", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventName,
                eventDescription,
                date,
                address,
                price,
                clubId,
                clubDescription,
               
            }),
        });
          const result = await response.json()
          console.log(result)
             if (result.insertEvent) {
      alert(`${eventName.trim()} was added`)
           location.reload();
    }
  } else {
    alert("You have to fill out the input fields!")
  }
           
           
     
}

window.addEvent = addEvent
  
async function editEvent() {
  let eventsEdit = document.getElementById("eventsEdit");
  const clubId = eventsEdit.value;
  console.log("clubId",clubId)
  let eventSelect = document.getElementById("eventId");
  const eventId = eventSelect.value;
  const eventName = document.querySelector('input[name="eventsNameEdit"]').value;
   console.log("eventName",eventName)
  const eventDescription = document.querySelector('input[name="eventsDescriptionEdit"]').value;
   console.log("eventDescription",eventDescription)
  const date = document.querySelector('input[name="eventsDateEdit"]').value;
  console.log("date ",date )
  const address = document.querySelector('input[name="eventsAddressEdit"]').value;
  console.log("address",address)
  const price = document.querySelector('input[name="eventsPriceEdit"]').value;
  console.log("price",price)
  const picture = document.querySelector('input[name="ImagenAñadirEdit"]').value;
  console.log("picture",picture)
   if (eventName.length > 0) {
    const response = await fetch(`api/admevent/${eventId}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({eventId,
        eventName,
                eventDescription,
                date,
                address,
                price,
                clubId,
               eventDescription,
               picture,
                })
    })
    const result = await response.json()

    if (result.editEventUpdated) {
      alert(`${eventName} was updated`)
       location.reload();
    }
  } else {
    alert("You have to fill out the input fields!")
  }
   


}


window.editEvent = editEvent


async function deleteEvent() {
  const optionEvent = document.getElementById('eventEliminar');
  const eventId = optionEvent.value;
  if (eventId) {
    const response = await fetch(`api/admevent/${eventId}`, { method: "delete" })
    const result = await response.json()
    console.log("delete Event - ", result);

    if (result.message === "Club deleted successfully") {
      alert('Event was deleted')
      location.reload();
    } else {
      alert(result.message)
    }

  }else {
    alert("You have to fill out the input fields!")
  }
}

window.deleteEvent = deleteEvent



async function selectOptionDelete() {
  var selectElement = document.getElementById("productoEliminar");
  console.log("SelectDD",selectElement)
  var inputElement = document.getElementById("eventEliminar");
    inputElement.innerHTML = ''
   console.log("inputElement",inputElement)
    var selectedValue = selectElement.value;
   console.log("SelectValue",selectedValue)
  const clubDB = await obtenerDatos(selectedValue)
  console.log("Clubdb", clubDB)
  for (const key in clubDB) {
        const nuevaOpcion = document.createElement('option');
          nuevaOpcion.value = clubDB[key].id;
         nuevaOpcion.text = clubDB[key].name;
          console.log("nuevaOpcion",nuevaOpcion)
         inputElement.appendChild(nuevaOpcion);
        console.log("inputElement.value",clubDB[key].name )
      
  }
  
   }
 

window.selectOptionDelete = selectOptionDelete



async function selectOptionEdit() {
  console.log("Entra a edit ")
  var selectElement = document.getElementById("eventsEdit");
  console.log("SelectDD",selectElement)
  var inputElement = document.getElementById("eventId");
    inputElement.innerHTML = ''                                 
  console.log("inputElement", inputElement);
    var selectedValue = selectElement.value;
   console.log("SelectValue",selectedValue)
  const clubDB = await obtenerDatos(selectedValue)
  console.log("Clubdb", clubDB)
  for (const key in clubDB) {
        const nuevaOpcion = document.createElement('option');
          nuevaOpcion.value = clubDB[key].id;
         nuevaOpcion.text = clubDB[key].name;
          console.log("nuevaOpcion",nuevaOpcion)
         inputElement.appendChild(nuevaOpcion);
        console.log("inputElement.value",clubDB[key].name )
      
  }      


}

window.selectOptionEdit = selectOptionEdit

async function selectOptionEditName() { 
  var inputElement = document.getElementById("eventId");
  var selectedValue = inputElement.value;
  const response = await fetch(`api/admevent`)
  const data = await response.json()
  const event = data.find(objeto => objeto.id ==selectedValue);
  var eventsNameEdit = document.getElementById("eventsNameEdit");
  eventsNameEdit.placeholder = '';
  eventsNameEdit.value =event["name"];
  var eventsDescriptionEdit = document.getElementById("eventsDescriptionEdit");
  eventsDescriptionEdit.placeholder = '';
  eventsDescriptionEdit.value = event["eventDescription"];
   var eventsAddressEdit = document.getElementById("eventsAddressEdit");
    eventsAddressEdit.placeholder = '';
    eventsAddressEdit.value = event["address"];
   var eventsDate = document.getElementById("eventsDateEdit");
         eventsDate.value = event["date"];
  var inputElement = document.getElementById("eventsPriceEdit");
     inputElement.value = event["price"]; 
  var inputElement = document.getElementById("ImagenAñadir");
   console.log("eventDate",event["date"])
   console.log("eventDBEvent",event)
   console.log("eventBYID",eventsNameEdit)
  
 



}

window.selectOptionEditName = selectOptionEditName




async function obtenerDatos(selectedValue) {
   console.log("AnteConsulta",selectedValue)
    const response = await fetch(`api/admevent/${selectedValue}`)
   const data = await response.json()
   console.log("data",data)
    return data;

  }


  
async function getClub() {
    const response = await fetch("/api/admclub")
  const data = await response.json()
    return data;
}
