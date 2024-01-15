const User = require ("../models/userModel");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");

//signUp
const signUp = async (req, res) => {
    try {
        let { name, email, password, typeOfUser } = req.body;
        console.log(req.body)
        if (!name || !email || !password) {
            return res
            .status(402)
            .send({msg: "Please fill all the required fields: name, email, and password"});
        }
        let found = await User.findOne({ email });
        if (found) {
            return res.send({
                msg: "This email already exists, login or signUp with a new email.", found});
        }
        let hash_password = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hash_password, typeOfUser });
        return res
            .status(200)
            .send({ msg: "You sign up successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            msg: "Internal server error, please try again later." });
    }
};

//login
const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(402)
                .send({ msg: "Both email and password are required." });
        }
        let oldUser = await User.findOne({ email });

        if (oldUser) {
            let validPassword = await bcrypt.compare(
                password,
                oldUser.password
            );
            if (!validPassword) {
                return res
                .status(401)
                .send({ msg: "Invalid password. Try again with the correct one." });
            } else {
                // generate the token
                let token = jwt.sign(
                    { email: oldUser.email, id: oldUser._id, name: oldUser.name} ,
                    process.env.PRIVATE_KEY,
                    { expiresIn: "3h" }
                );
                return res
                    .status(200)
                    .send({ msg: `Login successfully. Welcome ${oldUser.name}`, token });
            }
        } else {
            return res.status(404).send({
                msg: "Invalid email, user not found. Please signUp first.",
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send(
                "Can not login please try again later, internal server error."
            );
    }
};

//test the token
const testToken = async (req, res) => {
    let { email } = req.body;
    res.send(`Welcome ${email}`);
    console.log (req.user.id)
};

module.exports = { signUp, login, testToken };