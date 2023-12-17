export default async function bookClub() {
  const response = await fetch('/api/club/Book Club');
  const clubData = await response.json();

  const newCSS = document.createElement('link');
  newCSS.rel = 'stylesheet';
  newCSS.href = 'client/pages/bookClubStyle.css';

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

    <body id ="backgroundDisplay" class= "bbackground">
      <header class="my-page">
        <div class ="content-space">
        <div class= "text-background">
        <h1>Welcome to Book Club</h1>
        <h2> Are you an avid reader with a passion for exploring new literary worlds and engaging in thought-provoking discussions? Look no further! Our Book Club is a haven for bibliophiles who delight in the magic of words, the allure of well-crafted stories, and the joy of sharing their reading adventures with fellow book enthusiasts.</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QZTDZFtbrec?si=nRlX8aOf2w7PPVBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
</div>
      </div>
      <div>
       <section id="eventDisplayy" class="allevents">
      <!-- Render events here dynamically using the clubData -->
      ${eventsHtml}
    </section>
</div>
      </header>

   
  `;
}

// Fetch club data dynamically from your backend API
async function fetchClubData() {
  const response = await fetch("/api/club/Book Club");
  const data = await response.json();
  return data;
}

// Function to create HTML for each event
function createEventHTML(eventData) {
  // Customize this part based on your event data structure
  return `
    <div class="events" >
      <h2>${eventData.eventName}</h2>
      <p>${eventData.eventDescription}</p>
      <p>Time: ${eventData.date}</p>
      <p>Address: ${eventData.address}</p>
      <p>Price: ${eventData.price} Kr</p>
      <img src="${eventData.images}" alt="Event Images">
      <button class="btn book-button-event" data-event-id="${eventData.idEvent}">Book Now</button>
    </div>
  `;
}
