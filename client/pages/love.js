export default async function loveHtml() {
    const response = await fetch('/api/club/love club')
     const evenClub = await response.json()
    if (response) {
      console.log("BD",evenClub,)
 
  const nuevoCSS = document.createElement('link');
  nuevoCSS.rel = 'stylesheet';
  nuevoCSS.href = './styles/love.css';
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
             eventTag += ` <div class="blog-content">
            <div class="in-blog">
                <div class="im">
                    <img src="blog-1.jpg" alt="img">
                    <div class="in-blog-icon">
                        <a href="#"><i class="fas fa-calendar"></i>20th June 2021</a>
                        <a href="#"><i class="fas fa-user"></i>Admin</a>
                    </div>

                </div>
                <div class="in-blog-content">
                    <h2>${evenClub[key].eventName} </h2>
                    <p>${evenClub[key].eventDescription}.</p>
                    <button class="btn">Buy Tycket</button>
                </div>
            </div>
        </div>`
        }

        /*Events of the month*/
        const fechaActual = new Date();
        const mesActual = fechaActual.getMonth() + 1;
        
      


  
  return `
    <header class="head">
        <h1>Love&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Club</h1>
        <nav class="navbar">
            <a href="">Home</a>
            <a href="#about">About</a>
            <a href="#service">Services</a>
            <a href="#menu">Menu</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
        </nav>
        <div class="side-bar">
            <i class="fas fa-search" id="search"></i>
            <i class="fas fa-user" id="user"></i>
            <i class="fas fa-bars" id="bars"></i>
        </div>
        <form action="#" class="search-bar">
            <input type="search" name="search" id="1" placeholder="Search Here">
        </form>
    </header>

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
<section class="service" id="service">
    <h4>Events of the month</h4>
    <div class="service-content">
        <div class="inner-box">
            <img src="s-1.png" alt="">
            <h2>Free Delivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi Quod Iure Impedit Alias Labore Placeat Magnam Explicabo.</p>
            <button class="btn">Read More</button>
        </div>
        <div class="inner-box">
            <img src="s-2.png" alt="">
            <h2>Online Payment</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi Quod Iure Impedit Alias Labore Placeat Magnam Explicabo.</p>
            <button class="btn">Read More</button>
        </div>
        <div class="inner-box">
            <img src="s-3.png" alt="">
            <h2>Fresh Food</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi Quod Iure Impedit Alias Labore Placeat Magnam Explicabo.</p>
            <button class="btn">Read More</button>
        </div>
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


