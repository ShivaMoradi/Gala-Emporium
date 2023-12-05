export default function (server, db) {
  server.get('/api/club', async (req, res) => {
    const events = await db.query("select * from club join events on club.id = events.clubId")
    res.json(events)
  })

  server.post('/api/club', async (req, res) => {
    if (req.body.name.trim().length > 0) {
      const result = await db.query("INSERT INTO events(klubb_name, title, description, date, price) VALUES (?)", [req.body.klubb_name, title, description, date, price])
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