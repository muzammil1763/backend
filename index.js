const dotenv= require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database/database");
const burger_router = require("./routes/burger.route");
const user_router = require("./routes/user.route");
const admin_router = require("./routes/admin.route");
const login_router = require("./routes/login.route");


app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connection();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/api/products", burger_router);
app.use("/api/newuser", user_router);
app.use("/api/admin", admin_router);
app.use("/api/login", login_router);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
   
});
