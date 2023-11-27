const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutrs")
const itemRoutes = require("./routes/itemRoutes")
const bodyParser = require('body-parser');
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user' , userRoutes)
app.use('/item' , itemRoutes)

app.listen(port,() => console.log(`nodejs server started on port ${port}`))