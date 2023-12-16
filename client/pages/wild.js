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
    <header class="head">
      <h1>Wild&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Club</h1>
      <!-- Navigation remains the same -->
    </header>

    <section class="home" id="home">
      <div class="home-content">
        <div class="inner-content">
          <h3>Welcome to Wild Club - Where the wildest events happen yiihaa!</h3>
        </div>
        
        <div class="inner-content-img">
          <img src="./img/wildpicc.jpg" alt="img">
          <h2>A video from the wild club!</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/V9H0F0pfLNM?si=N0LULc1p4BNepi0U" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <h4>About Wild Club</h4>
      <div class="about-sec">
        <div class="about-content">
          <h3>${clubData[0].name}</h3>
          <p>${clubData[0].description}</p>
        </div>
      </div>
    </section>

    <section id="eventDisplay" class="events">
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
