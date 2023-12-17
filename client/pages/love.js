export default async function loveHtml() {
    const response = await fetch('/api/club/love club')
    const evenClub = await response.json()
    if (response) {
        console.log("BD", evenClub,)
 
        const nuevoCSS = document.createElement('link');
        nuevoCSS.rel = 'stylesheet';
        nuevoCSS.href = './stylesheet/love.css';
        console.log("Entra ")
        // Obtener el elemento head del documento
        const headElement = document.head;
        // Obtener el enlace CSS existente que deseas reemplazar
        
        const css = document.querySelector('link[href="./stylesheet/style.css"]');
        console.log("ruta", css)
        if (css) {
            console.log("Entra css")
            headElement.removeChild(css); // Quitar el enlace existente
        }
        headElement.appendChild(nuevoCSS);
        
        // Añadir el nuevo enlace CSS al head del documento
      /*
        const h1 = document.getElementById('website-title');
        if (h1) {
            // Utiliza el método .remove() para quitar el elemento del DOM
            h1.remove();
        }
       */
  
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
        
        
      
        // Si hay un enlace existente, reemplazarlo con el nuevo enlace
        /*Events*/
        let eventTag = ""
        for (const key in evenClub) {
               const datebd = evenClub[key].date
                const dateNew = new Date(datebd)
                const dayEvent = dateNew.getDay();
                const year = dateNew.getFullYear();
            const moth = dateNew.getMonth() + 1;
            console.log("Mese claro",moth)
            const moths = [
               'Enero', 'Febrero', 'Marzo', 'Abril',
                'Mayo', 'Junio', 'Julio', 'Agosto',
               'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                     ];

              // Obtener el nombre del mes
                    const m = moths[moth -1];
            eventTag += ` <div class="blog-content">
            <div class="in-blog">
                <div class="im">
                    <img src="${evenClub[key].images}" alt="img">
                    <div class="in-blog-icon">
                        <a href="#"><i class="fas fa-calendar"></i>${dayEvent} ${m} ${year}</a>
                        <a href="#"><i class="fas fa-user"></i>${evenClub[key].price}.00kr</a>
                    </div>

                </div>
                <div class="in-blog-content">
                    <h2>${evenClub[key].eventName} </h2>
                    <p>${evenClub[key].eventDescription}.</p>
                    <button class="btn  book-button-event" data-event-id="${evenClub[key].idEvent}">Buy Tycket</button>
                </div>
            </div>
        </div>`
        }
        
        /*Events of the month*/
       
      
        let eventsMoth = "";
        for (const key in evenClub) { 
           
            if (eventMonth()) {
               const datebd = evenClub[key].date
                const dateNew = new Date(datebd)
                const dayEvent = dateNew.getDay();
                const monthEvent = dateNew.getMonth()+ 1;
                if (monthEvent === currentMonth) {
                  console.log("Dime mamai",evenClub)
            eventsMoth += `<div class="inner-box">
            <img src="${evenClub[key].images}" alt="">
            <h2>${evenClub[key].eventName}</h2>
            <p>${evenClub[key].eventDescription}</p>
            <h5>Date:${dayEvent} ${monthEvent} </h5>
            <h5>Palece:${evenClub[key].address} </h5>
            <h5>Price:${evenClub[key].price} </h5>
            
            <button class="btn  book-button" data-event-id="${evenClub[key].idEvent}">Buy Tycket</button>
        </div>`
             } else { eventsMoth += ""; }
            } else {

                eventsMoth += `<h2>Sorry we don't have an event this month</h2>`
             }
      }
  
            return `

<section class="home" id="home">
        <div class="home-content">
            <div class="inner-content">
                <h3>Welcome to Web&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Club Love</h3>
                
            </div>
            <div class="inner-content-img">
                <img src="./img/home.jpg" alt="img">
            </div>
        </div>
    </section>
</body>
<!---------------------------about section--------------->
<section class="about" id="about">
    <h4>About Us</h4>
    <div class="about-sec">
        <div class="img">
            <img src="" alt="img">
        </div>
        <div class="about-content">
            <h3></h3>
            <p>! ${evenClub[0].clubDescription}</p>
            
        </div>
    </div>
</section>
<!-----------------------------services-------------------->
<section class="service" id="service" >
    <h4>Events of the month</h4>
    <div class="service-content" id="johan">
          ${eventsMoth} 
          <script>
            
         
        </script>
    </div>
</section>
<!----------------------menu----------------------->

<!------------------------------------Blog Section----------------->
<section id="blog" class="blog">
    <h4>Events</h4>
    <div class="inner-blog">
       
        ${eventTag}
        
    </div>
</section>
`
        }
    }


 const fechaActual = new Date();
        const currentMonth = fechaActual.getMonth() + 1;
        const year = fechaActual.getFullYear();
        console.log(year)
        console.log("Eventos del mes", eventMonth())
async function eventMonth() {
   
        const response = await fetch('/api/club/love club')
        const evenClub = await response.json()
            for (const key in evenClub) {
                const datebd = evenClub[key].date
                const dateNew = new Date(datebd)
                const monthEvent = dateNew.getMonth() + 1;
                const yearEvent = dateNew.getFullYear();
                if (currentMonth === monthEvent && year === yearEvent) {
                  
                    return true;

                }
            }
        }
        

       async function bookEvent(eventsId) {
           try {
    // Use window.prompt to get user email
    const email = window.prompt("Ange din e-postadress:");
               console.log("Email", email.length);
               
    if (email !=="" &&  email !== null) {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventsID: eventsId, userEmail: email }),
      });

      console.log('Response from server:', response);

      if (!response.ok) {
        console.error(`Error booking event: ${response.statusText}`);
        alert("Ett fel inträffade vid bokningen. Försök igen senare.11");
        console.log('Error condition reached');
        return;
      }

      const result = await response.json();
      console.log('Result from server:', result);
      alert(`Du är bokad! Din order-ID är: ${result.orderNr}`);
    }
  } catch (error) {
    console.error('Error booking event:', error);
    alert("Ett fel inträffade vid bokningen. Försök igen senare.22");
  }
} 

document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("book-button")) {
        const eventsId = event.target.dataset.eventId;
        await bookEvent(eventsId);
    }
});


document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("book-button-event")) {
        const eventsId = event.target.dataset.eventId;
        await bookEvent(eventsId);
    }
});