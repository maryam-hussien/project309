const ItemRouters = require("express").Router()
const { getAll , getById , AddItem , editItem , deleteItem } = require( "../controllers/ItemController")

ItemRouters.get("/all" , getAll)
ItemRouters.get("/getById/:id" , getById)
ItemRouters.post("/add" , AddItem)
ItemRouters.put("/edit/:id" , editItem)
ItemRouters.delete("/delete/:id" , deleteItem)

module.exports = ItemRouters