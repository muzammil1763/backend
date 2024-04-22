const user = require("../models/admin.model");

const NewAdmin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;


  const newAdmin = new user({
    username,
    password,
  });
  await newAdmin.save();
};

module.exports = { NewAdmin };
