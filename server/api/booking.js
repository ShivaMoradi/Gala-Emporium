export default function (server, db) {
  // Hämta bokningar för ett specifikt evenemang
  server.get('/api/booking/:eventsId', async (req, res) => {
    try {
      const { eventsId } = req.params;

      // Hämta bokningar för det angivna evenemanget
      const booking = await db.query("SELECT * FROM booking WHERE eventsID = ?", [eventsId]);

      res.json(booking);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Lägg till en ny bokning
  server.post('/api/booking', async (req, res) => {
    try {
      const { eventsID, userEmail } = req.body;

      // Generera ett slumpmässigt ordernummer
      const orderNr = Math.floor(Math.random() * 1000000) + 1;

      // Infoga bokningen i 'bookings'-tabellen
      console.log('Inserting into booking:', userEmail, orderNr, eventsID);
      const resultBooking = await db.query(
        "INSERT INTO booking (userEmail, orderNr, eventsID) VALUES ( ?, ?, ?)",
        [userEmail, orderNr, eventsID]
      );


      // Kombinera resultat och svara
      const result = {
        bookingSuccess: true,
        orderNr: orderNr,
        // Inkludera andra egenskaper om det behövs
      };

      res.json(result);
      console.log("Result - ", result);
    } catch (error) {
      console.error('Error booking event:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Ta bort en bokning
  server.delete('/api/booking/:bookingId', async (req, res) => {
    try {
      const { bookingId } = req.params;

      // Ta bort bokningen från 'bookings'-tabellen
      await db.query("DELETE FROM booking WHERE id = ?", [bookingId]);

      // Svara med framgång
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting booking:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}
