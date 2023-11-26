const router = require("express").Router();
const  { registerUser,LoginUser,GetMe , editUser , deleteUser , gettAll, getAll} = require("../controllers/UserController")
const {protect} = require('../middleware/AuthMiddleware')

router.post("/register" , registerUser);

router.post("/login" , LoginUser);

//generate jwt 
router.get('/me' , protect ,GetMe)

router.put('/edit' , protect , editUser)
router.delete('/delete' , protect , deleteUser)
router.get('/all', protect ,getAll)
module.exports = router;
