const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

// Antes de los endpoints, usamos los middlewares
app.use(express.json());
app.use(cors());

app.use(require("./routes"));

mongoose.connect("mongodb://localhost:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", err => console.log("Connection to DB failed: ", err));
db.once("open", () => console.log("Connected to DB successfuly"));

app.listen(
    process.env.PORT,
    () => console.log("Listening on port ", process.env.PORT)
);