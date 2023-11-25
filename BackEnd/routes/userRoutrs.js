const router = require("express").Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")
const bycrpt = require("bcryptjs")

router.post("/register", async (req, res) => {
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
      profilePicture
    })
     if (user){
      res.status(201).send({
        success: true,
        message: "User created successfully",
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
});

router.post("/login", async (req, res) => {
  try {
    const { name , email , password } = req.body
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
});

module.exports = router;
