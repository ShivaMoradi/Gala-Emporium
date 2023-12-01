<<<<<<< HEAD
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
=======
//test this shit
>>>>>>> 907ea410195fa1fae46d0511f7474e60f0254773
