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
    try {
      const { eventName, eventDescription, eventDate, eventAddress, eventPrice, clubId, eventImages } = req.body;

      // Validate required fields
      if (!eventName || eventName.trim().length === 0) {
        res.status(400).json({ error: 'Event name is required' });
        return;
      }

      // Insert the event into the 'events' table
      const resultEvents = await db.query("INSERT INTO events (eventName, eventDescription, date, address, price, clubId, images) VALUES (?, ?, ?, ?, ?, ?, ?)", [eventName, eventDescription, eventDate, eventAddress, eventPrice, clubId, eventImages]);

      // Include additional checks if needed for the 'events' table

      // Combine results and respond
      const result = {
        eventAdded: true,
        // Include other properties if needed
      };

      res.json(result);
      console.log("Result - ", result);
    } catch (error) {
      console.error('Error adding event:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
 
  server.put('/api/club/:id', (req, res) => {
  })
 
  server.delete('/api/club/:id', (req, res) => {
  })
 
}