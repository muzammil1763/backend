const mongoose = require("mongoose");

const burgerSchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  pprice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  pdisc: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
});

const Burger = mongoose.model("Burger", burgerSchema);
module.exports = Burger;
