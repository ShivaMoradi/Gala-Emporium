export default async function loveHtml() {
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
            <img src="pizza1.png" alt="img">
        </div>
        <div class="about-content">
            <h3></h3>
            <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Labore Repellat Doloremque Dolor Aperiam Nulla Amet Maiores Quaerat! Nobis Accusamus, Fugiat Exercitationem Assumenda Quaerat Deserunt Maxime Illo Iusto Maiores Sit Dolorem.</p>
            
        </div>
    </div>
</section>
<!-----------------------------services-------------------->
<section class="service" id="service">
    <h4>Services</h4>
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
<section class="menu" id="menu">
    <h4>Our Menu</h4>
    <div class="menu-content">
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="veg.png" alt="img" class="veg-icon">
            <img src="pizza-v1.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Margherita Sushi Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="veg.png" alt="img" class="veg-icon">
            <img src="pizza-v2.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Italian Cuisine Tomato Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="veg.png" alt="img" class="veg-icon">
            <img src="pizza-v3.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Pepperoni Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="veg.png" alt="img" class="veg-icon">
            <img src="pizza-v4.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Hamburger Calzone Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="veg.png" alt="img" class="veg-icon">
            <img src="pizza-v5.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>Tomatos Margherita Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="nonveg.png" alt="img" class="veg-icon">
            <img src="pizza-v6.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>California-Style,Sicilian Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="nonveg.png" alt="img" class="veg-icon">
            <img src="pizza-v7.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>California-Style,Sicilian Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="nonveg.png" alt="img" class="veg-icon">
            <img src="pizza-v8.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>California-Style,Sicilian Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
        <div class="in-box">
            <i class="far fa-heart"></i>
            <img src="nonveg.png" alt="img" class="veg-icon">
            <img src="pizza-v9.png" alt="">
            <div class="in-content">
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <h2>California-Style,Sicilian Pizza</h2>
                    <div class="price">Rs.$20.00</div>
                    <button class="btn">Add to Cart <i class="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
    </div>
</section>
<!------------------------------------Blog Section----------------->
<section id="blog" class="blog">
    <h4>Latest Blog</h4>
    <div class="inner-blog">
        <div class="blog-content">
            <div class="in-blog">
                <div class="im">
                    <img src="blog-1.jpg" alt="img">
                    <div class="in-blog-icon">
                        <a href="#"><i class="fas fa-calendar"></i>20th June 2021</a>
                        <a href="#"><i class="fas fa-user"></i>Admin</a>
                    </div>

                </div>
                <div class="in-blog-content">
                    <h2>Pizza is too Good.</h2>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.</p>
                    <button class="btn">Read More</button>
                </div>
            </div>
        </div>
        <div class="blog-content">
            <div class="in-blog">
                <div class="im">
                    <img src="blog-2.jpg" alt="img">
                    <div class="in-blog-icon">
                        <a href="#"><i class="fas fa-calendar"></i>20th June 2021</a>
                        <a href="#"><i class="fas fa-user"></i>Admin</a>
                    </div>

                </div>
                <div class="in-blog-content">
                    <h2>Amazing Pizza,Best Quality</h2>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.</p>
                    <button class="btn">Read More</button>
                </div>
            </div>
        </div>
        <div class="blog-content">
            <div class="in-blog">
                <div class="im">
                    <img src="blog-3.jpg" alt="img">
                    <div class="in-blog-icon">
                        <a href="#"><i class="fas fa-calendar"></i>20th June 2021</a>
                        <a href="#"><i class="fas fa-user"></i>Admin</a>
                    </div>

                </div>
                <div class="in-blog-content">
                    <h2>Yummy Pizza, We Loved It.</h2>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.</p>
                    <button class="btn">Read More</button>
                </div>
            </div>
        </div>
    </div>
</section>
`
}


