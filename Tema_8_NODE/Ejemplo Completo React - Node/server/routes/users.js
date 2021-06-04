const ramda = require("ramda");
const bcrypt = require("bcrypt");

const express = require("express");
const router = express.Router();

const User = require("../models/user");
const {verifyToken, verifyAdmin} = require("../middlewares/auth");

const middleware1 = (req, res, next) => {
    console.log("Hola desde el middlware 1");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("Hola desde el middlware 2");
    next();
}

router.get("/", verifyToken, async (req, res)  => {
    // Similar al find de Mongo. Si el filtro está vacío,
    // me devuelve todos los documentos.
    const PAGE_SIZE = 2;
    const page = req.query.page || 1;

    const count = await User.countDocuments();
    
    User.find({active: true})
    .skip(( page - 1) * PAGE_SIZE) // Número de documentos que saltará
    .limit(PAGE_SIZE) // Número de documentos que devolverá
    .exec((error, users) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(200).json({ok: true, page, pageSize: PAGE_SIZE, count, results: users});
        }
    })
});

router.get("/testAdmin", verifyToken, verifyAdmin, async (req, res)  => {
    res.status(200).json({message: "you are an admin!!"});
});

router.post("/", (req, res) => {
    let body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false, error});
        } else {
            res.status(201).json({ok: true, savedUser});
        }
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body);
    
    User.findByIdAndUpdate(
        id,
        body,
        { new: true, runValidators: true, context: 'query' }, // options
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});
            } else {
                res.status(200).json({ok: true, updatedUser});
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    // User.findByIdAndRemove(id, (error, removedUser) => {
    //     if(error) {
    //         res.status(400).json({ok: false, error});
    //     } else {
    //         res.status(200).json({ok: true, removedUser});
    //     }
    // });

    User.findByIdAndUpdate(
        id,
        {active: false},
        { new: true, runValidators: true, context: 'query' }, // options
        (error, updatedUser) => {
            if(error) {
                res.status(400).json({ok: false, error});

            } else if (!updatedUser){
                res.status(400).json({ok: false, error: "User not found"});
                
            } else {
                res.status(200).json({ok: true, updatedUser});
            }
        }
    );
});

module.exports = router;