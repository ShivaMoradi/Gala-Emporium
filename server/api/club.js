export default function (server, db) {

  server.get('/api/club', async (req, res) => {
    const club = await db.query("SELECT * FROM clubEvents ")
    console.log(club)
    res.json(club)
  })

  server.get('/api/club/:clubName', async (req, res) => {//clubName
    const club = await db.query("SELECT * FROM clubEvents WHERE clubName = ?", [req.params.clubName])
    console.log(club)
    res.json(club)
  })

  server.post('/api/club', async (req, res) => {
    if (req.body.name.trim().length > 0) {
      const result = await db.query("INSERT INTO clubEvents (eventName, eventDescription, date, address, price, clubName, clubDescription) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.eventName, req.body.eventDescription, req.body.date, req.body.address, req.body.price, req.body.clubName, req.body.clubDescription])
      result.clubAdded = true
      res.json(result)
      console.log("Result - ", result);
    } else {
      res.status(401)
      res.json({ clubAdded: false })
    }
  })

  server.put('/api/club/:id', (req, res) => {
  })

  server.delete('/api/club/:id', (req, res) => {
  })

}