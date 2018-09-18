'use strict'

const moongose = require('mongoose')
const User = require('../models/user')
const service = require('../services/index')

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

function signIn(){}

module.exports = {
    signIn, 
    signUp
}