const { adminSchema } = require("../models");

let register = (body) => {
  //   console.log(body, "from sertvice");

  return adminSchema.create(body);
};

let getAllAdmin = () => {
  return adminSchema.find();
};

let findAdminByEmail = (email) => {
  return adminSchema.findOne({ email });
};

module.exports = { register, getAllAdmin, findAdminByEmail };
