// add REST API:s

import club from "./api/club.js";
import login from "./api/login.js";
import booking from "./api/booking.js";
import admclub from "./api/admclub.js";
export default function (server, db) {
  // connect rest api:s to web server and database
  club(server, db)
  login(server, db)
  booking(server, db)
  admclub(server, db)

}

