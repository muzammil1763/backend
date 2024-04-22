const express = require("express");
const login_router = express.Router();
const { Login } = require("../controllers/login.controller");

login_router.post("/", Login);

module.exports = login_router;
