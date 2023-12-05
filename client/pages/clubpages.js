export default function clubpages(){
  return `
  <div id="clubPage">
  <header>
      <h1>Club title</h1>
  </header>

  <section id="clubBody">
      <div id="mediaContainer"> 
          <p> Video and images goes here</p>       
          <!---VIDEO AND IMAGES GO HERE-->
      </div>
      
      <article id="clubDescription">
          <p>Club Description goes here</p>
          <!-- CLUB DESRIPTION GOES HERE  -->
      </article>

      <section id="event-list">
          <p>Club specific events goes here</p>
          <!---EVENTS GOES HERE-->
      </section>
  </section>
</div>
  `
}


// function displayImage() {
//   const imageUrl = '../images/coverimg.jpg'; // Hårdkodad sökväg till cover-bild

//   const imageElement = document.createElement('img');
//   imageElement.src = imageUrl;
//   imageElement.alt = altText;
//   const imageContainer = document.getElementById('image-container');
//   imageContainer.innerHTML = ''; 
//   imageContainer.appendChild(imageElement);
// }

// displayImage();


// const clubs = [
//   { name: "Blue Club", id: "blue-club", description: "The main description of the Blue Club...", imageUrl: '../images/blue club jazz.jpg' },
//   { name: "Rock Club", id: "rock-club", description: "The main description of the Rock Club...", imageUrl: '../images/rock-club-rock.jpg' },
//   // Lägg till fler klubbar här...
// ];


// function clubpages() {
//   let clubsHTML = clubs.map(club => {
//     return `
//       <div class='club'>
//         <h3>${club.name}</h3>
//         <p>${club.description}</p>
//         <button class="show-events-btn" data-club="${club.name}">Show Events</button>
//       </div>
//     `;
//   }).join('');
//   $('#club-list').html(clubsHTML);
// }

// $(document).on('click', '.show-events-btn', function () {
//   const clubName = $(this).data('club');
//   const selectedClub = clubs.find(club => club.name === clubName);
//   if (selectedClub) {
//     displayImage(selectedClub.imageUrl, selectedClub.name); // Bild på klubben
//     displayEventsForClub(clubName);
//   }
// });


// // Exportera clubpages, vi använder ES6-moduler?
// export { clubpages };

  
  
