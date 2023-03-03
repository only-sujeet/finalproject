const express = require("express");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const router = express.Router();
const AdRegister = require("../../Model/AdRegister")
const { body, validationResult, } = require('express-validator');
const { isAuthenticate } = require("../../Middleware/Adminmiddle");

router.post("/aregister", [
    body('email', 'Enter a valid E-mail').isEmail(),
    body('name', 'Enter a valid Name').isLength({ min: 5 }),
    body('password', 'Enter minimum 5 length password').isLength({ min: 5 }),
], async (req, res) => {

    // if there are error then send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    const chmail = await AdRegister.findOne({ email });

    try {


        if (chmail) {
            res.status(400).json({ error: "Email is already exist" })
        }
        else {
            const aregister = new AdRegister({ name, email, password })

            await aregister.save();
            res.status(201).json({ msg: "Admin Registered" });
        }


    } catch (error) {
        res.status(400).json({ message: "Something Went Wrong " })

    }
})


router.post("/alogin", [
    body('email', 'Enter a valid E-mail').isEmail(),
    body('password', 'Enter minimum 5 length password').isLength({ min: 5 }),
], async (req, res) => {

    // if there are error then send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let token;
        const admin = await AdRegister.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Email is not Found" })
        }
        else {
            const chpassword = await bcrypt.compare(password, admin.password);

            if (!chpassword) {
                return res.status(404).json({ error: "Please Try to Login Proper Password" })
            }
            else {
                token = await admin.generateAuthToken();
                // console.log({ token: token })
                const option = {
                    httpOnly: true,
                    expires: new Date(Date.now() + 86400*1000)
                }

                res.status(201).cookie("admintoken", token, option).json({
                    success: true,
                    message: "Welcome Back",
                    token: token
                })

            }

        }



    } catch (error) {
        return res.status(404).json({ error: error.message })
    }

})
router.get("/profile", isAuthenticate, async (req, res) => {
    try {
        const admin = await AdRegister.findById(req.admin._id)
        res.send(admin)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
)

module.exports = router