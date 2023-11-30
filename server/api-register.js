// add REST API:s

import books from "./api/club.js";


export default function (server, db) {
  // connect rest api:s to web server and database
  books(server, db)

}