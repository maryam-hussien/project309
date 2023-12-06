const User = require("../models/userModel")
const generateToken = require("../controllers/UserController")
const Item = require("../models/itemModel")
const Review = require("../models/reviewsModel")

const addReview = async( req , res) => {
  try{
    const {comment , rating} = req.body
    const userr  = await User.findById(req.user.id)
    const id = req.params.id
    const product = await Item.findById(id)
    if (!userr) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
     }
     if(!product){
       return res.status(404).send({
         success: false,
         message: "product not found",
       });
     }
     if( !comment && !rating ){
      return res.status(400).send({
        success: false,
        message: "enter required data",
      });
    }
    const review = await Review.create({
      user: req.user.id,
      product:product.id,
      comment ,
      rating
    })
    if (review){
      return res.status(201).json(review)
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
}



module.exports = {
addReview
}