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

  server.post('/api/club/add-club', async (req, res) => {
    try {
      const { name, description, adminId } = req.body;

      // Validate required fields
      if (!name || name.trim().length === 0 || !adminId) {
        res.status(400).json({ error: 'Club name and admin ID are required' });
        return;
      }

      // Insert the club into the 'club' table
      const resultClub = await db.query("INSERT INTO club (name, description, admin_id) VALUES (?, ?, ?)", [name, description, adminId]);

      // Include additional checks if needed for the 'club' table

      // Combine results and respond
      const result = {
        clubAdded: true,
        // Include other properties if needed
      };

      res.json(result);
      console.log("Result - ", result);
    } catch (error) {
      console.error('Error adding club:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  server.put('/api/club/:clubName', (req, res) => {
    // Add your update logic here
  });

  server.delete('/api/club/:clubName', (req, res) => {
    // Add your delete logic here
  });
}
