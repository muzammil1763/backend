const user = require("../models/user.model");

const NewUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const newUser = new user({
    name,
    email,
    message,
  });
  await newUser.save();
  
};

module.exports = { NewUser };
