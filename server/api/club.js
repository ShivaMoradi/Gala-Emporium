export default function (server, db) {
  
  server.get('/api/club', async (req, res) => {
    try {
      const club = await db.query("SELECT * FROM clubEvents ");
      console.log(club);
      res.json(club);
    } catch (error) {
      console.error('Error fetching club data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  server.get('/api/club/:clubName', async (req, res) => {
    try {
      const club = await db.query("SELECT * FROM clubEvents WHERE clubName = ?", [req.params.clubName]);
      console.log(club);
      res.json(club);
    } catch (error) {
      console.error('Error fetching club data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  server.post('/api/club', async (req, res) => {
    try {
      if (req.body.eventName.trim().length > 0) {
        const result = await db.query("INSERT INTO clubEvents (eventName, eventDescription, date, address, price, clubName, clubDescription) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.eventName, req.body.eventDescription, req.body.date, req.body.address, req.body.price, req.body.clubName, req.body.clubDescription]);
        result.clubAdded = true;
        res.json(result);
        console.log("Result - ", result);
      } else {
        res.status(400).json({ error: 'Event name is required' });
      }
    } catch (error) {
      console.error('Error adding club event:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  server.put('/api/club/:id', (req, res) => {
    // Add your update logic here
  });

  server.delete('/api/club/:id', (req, res) => {
    // Add your delete logic here
  });
}
