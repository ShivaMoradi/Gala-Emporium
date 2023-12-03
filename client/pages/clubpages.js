function displayImage() {
  const imageUrl = '../images/coverimg.jpg'
  const imageElement = document.createElement( 'img' )
  imageElement.src = imageUrl
    imageElement.alt = 'Blue Club Jazz'
    const imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(imageElement)
}

displayImage();


const clubs = [
  { name: "Blue Club", id: "blue-club" },
  { name: "Rock Club", id: "rock-club" },
]; //kan lägga till mer klubbar sen

// navigationslänkar för varje klubb
function generateClubNavigation() {
  let navigationHTML = '';
  clubs.forEach( club => {
    navigationHTML += `<a href="#" class="club-link" data-clubid="${club.id}">${club.name}</a> `;
  });
  document.getElementById('club-navigation').innerHTML = navigationHTML;
}

$(document).ready(function () {
  generateClubNavigation();

  // Eventlyssnare för klick på klubb-länkar
  $('#club-navigation').on('click', '.club-link', function (event) {
    event.preventDefault();
    const clubId = $(this).data('clubid');
    displayClubEvents(clubId);
  });
});

// Filtrera och visa evenemang baserat på vald klubb
function displayClubEvents(clubId) {
  const filteredEvents = mockEventData.filter(event => event.club.replace(" ", "-").toLowerCase() === clubId);
  displayEvents(filteredEvents);
}

