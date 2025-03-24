require("dotenv").config()
const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET
const expireTime = process.env.EXPIRE_TIME

class JWT {

    generateToken(data) {
        let token = jwt.sign(data, secret, { expiresIn: expireTime })
        return token;
    }

    verifyToken(req) {
        let headers = req && req.headers
        let token = headers.authorization && headers.authorization.split(" ")[1];

        try {
            let data = jwt.verify(token, secret)
            req.data = data
            return { status: true, data }
        } catch (error) {
            return { status: false, error }
        }
    }

}

module.exports = new JWT();