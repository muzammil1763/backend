const Burger = require("../models/burger.model");

const GetAllProducts = async (req, res) => {
  Burger.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const NewProduct = async (req, res) => {
  const pname = req.body.pname;
  const pprice = req.body.pprice;
  const price = 0;
  const pdisc = req.body.pdisc;
  const filepath = req.file.filename;

  const newProduct = new Burger({
    pname,
    pprice,
    price,
    pdisc,
    filepath,
  });
  await newProduct.save();
  
};

module.exports = { GetAllProducts, NewProduct };
