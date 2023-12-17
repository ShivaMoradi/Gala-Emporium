import express from 'express'
import mysql from 'mysql'
import session from 'express-session'
import { promisify } from 'util'
// rest apis
import apiRegister from './api-register.js'
import club from './api/club.js'
import login from './api/login.js'
import booking from './api/booking.js'
import admclub from "./api/admclub.js";
import admevent from './api/admevent.js'


const server = express()
const port = 3000

// Express now includes a built-in JSON body parser
server.use(express.json())

// Configure Express to use sessions
server.use(session({
  secret: 'keyboard_cat',
  resave: false,
  saveUninitialized: false
}))

// Configure MySQL connection
const db = mysql.createConnection({
  //db-19
host: '161.97.144.27',
port: '8019',
user: 'root',
password: 'swiftgiraffegallops',
database: 'galaEmporia'


/*Linus server
host: '161.97.144.27',
  port: '8015',
  user: 'root',
  password: 'jazzydogsjiving',
  database: 'bookstore'
*/


})

// Promisify the query method
db.query = promisify(db.query).bind(db);

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err)
    return
  }
  console.log('Connected to MySQL database')

  // serve static client directory
  server.use(express.static("../client"));
  //server.use(express.static("./client/styles"));
  
  

  // connect to API:s
  apiRegister(server, db)
  club(server, db)
  login(server, db)
  booking(server, db)
  admclub(server, db)
  admevent(server, db)


  // Start the server
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })

})

