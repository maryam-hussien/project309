const mongoose = require("mongoose")

const itemSchema = mongoose.Schema(
{
  name:{
    type: String,
  },
  type : {
    type: String,
    required: true,
  },
   image : {
    type: String,
    required: true,
   },
   price : {
    type: String,
    required: true,
   },
   size : {
    type: String,
   },
   description : {
    type: String,
   }
},
{
  timestamps: true,
}
)

const Item = mongoose.model("item" , itemSchema)
module.exports = Item