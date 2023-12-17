export default async function wildClubHtml() {
  const response = await fetch('/api/club/Wild Club');
  const clubData = await response.json();

  const newCSS = document.createElement('link');
  newCSS.rel = 'stylesheet';
  newCSS.href = 'client/pages/wild.css';

  // Get the head element of the document
  const headElement = document.head;

  // Get the existing CSS link you want to replace
  const css = document.querySelector('link[href="client/stylesheet/style.css"]');

  if (css) {
    headElement.removeChild(css); // Remove the existing link
  }

  headElement.appendChild(newCSS); // Add the new CSS link to the head of the document

  // Render the page
  const eventsHtml = clubData.map(eventData => createEventHTML(eventData)).join('');

  return `
<head>
      <!-- Add the Google Fonts link -->
      <link href="https://fonts.googleapis.com/css2?family=Rubik+Broken+Fax&display=swap" rel="stylesheet">
    </head>
    <body>
      <header class="headss" style="font-family: 'Rubik Broken Fax', sans-serif;">
        <h1>Wild&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Club</h1>
        <!-- Navigation remains the same -->
      </header>

    <section class="rubrik" id="rubrik">
      <div class="rubrik-content">
        <div class="inner-contenttt">
          <h3>Welcome to Wild Club - Where the Fun Never Ends!</h3>
          <h2> Get ready for an extraordinary experience at Wild Club! We're all about non-stop fun, incredible music, and a vibe that'll leave you buzzing. Imagine lively beats, cool themes, and an atmosphere that's just pure joy. Wild Club isn't just a place; it's where amazing nights and awesome memories are made. Come, be part of the excitement, and let's make every visit a wild adventure you won't forget!</h2>
        </div>
        
        <div class="inner-contenttt-img">
          <img src="./img/wildpicc.jpg" alt="img">
          <h1>A video from the wild club!</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/V9H0F0pfLNM?si=N0LULc1p4BNepi0U" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section id="eventDisplayy" class="eventss">
      <!-- Render events here dynamically using the clubData -->
      ${eventsHtml}
    </section>
  `;
}

// Fetch club data dynamically from your backend API
async function fetchClubData() {
  const response = await fetch("/api/club/Wild Club");
  const data = await response.json();
  return data;
}

// Function to create HTML for each event
function createEventHTML(eventData) {
  // Customize this part based on your event data structure
  return `
    <div class="event">
      <h2>${eventData.eventName}</h2>
      <p>${eventData.eventDescription}</p>
      <p>Time: ${eventData.date}</p>
      <p>Address: ${eventData.address}</p>
      <p>Price: ${eventData.price}</p>
      <img src="${eventData.images}" alt="Event Images">
      <button class="btn book-button-event" data-event-id="${eventData.idEvent}">Book Now</button>
    </div>
  `;
}
