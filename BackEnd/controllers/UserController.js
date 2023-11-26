const router = require("express").Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")
const bycrpt = require("bcryptjs")

const registerUser = async (req, res) => {
  try {
    const { name , email , password , role , profilePicture} = req.body
    if(!name || !email || !password){
      return res.status(400).send({
        success: false,
        message: "All Name , Email and  Password are required",
      });
    }
    //check if users exists
    const userExist= await User.findOne({email})
    if (userExist){
      return res.status(400).send({
        success: false,
        message: "User already existed",
      });
    }
    //hash passowrd
    const salt = await bycrpt.genSalt(10)
    const hashPassword =await bycrpt.hash(password , salt)
    //create user
    const user = await User.create({
      name,
      email,
      password:hashPassword,
      role,
      profilePicture,
    })
     if (user){
      res.status(201).send({
        success: true,
        message: "User created successfully",
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        
      });
     }
     else{
      return res.status(400).send({
        success: false,
        message: " Invalid User",
      });
     }
    
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};


const LoginUser = async (req, res) => {
  try {
    const { email , password } = req.body
    if(!email || !password){
      return res.status(400).send({
        success: false,
        message: "Both Email and Password are required",
      });
    }
    //check if users exists
    const user= await User.findOne({email})
    if (user && await bycrpt.compare(password , user.password)){
      return res.status(400).send({
        success: true,
        message: "Logged In",
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
      });
    }
   
     else{
      return res.status(400).send({
        success: false,
        message: " Invalid User",
      });
     }
    
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

//access private
const GetMe = async (req , res) => {
  const { _id , name , email , role , profilePicture} = await User.findById(req.user.id)

  res.status(400).send({
    message: "display All data",
    _id: _id,
    name,
    email,
    role,
    profilePicture
  }); 
} 


//generate jwt 
const generateToken = (id) => {
 return jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: '30d'
 })
}

const editUser = async(req , res) => {
  try{
   const userr = await User.findByIdAndUpdate(req.user.id ,req.body, {new : true})

   if(!userr){
    res.status(400).send({
      success: false,
      message: " not authorized User",
    });
   }
   res.status(400).json(userr)
  }catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
}

const deleteUser = async(req , res) => {
  try{
    const userr = await User.findByIdAndDelete(req.user.id)
    
    if(!userr){
     res.status(400).send({
       success: false,
       message: " not authorized User",
     });
    }
    res.status(201).send({
      success: true,
      message:"deleted succesfully",
    });
   }catch (error) {
     res.send({
       success: false,
       message: error.message,
     });
   }
}

const getAll =  async (req , res) => {
  try {   
   const userr  = await User.findById(req.user.id)

    if(userr.role == "admin"){
      const all = await User.find()
      res.json(all)
    }
    else{
      res.status(400).send({
        success: false,
        message: "omly admins can view all data",
      });
    }
  }catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
  }
}

module.exports = {
  registerUser,
  LoginUser,
  GetMe,
  editUser,
  deleteUser,
  getAll
};