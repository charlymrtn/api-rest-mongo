'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto')

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true},
    name: { type: String, required: true},
    avatar: { type: String },
    password: { type: String, select: false},
    signupData: { type: Date, default: Date.now()},
    lastLogin: { type: Date}
});

userSchema.pre('save', function(next){
    let user = this
    if(!user.isModified('password')) return next()

    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err)

        bcrypt.hash(user.password, salt, null, (err,hash)=>{
            if(err) return next(err)

            user.password = hash
            next()
        })
    })
})

userSchema.methods.gravatar = function (){
    if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`

}

module.exports = mongoose.model('User', userSchema);