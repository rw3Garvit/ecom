let getUser = (req, res) => {
  res.status(200).json({
    message: "user get success",
  });
};

let register = (req, res) => {
  res.status(201).json({
    message: "user post success",
  });
};

module.exports = { getUser, register };
