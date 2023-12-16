export default async function clubHtml() {





  
   let tr =""
  const club = await getClub();
  console.log(club);
  if (club) {
    for(const a in club) {
          tr += ` <tr>
            <td></td>
            <td>${club[a].name}</td>
            <td>${club[a].description}</td>
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
    const response = await fetch("api/admclub", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: clubName, description:clubDescrip  })
    })
    const result = await response.json()

    if (result.clubUpdated) {
      alert(`${clubName.trim()} was added`)
      $("[name=clubDescrip]").val("")
       location.reload();
    }
  } else {
    alert("Du måste skriva något!")
  }
}
window.addClub = addClub

async function deleteClub(clubId) {
  
  const response = await fetch(`api/admclub/${clubId}`, { method: "delete" })
  const result = await response.json()
  console.log("delete club - ", result);

  if (result.message === "Club deleted successfully") {
    alert('Club was deleted')
     location.reload();
  } else {
    alert(result.message)
  }
}
window.deleteClub = deleteClub

async function updateClub(clubId) {
  
  const club = await fetch(`api/admclub/${clubId}`)

  const data = await club.json()
  
  console.log("dataADmin",data)
   $("main").html(await `<div class="container mt-5">
  <div class="row">
    <div class="col-md-5 offset-md-3 card bg-dark">
      <div class="card-body">
        <form onsubmit="editClub(${clubId}); return false">
          <input
            type="text"
            name="clubName"
            value="${data[0].name}"
            placeholder="Name"
            class="form-control mb-3"
            autofocus
          />
          <input
            type="text"
            name="clubDescription"
            value="${data[0].description}"
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
  
  const clubName = $("[name=clubName]").val().trim()
  const clubDescription = $("[name=clubDescription]").val().trim()
  if (clubName.length > 0 && clubDescription.length) {
     const response = await fetch(`api/admclub/${clubId}`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: clubName ,description: clubDescription })
    })
    const result = await response.json()

    if (result.clubUpdated) {
      alert(`${clubName} was updated`)
       location.reload();
    }
  } else {
    alert("Du måste skriva något!")
  }

 
}
window.editClub = editClub
window.updateClub = updateClub
 

async function getClub() {
    const response = await fetch("/api/admclub")
  const data = await response.json()
    return data;
}









