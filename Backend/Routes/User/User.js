const express = require('express')
const router = express.Router();
const User = require('../../Model/User/User')
const { body, validationResult, cookie } = require('express-validator');
const { sendEmail } = require('../../Middleware/SendEmail')

const crypto = require('crypto');
const { isAuthenticatedUser } = require('../../Middleware/UserAuth');

router.post("/register",async(req, res)=>{
    try {
        const { name, email, password, mobile } = req.body
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ sucsess: false, message: "user already exists....." })
        }

        user = await User.create({ name, email, mobile, password })
        user.save();

        res.status(201).json({
            sucsess: true,
            user
        })
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})

router.post("/login",async(req, res)=>{
    try {
        const { email, password } = req.body

        let user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Username & Password" })
        }

        const isMatch = await user.matchPassword(password)

        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Username & Password" })

        }
        const option = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        const token = await user.generateToken()
        res.status(200).cookie("token", token, option).json({ success: true, message: "Login Success", token })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }

})
router.get("/me",isAuthenticatedUser,async(req, res)=>{
    try {
        const user = await User.findById(req.user._id)
        res.send(user)
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})
router.post("/forgot/password",async(req, res)=>{})
router.post("/reset/password",async(req, res)=>{})
router.get("/logout",isAuthenticatedUser,async(req, res)=>{
    try {
        res
            .status(200)
            .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
            .json({ success: true, message: "Logout" })
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

module.exports = router