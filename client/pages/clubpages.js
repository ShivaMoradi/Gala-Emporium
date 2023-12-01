

const clubs = [
  { name: "Blue Club", id: "blue-club" },
  { name: "Rock Club", id: "rock-club" },
];

// navigationslänkar för varje klubb
function generateClubNavigation() {
  let navigationHTML = '';
  clubs.forEach(club => {
    navigationHTML += `<a href="#${club.id}" class="club-link">${club.name}</a> `;
  });
  document.getElementById('club-navigation').innerHTML = navigationHTML;
}

$(document).ready(function () {
  generateClubNavigation();
});

function displayImage() {
    const imageUrl = './images/blue club jazz.jpg'

    const imageElement = document.createElement('img')
    imageElement.src = imageUrl
    imageElement.alt = 'Blue Club Jazz'
    const imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(imageElement)
}

displayImage();

