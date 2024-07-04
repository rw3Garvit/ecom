const { adminService } = require("../services");

let getUser = async (req, res) => {
  try {
    let result = await adminService.getAllAdmin();
    console.log(result);
    res.status(200).json({
      message: "admin get success",
      result,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

let register = async (req, res) => {
  try {
    console.log(req.body);

    let body = req.body;

    let duplicate = await adminService.findAdminByEmail(body.email);

    if (duplicate) {
      throw new Error("admin already regsiterd");
    }

    let admin = await adminService.register(body);

    console.log(admin, "admin result");

    res.status(201).json({
      message: "admin created successfully",
      admin,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUser, register };
