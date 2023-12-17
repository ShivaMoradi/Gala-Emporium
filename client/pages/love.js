export default async function loveHtml() {
    const response = await fetch('/api/club/love club')
    const evenClub = await response.json()
    if (response) {
       const nuevoCSS = document.createElement('link');
        nuevoCSS.rel = 'stylesheet';
        nuevoCSS.href = './stylesheet/love.css';
        const headElement = document.head;
        headElement.appendChild(nuevoCSS);
        const coverImageSection = document.getElementById('coverImage');
        if (coverImageSection) {
            
            coverImageSection.remove();
        }
        const login = document.getElementById('login');
        if (login) {
            login.remove();
        }
        const footer = document.getElementById('footer');
        if (footer) {
            // Utiliza el método .remove() para quitar el elemento del DOM
            footer.remove();
        }
        
        

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
            
            <button class="btn  book-buttonEvent" data-event-id="${evenClub[key].idEvent}">Buy Tycket</button>
        </div>`
             }
            }  else { eventsMoth += `<h2>Sorry this we don't have an event this month</h2>`; }
                
      }
  
            return `

<section class="home" id="home">
        <div class="home-content">
            <div class="inner-content">
                <h3>Welcome to Web&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Love Club </h3>
                
            </div>
            <div class="inner-content-img">
                <img src="./img/home.jpg" alt="img">
            </div>
        </div>
    </section>
</body>
<!---------------------------about section--------------->
<div class="about" id="about">
    <h4>About Us</h4>
    <div class="about-sec">
        <div class="about-content">
            <h3></h3>
            <p>! ${evenClub[0].clubDescription}</p>
            
        </div>
    </div>
</div>
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
               
               const email = window.prompt("Ange din e-postadress:");
               console.log("Email", email);
               const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               
               
               if ( email !== null && email.trim() !== "") {
                   console.log("ENTRA parte uno O NO", email)
                   if (emailRegex.test(email)) {
                       
                       const response = await fetch("/api/booking", {
                           method: "POST",
                           headers: { "Content-Type": "application/json" },
                           body: JSON.stringify({
                               eventsID: eventsId, userEmail: email
                           }),
                       });
                       const result = await response.json();
                       
                       alert(`You are booked! Your order ID is: ${result.orderNr}`);
                       console.log('Response from server:', response);

      
                   } else {
                       alert("Enter a correct email address");
                   }
               } else {
                        alert("You must write something in the writing box");
               }
           } catch (error) {
    console.error('Error booking event:', error);
    alert("You must write something in the writing box");
  }
} 

document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("book-button-event")) {
        const eventsId = event.target.dataset.eventId;
        await bookEvent(eventsId);
    }
});


document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("book-buttonEvent")) {
        const eventsId = event.target.dataset.eventId;
        await bookEvent(eventsId);
    }
});

 const menuLinks = document.getElementById("menu-links");

menuLinks.addEventListener("click", function (event) {
    const headElement = document.head;
    
    // Verificar si el clic fue en un enlace (tag 'A')
    if (event.target.tagName === "A") {
        const currentHash = window.location.hash;

        // Verificar si se está abandonando la ruta #loveClub
        if (currentHash !== "#loveClub") {
            const css = document.querySelector('link[href="./stylesheet/love.css"]');
            if (css) {
                console.log("Entra css");
                headElement.removeChild(css);
            }
        } a = 1;
    }
    
});