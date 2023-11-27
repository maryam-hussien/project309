const Item = require("../models/itemModel")

const getAll = async(req , res) => {
  try {
    const item = await Item.find()
    if(!item){
      res.send({
        success: false,
        message: "no items",
      });
    }
    res.json(item)
  }catch (error) {
    res.send({
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
      return res.status(400).send({ success: false, message: 'Invalid item ID' });
    }
    const item=  await Item.findById(id)
    if(!item){
      return(res.status(404).send({success: false, message : 'item not found'}))
    }
    res.status(200).json(item)

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
    if( !type || !price || !image){
      res.send({
        success: false,
        message: "type , price and image are required",
      });
    }
    const itemExist = await Item.findOne({image})
    if( itemExist){
      res.send({
        success: false,
        message: "item already existed",
      });
    }
    const item = await Item.create({
      name,
      type,
      price,
      image,
      size,
      description
    })
     if (item){
      res.status(201).json(item)
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
    const update = {name , type , price , image, size , description}

    if (!isValidObjectId) {
      return res.status(400).send({ success: false, message: 'Invalid Item ID' });
    }
    if( !type || !price || !image){
      res.send({
        success: false,
        message: "type , price and image are required",
      });
    }
     const item = await Item.findByIdAndUpdate(id , update ,  { new: true })
     if(!item){
      return(res.status(404).send({success: false, message : 'book not found'}))
    }
    return res.status(201).json(item)

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
      return res.status(400).json({ message: 'Invalid book ID' });
    }
     const item = await Book.findByIdAndDelete(id)
     if(!item){
      return(res.status(404).json({  success: false, message : 'item not found'}))
    }
    return res.status(201).send({ success: true , message :'Deleted Successfully'})

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
  deleteItem
}