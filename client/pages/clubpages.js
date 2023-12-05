export default async function clubpages() {
  const clubData = await getclubs();
  console.log(clubData);

  return `
    < div id = "clubPage" >
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
</div >
  
  `;
}

async function getclubs() {
  const response = await fetch("/api/club")
  const data = await response.json()
  return data;
}