require("dotenv").config();
let http = require("http");
let express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes");

let app = express();

//for json body
// app.use(express.json());
app.use(bodyParser.json());

// routes;
app.use("/v1", routes);

//view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let name = "user";
  res.render("index", { name });
});

//database connection
dbConnect();

//http server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});
