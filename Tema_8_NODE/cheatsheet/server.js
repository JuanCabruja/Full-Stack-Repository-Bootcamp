// Importamos nuestro archivo config con las variables de entorno 
require('./config/config')

const mongoose = require("mongoose");
const express = require('express');
const app = express();
const users = require("./routes/users");

// Antes de los endpoints, usamos los middlewares
app.use(express.json());

app.use("/users", users)

mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const db = mongoose.connection; 

db.on("error", err => console.log("Connection to DB failed: ", err));
db.once("open", () => console.log("Connected to DB succesfully"))




app.listen(process.env.PORT,
     () => console.log("listening on port ", process.env.PORT));