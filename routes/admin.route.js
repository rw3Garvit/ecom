let express = require("express");
const { adminController } = require("../controllers");
const validate = require("../middleware/validate");
const { adminValidation } = require("../validations");
const upload = require("../middleware/upload");

let route = express.Router();

route.post(
  "/register",
  upload.single('profile'),
  // validate(adminValidation.admin),
  adminController.register
);
route.get("/get", adminController.getUser);
route.delete("/delete/:id", adminController.deleteAdmin);
route.put(
  "/update/:id",
  validate(adminValidation.admin),
  adminController.updateAdmin
);

module.exports = route;
