const express = require("express");
const router = express.Router();
const { isAuthenticate } = require("../../Middleware/Adminmiddle");
const AdRegister = require("../../Model/AdRegister");

router.get("/getemp", isAuthenticate, async (req, res) => {
    try {
        const employee = await AdRegister.find({})
        if (!employee) {
            res.status(404).json({ message: "Employee Not Find" })
        }
        else {
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router