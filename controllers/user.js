'use strict'

const moongose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp(req, res){
    const user = new User({
       email: req.body.email,
       name: req.body.name 
    })

    user.save((err)=>{
        if(err) res.status(500).send({message: `error al crear el usuario: ${err}`})

        return res.status(200).send({token: service.createToken(user)})
    })
}

function signIn(req, res){
    User.find({email: req.body.email},(err, user)=>{
        if(err) res.status(500).send({message: `error al buscar el usuario: ${err}`})

        if(!user) res.status(404).send({message: `no existe el usuario: ${req.body.email}`})

        req.user = user
        res.status(200).send({
            message: 'te has logueado correctamente',
            token: service.createToken(user)
        })
    })
}

module.exports = {
    signIn, 
    signUp
}