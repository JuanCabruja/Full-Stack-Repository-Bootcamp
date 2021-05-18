require("./config/config");

const express = require('express');
const app = express();

// Antes de los endpoints, usamos los middlewares
app.use(express.json());

let users = [];

app.listen(process.env.PORT, () => {
    console.log("listening on port: ", process.env.PORT);
})

app.get('/users', (req, res) =>{
    const user = {name: "John", email: "johngv@gmail.com"}
    res.json({ok: true, result: users});
});

app.put('/users/:id', (req, res) =>{
    let id = req.params.id;

    res.json({message: `Petición PUT recibida con parámetro: ${id}`});
});

app.delete('/users/:id', (req, res) =>{
    let id = req.params.id;

    const removedUser = users.splice(id, 1);


    res.status(200).json(removedUser);
});

app.post('/users', (req, res) =>{
    const body = req.body; // necesita appuse(express.json());

    if (!body.name) {
        res.status(400).json({ok:false, message: "name is requiered"})
    } else {
        users.push(body);
        res.status(201).json({user: body})
    }
});

// app.delete('/:id', (req, res) => {

// })

// app.post()


// app.listen(300);