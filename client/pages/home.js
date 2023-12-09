export default async function crearEstructuraHTML() {
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
          console.log(`${b[clave].date}`)
          const datebd = `${b[clave].date}`;
          const dateNew = new Date(datebd)
          const date = dateNew.getUTCDate();
          const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          const monthLetter = month[dateNew.getUTCMonth()];
          console.log(date)

          h2.innerHTML = `${date}<br><span>${monthLetter}</span>`;

          // Crear el div con la clase "details"
          const detailsDiv = document.createElement('div');
          detailsDiv.className = 'details';

          // Crear el título h3
          const h3 = document.createElement('h3');
          h3.textContent = `${b[clave].eventName}`;

          // Crear el párrafo
          const detailsParagraph = document.createElement('p');
          detailsParagraph.textContent =`${b[clave].eventDescrip}`

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
  
    contentDiv.appendChild(h1);
    contentDiv.appendChild(paragraph);
    section.appendChild(eventsDiv);
    eventsDiv.appendChild(leftBoxDiv);
    leftBoxDiv.appendChild(contentDiv);
  

  }
  // Devolver la estructura como una cadena HTML
  return section.outerHTML;
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
      eventName: evento.eventName,
      eventDescrip:evento.eventDescription
    };
  }
  eventosPorClub[evento.clubName].eventos.push({
    eventName: evento.eventName,
    // Puedes incluir más propiedades del evento si es necesario
  });
}
 return eventosPorClub
}
 




async function getClubEvents() {
    const response = await fetch("/api/club")
    const data = await response.json()
    return data;
}

