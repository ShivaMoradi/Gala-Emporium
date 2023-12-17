export default async function wildClubHtml() {
  const newCSS = document.createElement('link');
  newCSS.rel = 'stylesheet';
  newCSS.href = 'client\pages\dance.css';

  // Get the head element of the document
  const headElement = document.head;

  // Get the existing CSS link you want to replace
  const css = document.querySelector('link[href="client\stylesheet\style.css"]');

  if (css) {
    headElement.removeChild(css); // Remove the existing link
  }

  headElement.appendChild(newCSS); // Add the new CSS link to the head of the document
  
  // You can fetch club data dynamically from your API
  const clubData = await fetchClubData();

  // Render the page
  return `
    <header class="head">
      <h1>Wild&nbsp;<i class="fas fa-pizza-slice"></i>&nbsp;Club</h1>
      <!-- Navigation remains the same -->
    </header>

    <section class="home" id="home">
      <div class="home-content">
        <div class="inner-content">
          <h3>Welcome to Wild Club - Where the wildest events happens yiihaa!</h3>
        </div>
        
        <div class="inner-content-img">
          <img src="./img/wildpicc.jpg" alt="img">
           <h2>A video from the wild club!</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/V9H0F0pfLNM?si=N0LULc1p4BNepi0U" frameborder="0" allowfullscreen></iframe>


      </div>
    </section>

    <section class="about" id="about">
      <h4>About Wild Club</h4>
      <div class="about-sec">
        <div class="about-content">
          <h3>${clubData.name}</h3>
          <p>${clubData.description}</p>
        </div>
      </div>
    </section>
    
  `;
}

// Fetch club data dynamically from your backend API
async function fetchClubData() {
  const response = await fetch("/api/club");
  const data = await response.json();
  return data;
}
