export default function (server, db) {

  // Login REST-API methods

  server.get('/api/login', async (req, res) => {
    // are we logged in? get logged in admin
    const admin = await db.query("SELECT * FROM admin WHERE email = ? AND password = ?", [req.session.admin?.email, req.session.admin?.password])
    if (admin[0]) {
      req.session.admin = admin[0]
      res.json({ email: admin[0].email })
    } else {
      res.status(401)
      res.json({ loggedIn: false })
    }
  })

  server.post('/api/login', async (req, res) => {
    // perform login
    const admin = await db.query("SELECT * FROM admin WHERE email = ? AND password = ?", [req.body.email, req.body.password])
    if (admin[0]) {
      req.session.admin = admin[0]
      res.json({ loggedIn: true })
    } else {
      res.status(401)
      res.json({ loggedIn: false })
    }
  })

  server.delete('/api/login', (req, res) => {
    // perform logout
    req.session.destroy();
    res.json({ loggedIn: false })
  })

}