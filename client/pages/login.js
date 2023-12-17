import clubHtmlAdmin from "./admin.js"
export default async function init() {
  
 





  return `
    <form onsubmit="login(); return false">
      <input name="email" placeholder="your email">
      <input name="password" placeholder="your password">
      <input type="submit" value="Login">
    </form>  
  `
}


export async function loginAdmin() {
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
  return ` <h1>Admin&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Club</h1>
        <nav class="navbar">
             <a href="">Home</a>
        </nav>
        <div class="contenedor">
         <div class="añadir">
                <h2>Login </h2>
                <form onsubmit="login(); return false">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="your email">

                    <label>Password</label>
                    <input type="text"   name="password" placeholder="your password" >
                    <input type="submit" value="Login">
                </form>
            </div>
   </div>
  `  

}




export async function login() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const credentials = {
    email: $('[name=email]').val(),
    password: $('[name=password]').val()
  }
  try {
    if (credentials.email !== null && credentials.email !== "" && credentials.password != null && credentials.password != "") { 
      if (emailRegex.test(credentials.email)) {
        console.log(credentials)
        let response = await fetch('/api/login', {
       
         method: 'post',
       
           headers: { 'Content-Type': 'application/json' },
    
         body: JSON.stringify(credentials)
        });
      let result = await response.json();
      console.log(result)
    if (result.loggedIn) {
   
      alert(`welcome to Admin page!`);
      $('main').html(await clubHtmlAdmin());
    } else {
      alert("Verify that all data is written correctly");
  }           
    }else {
            alert("Enter a correct email address");
        }


    }else{
       
        alert("You must write something in the writing box");
    }
  }catch (error) {
    console.error('Error booking event:', error);
    alert("An error occurred while booking the event");
}


}



window.login = login


async function logout() {
  console.log('sir, logging out?')
  let response = await fetch('/api/login', {
    method: 'delete'
  });
  let result = await response.json();
  console.log(result)
  if (!result.loggedIn) {
    $('#main').html("")
  }
}

window.logout = logout


async function checkLogin() {
  const response = await fetch('/api/login')
  const result = await response.json()
  console.log(result)
  if (result.loggedIn || result.email) {
    $('#login').html(`
      <button onclick="logout()">Logout</button>
    `)

  }
}

checkLogin() // will execute on load