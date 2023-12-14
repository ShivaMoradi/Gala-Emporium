export default function (server, db) {

  server.get('/api/admclub', async (req, res) => {
     const club = await db.query("SELECT * FROM club")
    // console.log(club)
    res.json(club)
  })


  server.get('/api/admclub/:id', async (req, res) => {//clubName 
    const club = await db.query("SELECT * FROM club WHERE id = ?",[req.params.id])
    res.json(club)
  })

  server.post('/api/admclub', async (req, res) => {
      if (req.body.name.trim().length > 0) {
      const result = await db.query("INSERT INTO club (name, description) VALUES (?,?)", [req.body.name, req.body.description])
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


  server.put('/api/admclub/:clubId', async (req, res) => {
  console.log("Editar")
    if (req.body.name.trim().length > 0) {
    console.log("Entro")
    console.log(req.body.name)
    console.log(req.body.description)
    console.log(req.params.clubId)
    
      const result = await db.query("UPDATE club SET name = ?, description = ? WHERE id = ?;", [req.body.name, req.body.description,req.params.clubId])
      result.clubUpdated = true
      res.json(result)
      console.log("Result - ", result);
    } else {
      res.status(401)
      res.json({ clubUpdated: false })
    }
})
  



  server.delete('/api/admclub/:id', async (req, res) => {
    console.log("Entro en delete")
    console.log([req.params.id])
    const result = await db.query(" DELETE club, events FROM club LEFT JOIN events ON club.id = events.clubId WHERE club.id = ?;; ", [req.params.id]);
    if (result.affectedRows > 0) {
      res.json({ message: "club deleted successfully" })
    } else {
      res.status(401)
      res.json({ message: "No club was deleted" })
    }
  })
  
 
//DELETE events, club FROM events JOIN club ON events.clubId = club.id WHERE club.id = ?;

}

