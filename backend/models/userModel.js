const mongoose = require("mongoose");

//user schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    typeOfUser: { type: String, default: "student" }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;