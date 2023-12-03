const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    quantity: {
        type: Number,
        default :1,
        required: true
    },
    product: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
        name:{
            type: String,
          },
          type : {
            type: String,
          },
           image : {
            type: String,
           },
           price : {
            type: String,
           },
           size : {
            type: String,
           },
           description : {
            type: String,
           }
}],
    shippingAddress1: {
        type: String,
        required: true,
    },
  
    city: {
        type: String,
        required: true,
    },
  
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
})


const Order = mongoose.model("Order" , orderSchema)
module.exports = Order


/**
Order Example:

{
    "orderItems" : [
        {
            "quantity": 3,
            "product" : "5fcfc406ae79b0a6a90d2585"
        },
        {
            "quantity": 2,
            "product" : "5fd293c7d3abe7295b1403c4"
        }
    ],
    "shippingAddress1" : "Flowers Street , 45",
    "shippingAddress2" : "1-B",
    "city": "Prague",
    "zip": "00000",
    "country": "Czech Republic",
    "phone": "+420702241333",
    "user": "5fd51bc7e39ba856244a3b44"
}

 */