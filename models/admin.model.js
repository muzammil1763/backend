const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      }
    }
  ],
});



adminSchema.pre('save',async function (next){
  
   if(this.isModified('password'))
   {
    this.password=await bcrypt.hash(this.password,12);
    console.log("abc");
   }
   next();
});

adminSchema.methods.generateAuthToken= async function(){
  try {
    
    let token= jwt.sign({_id:this._id},process.env.KEY);
    this.tokens=this.tokens.concat({token:token});
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
}

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;

