const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
