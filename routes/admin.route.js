let express = require("express");
const { adminController } = require("../controllers");

let route = express.Router();

route.post("/register", adminController.register);
route.get("/get", adminController.getUser);

module.exports = route;
