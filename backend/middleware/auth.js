const jwt = require("jsonwebtoken");
require ("dotenv").config();


const verifyToken = ( req, res, next ) => {
    try {
        let clientToken = req.headers.authorization.split(" ")[1];
        if (!clientToken) {
            return res
            .status(403)
            .send({ msg: "The token does not exist" });
    } else { 
        let verifiedToken = jwt.verify(
            clientToken,
            process.env.PRIVATE_KEY
        );
        if (!verifiedToken) {
            return res
            .status(401)
            .send({ msg: "You are not Authorized" });
        } else {
          req.user = verifiedToken;
            next();
        }
    }
    } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Sorry, We have an internal server error." });
    }  
};

module.exports = verifyToken;