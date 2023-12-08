export default async function homePage() {
  const clubData = await getClubEvents();
  console.log(clubData)
  const b = await eventsByClub();
  console.log(b)
  let pTags = ""
  /* for (let i = 0; i < clubData.length; i++) {
     
     const event = clubData.filter(evento => evento.clubName === clubData[i].clubName)
      const propiedades = [];
     for (let j = 0; j < event.length; j++) {
       const objeto = event[j];
       propiedades.push(objeto["eventName"]);
     }
   
     pTags += `<h1>${clubData[i].clubName} </h1>` 
     pTags +=  `<p>${propiedades} </p>`
      // pTags += `<p>${event[j]} </p>`
 
       // if (c === "blue club") {
       // pTags += `<p>${clubData[i].eventName}</p>` 
     
     }*/
  for (const clave in b) {
     pTags += `<h1>${b[clave].clubName} </h1></br>` 
    if (b.hasOwnProperty(clave)) {
      const objetoInterior = b[clave];
      // Verificar si el objeto interior tiene un atributo llamado "arreglo"
      if (objetoInterior.hasOwnProperty("eventos")) {
             const arregloInterior = objetoInterior.eventos;

        // Recorrer el arreglo interior
        for (const valor of arregloInterior) {
            pTags += `<h3>${valor.eventName} </h3></br>` 
          // Puedes hacer algo con cada valor del arreglo interior aquí
        }
      }
    }
    
  } 
  const r = crearEstructuraHTML();
  return r;
}

async function eventsByClub() {
  const clubData = await getClubEvents();
  const eventosPorClub = {};
for (const evento of clubData) {
  if (!eventosPorClub[evento.clubName]) {
    eventosPorClub[evento.clubName] = {
      clubName: evento.clubName,
      eventos: [],
      clubDescrip: evento.clubDescription,
      date: evento.date,
    };
  }
  eventosPorClub[evento.clubName].eventos.push({
    eventName: evento.eventName,
    // Puedes incluir más propiedades del evento si es necesario
  });
}
return eventosPorClub
}
 
async function createHtml() {
  const clubData = await getClubEvents();
  const b = await eventsByClub();

  const section = document.getElementById('miSection');

      const eventsDiv = document.createElement('div');
      eventsDiv.className = 'events';

      const leftBoxDiv = document.createElement('div');
      leftBoxDiv.className = 'leftBox';

      const contentDiv = document.createElement('div');
      contentDiv.className = 'content';
  for (const clave in b) {
    const h1 = await document.createElement('h1');
    h1.textContent = `${b[clave].clubName}` ;
      const paragraph = document.createElement('p');
    paragraph.textContent = `${b[clave].clubDescrip}`;
    if (b.hasOwnProperty(clave)) {
       const objetoInterior = b[clave];
      if (objetoInterior.hasOwnProperty("eventos")) {
        const arregloInterior = objetoInterior.eventos;
        for (const valor of arregloInterior) {
          const h2 = document.createElement('h2');
          h2.innerHTML = '24<br><span>June</span>';

          const timeDiv = document.createElement('div');
          timeDiv.className = 'time';
          timeDiv.appendChild(h2);

          const detailsDiv = document.createElement('div');
          detailsDiv.className = 'details';

          const h3 = document.createElement('h3');
          h3.textContent = `${valor.eventName} `;

          const detailsParagraph = document.createElement('p');
          detailsParagraph.textContent = 'Contrary to popular belief, Lorem Ipsum is not ' +
            'simply random text. It has roots in a piece of ' +
            'classical Latin literature from 45 BC, making it ' +
            'over 2000 years old .';

          const viewDetailsLink = document.createElement('a');
          viewDetailsLink.href = '#';
          viewDetailsLink.textContent = 'View Details';

          section.appendChild(eventsDiv);
          eventsDiv.appendChild(leftBoxDiv);
          leftBoxDiv.appendChild(contentDiv);
          contentDiv.appendChild(h1);
          contentDiv.appendChild(paragraph);
  
          const ul = document.createElement('ul');
          const li = document.createElement('li');
          li.appendChild(timeDiv);
          li.appendChild(detailsDiv);

          detailsDiv.appendChild(h3);
          detailsDiv.appendChild(detailsParagraph);
          detailsDiv.appendChild(viewDetailsLink);

          ul.appendChild(li);
          leftBoxDiv.appendChild(ul);
        }
      }
    }
  }
  
  
    // Devolver la estructura como una cadena HTML
      return section.outerHTML;

  
}

async function crearEstructuraHTML() {
  const b = await eventsByClub();
  // Crear la sección
  const section =  document.getElementById('miSection');
  

  // Crear el div con la clase "events"
  const eventsDiv = document.createElement('div');
  eventsDiv.className = 'events';

  // Crear el div con la clase "leftBox"
  const leftBoxDiv = document.createElement('div');
  leftBoxDiv.className = 'leftBox';

  // Crear el div con la clase "content"
  const contentDiv = document.createElement('div');
  contentDiv.className = 'content';
  for (const clave in b) {
    // Crear el título h1
    const h1 = document.createElement('h1');
    h1.textContent = `${b[clave].clubName}`;

    // Crear el párrafo
    const paragraph = document.createElement('p');
    paragraph.textContent = `${b[clave].clubDescrip}`
    if (b.hasOwnProperty(clave)) {
      const objetoInterior = b[clave];
      if (objetoInterior.hasOwnProperty("eventos")) {
        const arregloInterior = objetoInterior.eventos;
        // Crear las listas desordenadas con elementos li
        for (const valor of arregloInterior) {
        
          const ul = document.createElement('ul');
          const li = document.createElement('li');

          // Crear el div con la clase "time"
          const timeDiv = document.createElement('div');
          timeDiv.className = 'time';

          // Crear el título h2
          const h2 = document.createElement('h2');
          h2.innerHTML = '24<br><span>June</span>';

          // Crear el div con la clase "details"
          const detailsDiv = document.createElement('div');
          detailsDiv.className = 'details';

          // Crear el título h3
          const h3 = document.createElement('h3');
          h3.textContent = 'Where does it come from';

          // Crear el párrafo
          const detailsParagraph = document.createElement('p');
          detailsParagraph.textContent = "Contrary to popular belief, Lorem Ipsum is not " +
            "simply random text. It has roots in a piece of " +
            "classical Latin literature from 45 BC, making it " +
            "over 2000 years old.";

          // Crear el enlace
          const viewDetailsLink = document.createElement('a');
          viewDetailsLink.href = '#';
          viewDetailsLink.textContent = 'View Details';

          // Agregar los elementos al DOM
          

          
          timeDiv.appendChild(h2);
          detailsDiv.appendChild(h3);
          detailsDiv.appendChild(detailsParagraph);
          detailsDiv.appendChild(viewDetailsLink);
          li.appendChild(timeDiv);
          li.appendChild(detailsDiv);
          ul.appendChild(li);
          paragraph.appendChild(ul);
           
        }
      }
    }
    // Agregar los elementos al DOM
    //contentDiv.insertBefore(paragraph, contentDiv.firstChild); // Insertar el párrafo como primer hijo
    //contentDiv.insertBefore(h1, paragraph); //
    //
  
    contentDiv.appendChild(h1);
    contentDiv.appendChild(paragraph);
    section.appendChild(eventsDiv);
    eventsDiv.appendChild(leftBoxDiv);
    leftBoxDiv.appendChild(contentDiv);
  

  }
  // Devolver la estructura como una cadena HTML
  return section.outerHTML;
}







async function getClubEvents() {
    const response = await fetch("/api/club")
    const data = await response.json()
    return data;
}

