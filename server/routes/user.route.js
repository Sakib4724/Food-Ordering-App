const express = require("express");
const { registerUser, loginUser, sendOTP, sendMessage } = require("../controllers/user.controller");
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/send-otp').post(sendOTP);
router.route('/send-message').post(sendMessage)

module.exports = router;