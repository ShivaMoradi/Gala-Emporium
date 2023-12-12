import { event } from "./addevents.js";
export default async function init () {
  return `
    <form onsubmit="login(); return false">
      <input name="email" placeholder="your email">
      <input name="password" placeholder="your password">
      <input type="submit" value="Login">
    </form>  
  `
}

async function login () {
  const credentials = {
    email: $( '[name=email]' ).val(),
    password: $( '[name=password]' ).val()
  }
  $( "#addEventbyAdmin" ).html( await event() )
  console.log( credentials )
  let response = await fetch( '/api/login', {
    // tell the server we want to send/create data
    method: 'post',
    // and that we will send data json formatted
    headers: { 'Content-Type': 'application/json' },
    // the data encoded as json
    body: JSON.stringify( credentials )
  } );
  let result = await response.json();
  console.log( result )
  if ( result.loggedIn ) {
    $( '#login' ).html( `
      <button onclick="logout()">Logout</button>
    `)
    event()// render event when you login
  
  }
}



window.login = login 


async function logout () {
  console.log( 'sir, logging out?' )
  let response = await fetch( '/api/login', {
    method: 'delete'
  } );
  let result = await response.json();
  console.log( result )
  if ( !result.loggedIn ) {
    $( '#login' ).html(await init() )
  }
}

window.logout = logout


async function checkLogin () {
  const response = await fetch( '/api/login' )
  const result = await response.json()
  console.log( result )
  if ( result.loggedIn || result.email ) {
    $( '#login' ).html( `
      <button onclick="logout()">Logout</button>
    `)
    $( "#addEventbyAdmin" ).html( "" ) // remove add event when you logout

  }
}

checkLogin() // will execute on load