async function login() {
  const email = $('[name=email]').val();
  const password = $('[name=password]').val();

  // Check if both email and password are provided
  if (!email || !password) {
    console.log('Please provide both email and password.');
    return;
  }
  const credentials = {
    email: $('[name=email]').val(),
    password: $('[name=password]').val()
  }
  $("#addEventbyAdmin").html(await event())
  console.log(credentials)

  try {
    let response = await fetch('/api/login', {
      // tell the server we want to send/create data
      method: 'post',
      // and that we will send data json formatted
      headers: { 'Content-Type': 'application/json' },
      // the data encoded as json
      body: JSON.stringify(credentials)
    });
    let result = await response.json();
    console.log(result)
    if (result.loggedIn) {
      $('#login').html(`
      <button onclick="logout()">Logout</button>
    `)
      event()// render event when you login

    }
  } catch (error) {
    console.error('Error during login:', error);
  }
}