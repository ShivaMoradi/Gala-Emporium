export default async function clubHtml() {
   let tr =""
  const club = await clubData();
  console.log(club);
  if (club) {
    for(const a in club) {
          tr += ` <tr>
            <td></td>
            <td>${club[a].clubName}</td>
            <td>${club[a].clubDescrip}</td>
            <td class="d-flex gap-2">
               <button id="delete" onclick="updateClub(${club[a].id})">Update</button>
              <button id="delete" onclick="deleteClub(${club[a].id})">Delete</button>
            </td>
    </tr>
  `
   
   }
  }



  return `
  <div class="container mt-5">
  <div class="row">
    <div class="col-md-7">
      <table class="table table-dark table-bordered table-hover">
        <thead>
          <tr>
            <td>Name</td>
            <td>Address</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tbody>
            ${tr}
         </tbody>
        </tbody>
      </table>
    </div>
    <div class="col-md-5">
      <div class="card-body">
        <form onsubmit="addClub(); return false" >
          <input
            type="text"
            name="clubName"
            placeholder="Club Name"
            class="form-control mb-2"
            autofocus
          />
          <input
            type="text"
            name="clubDescrip"
            placeholder="Description"
            class="form-control mb-2"
          />

            <input id="submit" type="submit" value="Add Club">
        </form>
      </div>
    </div>
  </div>
</div>
     
  `


}

async function addClub() {
  const clubName = $("[ name=clubName]").val()
  const clubDescrip = $("[name=clubDescrip]").val()
  console.log(clubName)

  if (clubName.trim().length > 0 && clubDescrip.trim().length > 0) {
    const response = await fetch("api/club", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: clubName, description:clubDescrip  })
    })
    const result = await response.json()

    if (result.clubUpdated) {
      alert(`${clubName.trim()} was added`)
      $("[name=bookName]").val("")
    }
  } else {
    alert("Du måste skriva något!")
  }
}
window.addClub = addClub

async function deleteClub(clubId) {
  console.log(clubId)
  const response = await fetch(`api/club/${clubId}`, { method: "delete" })
  const result = await response.json()
  console.log("delete club - ", result);

  if (result.message === "Club deleted successfully") {
    alert(result.message)
  } else {
    alert(result.message)
  }
}
window.deleteClub = deleteClub

async function updateClub(clubId) {
   
   $("main").html(await `<div class="container mt-5">
  <div class="row">
    <div class="col-md-5 offset-md-3 card bg-dark">
      <div class="card-body">
        <form onsubmit="editClub(${clubId}); return false">
          <input
            type="text"
            name="clubName"
            value=""
            placeholder="Name"
            class="form-control mb-3"
            autofocus
          />
          <input
            type="text"
            name="clubDescription"
            value=""
            placeholder="Description"
            class="form-control mb-3"
          />
          <button type="submit" class="btn btn-primary">save customer</button>
        </form>
      </div>
    </div>
  </div>
</div>`)
}
async function editClub(clubId) {
  console.log("Id de club -", clubId)
  const clubName = $("[name=clubName]").val().trim()
  const clubDescription = $("[name=clubDescription]").val().trim()
  if (clubName.length > 0 && clubDescription.length) {
     const response = await fetch(`api/club/${clubId}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: clubName ,description: clubDescription })
    })
    const result = await response.json()

    if (result.bookUpdated) {
      alert(`${bookName} was updated`)
      $("h1").html(`Edit Page for: ${bookId} - ${bookName}`)
      $("[name=bookName]").html(`${bookName}`)
    }
  } else {
    alert("Du måste skriva något!")
  }

 
}
window.editClub = editClub
window.updateClub = updateClub
async function clubData() {
  const clubData = await getClubEvents();
  const club = {};
for (const evento of clubData) {
  club[evento.clubName] = {
      id: evento.id,
      clubName: evento.clubName,
      clubDescrip: evento.clubDescription,
    };
  }
    // Puedes incluir más propiedades del evento si es necesario
  
 return club
}
 

async function getClubEvents() {
    const response = await fetch("/api/club")
    const data = await response.json()
    return data;
}









