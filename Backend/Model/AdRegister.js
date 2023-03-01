const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;
const Adschema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
})

// hashing password
Adschema.pre('save', async function (next) {
    console.log("hi from bcrypt")
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
})

// generate token

Adschema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        return token;
    } catch (error) {
        console.log(error)
    }
}


const AdRegister = mongoose.model("addadmin", Adschema);
module.exports = AdRegister;