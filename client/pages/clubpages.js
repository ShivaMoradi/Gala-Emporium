function displayImage() {
  const imageUrl = '../images/coverimg.jpg'; // Hårdkodad sökväg till cover-bild

  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.alt = altText;
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = ''; 
  imageContainer.appendChild(imageElement);
}

displayImage();


const clubs = [
  { name: "Blue Club", id: "blue-club", description: "The main description of the Blue Club...", imageUrl: '../images/blue club jazz.jpg' },
  { name: "Rock Club", id: "rock-club", description: "The main description of the Rock Club...", imageUrl: '../images/rock-club-rock.jpg' },
  // Lägg till fler klubbar här...
];


function clubpages() {
  let clubsHTML = clubs.map(club => {
    return `
      <div class='club'>
        <h3>${club.name}</h3>
        <p>${club.description}</p>
        <button class="show-events-btn" data-club="${club.name}">Show Events</button>
      </div>
    `;
  }).join('');
  $('#club-list').html(clubsHTML);
}

$(document).on('click', '.show-events-btn', function () {
  const clubName = $(this).data('club');
  const selectedClub = clubs.find(club => club.name === clubName);
  if (selectedClub) {
    displayImage(selectedClub.imageUrl, selectedClub.name); // Bild på klubben
    displayEventsForClub(clubName);
  }
});


// Exportera clubpages, vi använder ES6-moduler?
export { clubpages };

  
  
