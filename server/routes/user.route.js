const express = require("express");
const { registerUser, loginUser, sendOTP } = require("../controllers/user.controller");
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/send-otp').post(sendOTP);

module.exports = router;