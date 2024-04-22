const express = require("express");
const burger_router = express.Router();
const {
  GetAllProducts,
  NewProduct,
} = require("../controllers/burger.controller");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

burger_router.get("/", GetAllProducts);
burger_router.post("/", upload.single("pimg"), NewProduct);

module.exports = burger_router;
