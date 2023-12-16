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
  })


  server.put('/api/admclub/:clubId', async (req, res) => {
 
    if (req.body.name.trim().length > 0) {
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
    const result = await db.query(" DELETE FROM club WHERE id = ?;", [req.params.id]);
    if (result.affectedRows > 0) {
      res.json({ message: "club deleted successfully" })
    } else {
      res.status(401)
      res.json({ message: "Club not was deleted" })
    }
  })

}

