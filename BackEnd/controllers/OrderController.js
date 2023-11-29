const Order = require("../models/orderModel")
const User = require("../models/userModel")
const generateToken = require("../controllers/UserController")
const Item = require("../models/itemModel")

const getAll = async (req , res ) => {
  try {   
    const userr  = await User.findById(req.user.id)
     if(userr){
       const all = await Order.find()
       res.status(200).json(all)
     }
     else{
       res.status(403).send({
         success: false,
         message: "only users can view all orders",
       });
     }
   }catch (error) {
       res.send({
         success: false,
         message: error.message,
       });
   }
}

const addOrder = async(req , res) => {
  try {
    const userr  = await User.findById(req.user.id)
    const id = req.params.id
    const product = await Item.findById(id)
    const { shippingAddress1 ,city ,phone , country} = req.body
   if (!userr) {
    return res.status(404).json({
      success: false,
      message: 'User not found.',
    });
   }
   if(!product){
     res.status(404).send({
       success: false,
       message: "product not found",
     });
   }
    if( !shippingAddress1 || !city || !phone || !country  ){
      res.status(400).send({
        success: false,
        message: "enter required data",
      });
    }
    const order = await Order.create({
      shippingAddress1,
      city,
      phone,
      country,
      user: req.user.id,
      product 
    })
    if (order){
      res.status(201).json(order)
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
}

const editOrder = async(req , res) => {
  const userr  = await User.findById(req.user.id)
    const id = req.params.id
    const { shippingAddress1 ,city ,phone , country} = req.body
    const update = req.body
   if (!userr) {
    return res.status(404).json({
      success: false,
      message: 'User not found.',
    });
   }
    const order = await Order.findByIdAndUpdate(id , update ,  { new: true })
     if(!order){
      return(res.status(404).send({success: false, message : 'order not found'}))
    }
    return res.status(201).json(order)
}
const deleteOrder = async (req , res) => {
try{
  const id = req.params.id
  const userr  = await User.findById(req.user.id)
  if (!userr) {
    return res.status(404).json({
      success: false,
      message: 'User not found.',
    });
   }
    const order = await Order.findByIdAndDelete(id)
      if(!order){
      return(res.status(404).json({  success: false, message : 'order not found'}))
    }
    return res.status(200).send({ success: true , message :'Deleted Successfully'})

  }  catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
}

}
module.exports = {
  getAll,
  addOrder,
  editOrder,
  deleteOrder
}