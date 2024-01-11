const mongoose = require("mongoose");

//user schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    typeOfUser: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;