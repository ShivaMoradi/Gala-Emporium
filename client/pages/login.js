function login () {
  const email = document.getElementById( 'email' ).value;
  const password = document.getElementById( 'password' ).value;

  // En enkel kontroll av inloggningen (inte säker för produktion)
  if ( email === 'email address' && password === 'your password' ) {
    // Visa evenemangsinformationen efter inloggning
    document.getElementById( 'loginForm' ).style.display = 'none';
    document.getElementById( 'eventDisplay' ).style.display = 'block';
  } else {
    alert( 'wrong email or password, try again!' );
  }
}
