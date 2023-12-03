// add REST API:s

import club from "./api/club.js";


export default function (server, db) {
  // connect rest api:s to web server and database
  club (server, db)

}