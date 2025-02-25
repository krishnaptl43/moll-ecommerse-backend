require('dotenv').config();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUND)

async function addUser(req, res) {
    let { password } = req.body
    // let hashPass = ''/
    try {
        let hashPass = await bcrypt.hash(password, saltRounds)

        let user = await userModel.create({ ...req.body, password: hashPass })
        if (!user) {
            return res.json({ status: false, data: null, message: "user Not Registered" })
        }
        res.json({ status: true, data: user, message: "user Registered Successfully" })
    } catch (error) {
        res.json({ error })
    }
}

async function userLogin(req, res) {
    let { mobile_number, password } = req.body
    try {
        let user = await userModel.findOne({ mobile_number })
        if (!user) {
            return res.json({ status: false, data: null, message: "user Not found" })
        }

        let isMacth = await bcrypt.compare(password, user.password);

        if(!isMacth){
            return res.json({ status: false, data: null, message: "Incorrect password" })
        }

        res.json({ status: true, data: user, message: "user Login Successfully" })
    } catch (error) {
        res.json({ error })
    }
}


module.exports = { addUser ,userLogin}