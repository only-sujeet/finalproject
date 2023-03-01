const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const EmpSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    gender: {
        type: String,
        required: true

    },
    phone: {
        type: Number,
        required: true

    },
    password: {
        type: String,
        required: true

    }
})

EmpSchema.pre('save', async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
    }
    next();
})

const EmpRegistertemp = mongoose.model("Empregister", EmpSchema);
module.exports = EmpRegistertemp;