



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
         console.log(objetoInterior)
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
  return pTags
}

async function eventsByClub() {
  const clubData = await getClubEvents();
  const eventosPorClub = {};
for (const evento of clubData) {
  if (!eventosPorClub[evento.clubName]) {
    eventosPorClub[evento.clubName] = {
      clubName: evento.clubName,
      eventos: [],
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

