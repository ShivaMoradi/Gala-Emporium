export default function (server, db) {

  server.get('/api/admevent', async (req, res) => {
     const club = await db.query("SELECT * FROM events")
    // console.log(club)
    res.json(club)
  })


  server.get('/api/admevent/:id', async (req, res) => {//clubName 
    console.log("Entro aqui dime")
    const club = await db.query("SELECT * FROM events WHERE clubId = ?",[req.params.id])
    res.json(club)
    console.log("Result - ", club);
  })

  server.post('/api/admclub', async (req, res) => {
      if (req.body.name.trim().length > 0) {
      const result = await db.query("INSERT INTO events (name, description) VALUES (?,?)", [req.body.name, req.body.description])
      result.clubUpdated = true
      res.json(result)
      console.log("Result - ", result);
    } else {
      res.status(401)
      res.json({ clubUpdated: false })
    }

    /*if (req.body.name.trim().length > 0) {
      const result = await db.query("INSERT INTO clubEvents (event_name, event_description, event_date, event_address, event_price, club_name, club_description) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.event_name, req.body.event_description, req.body.event_date, req.body.event_address, req.body.event_price, req.body.club_name, req.body.club_description])
      result.clubAdded = true
      res.json(result)
      console.log("Result - ", result);
    } else {
      res.status(401)
      res.json({ clubAdded: false })
    }*/
  })


  server.put('/api/admevent/:eventId', async (req, res) => {
  console.log("Editar")
    if (req.body.eventName.trim().length > 0) {
    console.log("Entro")
    console.log(req.body)
    console.log(req.body.eventDescription)
    console.log(req.params.clubId)
    
      const result = await db.query("UPDATE events SET name = ?, eventDescription = ?, date = ?,address = ?, price = ?, clubId = ?, images = ? WHERE id = ?;", [req.body.eventName, req.body.eventDescription,req.body.date,req.body.address,req.body.price,req.body.clubId,req.body.picture,req.params.eventId])
      result.editEventUpdated = true
      res.json(result)
      console.log("Result - ", result);
    } else {
      res.status(401)
      res.json({ editEventUpdated: false })
    }
})
  



  server.delete('/api/admevent/:id', async (req, res) => {
    console.log("Entro en delete")
    console.log([req.params.id])
    const result = await db.query("DELETE FROM events WHERE id = ?;", [req.params.id]);
    if (result.affectedRows > 0) {
      res.json({ message: "Event deleted successfully" })
    } else {
      res.status(401)
      res.json({ message: "Event was deleted" })
    }
  })
  
 
//DELETE events, club FROM events JOIN club ON events.clubId = club.id WHERE club.id = ?;

}

