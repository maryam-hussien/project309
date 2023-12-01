const Item = require("../models/itemModel")
const cloudinary = require('../utils/cloudinary');
const User = require("../models/userModel")


const getAll = async(req , res) => {
  try {
    
    const item = await Item.find()
    if(!item){
      return res.send({
        success: false,
        message: "no items",
      });
    }
    return res.json(item)
  }catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
}
const getById = async(req , res) => {
  try {
    const id = req.params.id
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidObjectId) {
      return res.send({ success: false, message: 'Invalid item ID' });
    }
    const item=  await Item.findById(id)
    if(!item){
      return(res.send({success: false, message : 'item not found'}))
    }
    res.json(item)

  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
}
const AddItem = async(req , res) => {
  try {
    const {name , type , price , image, size , description} = req.body
    const result = await cloudinary.uploader.upload(image, {
      folder: "products",
  })
    if( !type || !price || !image){
      return res.send({
        success: false,
        message: "type , price and image are required",
      });
    }
    const itemExist = await Item.findOne({result})
    if( itemExist){
      return res.send({
        success: false,
        message: "item already existed",
      });
    }
    const item = await Item.create({
      name,
      type,
      price,
      image: {
        public_id: result.public_id,
        url: result.secure_url
    },
      size,
      description
    })
     if (item){
      return res.json(item)
     }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
}
const editItem = async(req , res) => {
  try {
    const {name , type , price , image, size , description} = req.body
    
    const id = req.params.id
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    const result = await cloudinary.uploader.upload(image, {
      folder: "products",
  })
    const update = {name ,
        type ,
        price ,
        image: {
          public_id: result.public_id,
          url: result.secure_url
        },
        size ,
        description
      }

    if (!isValidObjectId) {
      return res.send({ success: false, message: 'Invalid Item ID' });
    }
    if( !type || !price || !image){
      return res.send({
        success: false,
        message: "type , price and image are required",
      });
    }
     const item = await Item.findByIdAndUpdate(id , update ,  { new: true })
     if(!item){
      return(res.send({success: false, message : 'book not found'}))
    }
    return res.json(item)

  }  catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
}
}
const deleteItem = async(req , res) => {
  try {
    const id = req.params.id
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
  
    if (!isValidObjectId) {
      return res.json({ message: 'Invalid item ID' });
    }
     const item = await Item.findByIdAndDelete(id)
     if(!item){
      return(res.json({  success: false, message : 'item not found'}))
    }
    return res.send({ success: true , message :'Deleted Successfully'})

  }  catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
}
}



module.exports = {
  getAll,
 getById , 
 AddItem ,
  editItem , 
  deleteItem,
}