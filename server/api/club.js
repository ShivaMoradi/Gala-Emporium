export default function (server, db) {

  server.get('/api/club', async (req, res) => {
    try {
      const club = await db.query("SELECT * FROM clubEvents");
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
      const { eventName, eventDescription, date, address, price, clubName, clubDescription } = req.body;

      // Validate required fields
      if (!eventName || eventName.trim().length === 0) {
        res.status(400).json({ error: 'Event name is required' });
        return;
      }

      // Perform additional validation for other fields
      // For example, you can check if date is a valid date, etc.

      // Insert the event into the database
      const result = await db.query("INSERT INTO clubEvents (eventName, eventDescription, date, address, price, clubName, clubDescription) VALUES (?, ?, ?, ?, ?, ?, ?)", [eventName, eventDescription, date, address, price, clubName, clubDescription]);

      // Include additional checks if needed

      result.clubAdded = true;
      res.json(result);
      console.log("Result - ", result);
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
