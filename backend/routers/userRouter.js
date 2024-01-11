const express = require ("express");
const router = express.Router();
let verifyToken = require("../middleware/auth");
const { signUp, login, testToken } = require ("../controllers/userController");

router.post("/signUp", signUp);
router.post("/login", login);
router.get ("/token", verifyToken, testToken);

module.exports = router;