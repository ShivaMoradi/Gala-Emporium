export default function (server, db) {

  server.get('/api/club', async (req, res) => {
    const events = await db.query("SELECT * FROM event_club ")
    console.log(club)
    res.json(events)
  })

  server.post('/api/club', async (req, res) => {
    if (req.body.name.trim().length > 0) {
      ("INSERT INTO event_club (event_name, event_description, event_date, event_address, event_price, club_name, club_description) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.event_name, req.body.event_description, req.body.event_date, req.body.event_address, req.body.event_price, req.body.club_name, req.body.club_description])
      result.eventAdded = true
      res.json(result)
      console.log("Result - ", result);
    } else {
      res.status(401)
      res.json({ bookAdded: false })
    }
  })

  server.put('/api/club/:id', (req, res) => {
  })

  server.delete('/api/club/:id', (req, res) => {
  })

}