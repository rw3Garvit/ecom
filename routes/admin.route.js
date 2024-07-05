let express = require("express");
const { adminController } = require("../controllers");

let route = express.Router();

route.post("/register", adminController.register);
route.get("/get", adminController.getUser);
route.delete("/delete/:id", adminController.deleteAdmin);
route.put("/update/:id", adminController.updateAdmin);

module.exports = route;
