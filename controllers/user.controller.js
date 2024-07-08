const { userService } = require("../services");

let register = async (req, res) => {
  let body = req.body;

  let result = await userService.register(body);

  res.status(201).json({
    message: "user creatred success",
    result,
  });
};

module.exports = { register };
