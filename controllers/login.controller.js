const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");


const Login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  let token;

    try {
      const adminlogin=await Admin.findOne({username:username});

      if(adminlogin)
      {
        const ismatch= await bcrypt.compare(password,adminlogin.password);
        
        token= await adminlogin.generateAuthToken();
        res.cookie("jwtoken",token,{
          expires: new Date(Date.now()+25892000000),
          httpOnly:true

        });

        if(ismatch)
        {
          res.json({ message: "Login!" });
        }
        else
        {
          res.json({ message: "Invalid" });
        }
        
      }
      else
      {
        res.json({ message: "Invalid" });
      }
      
    } catch (error) {
      console.log(error);
    }
};

module.exports = { Login };
