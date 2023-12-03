const userRoutes = require("express").Router();
const  { registerUser,LoginUser,GetMe , editUser , deleteUser , gettAll, getAll} = require("../controllers/UserController")
const {protect} = require('../middleware/AuthMiddleware')

userRoutes.post("/register" , registerUser);

userRoutes.post("/login" , LoginUser);

//generate jwt 
userRoutes.get('/me' , protect ,GetMe)

userRoutes.put('/edit' , protect , editUser)
userRoutes.delete('/delete' , protect , deleteUser)
userRoutes.get('/all', protect ,getAll)

module.exports = userRoutes;
