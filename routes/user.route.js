const express = require("express");
const user_router = express.Router();
const { NewUser } = require("../controllers/user.controller");

user_router.post("/", NewUser);

module.exports = user_router;
