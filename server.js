require("dotenv").config();
let http = require("http");
let express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");

let app = express();

//for json body
// app.use(express.json());
app.use(bodyParser.json());

//database connection
dbConnect();

//http server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});
