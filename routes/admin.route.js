const express = require("express");
const admin_router = express.Router();
const { NewAdmin } = require("../controllers/admin.controller");

admin_router.post("/",NewAdmin );

module.exports = admin_router;
