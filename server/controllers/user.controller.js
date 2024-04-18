const User = require("../models/user");
const JWT = require("jsonwebtoken");
const jwtKey = "demokey";
const bcrypt = require("bcrypt");
const otpGenerator = require('otp-generator');
const OTP = require("../models/otp");
const contactMail = require("../utils/contactMail");

const registerUser = async (req, res) => {
  // console.log(req.body);
  //   res.send("Hello");
  // res.json(req.body);

  const { name, email, password, otp } = req.body;

  if (!name || !email || !password || !otp) {
    // alert("Name is Required!");
    return res.json({
      error: "All fields are required",
    });
  }

  if (!password || password.length < 6) {
    // alert("Password is required and should be atleast 6 characters long");
    return res.json({
      error: "Password is required and should be atleast 6 characters long",
    });
  }

  const exist = await User.findOne({ email });

  if (exist) {
    // alert("Email already exists!");
    return res.json({
      error: "Email is taken already",
    });
  }

  const response = await OTP.find({email}).sort({createdAt: -1}).limit(1);

  if(response.length === 0 || otp !== response[0].otp){
    return res.status(400).json({
      success: false,
      message: "The OTP is not valid"
    })
  }

  let user = new User();

  const salt = await bcrypt.genSalt(10);

  user.name = req.body.name;
  user.email = req.body.email;
  user.password = await bcrypt.hash(req.body.password, salt);
  // user.cart = [
  //   {
  //     restroName: "Sahara",
  //     restroImage: "faf4124124",
  //     menuName: "Chicken Kadai",
  //     menuImage: "afafawf412",
  //     menuDescription: "Cuisine-Mughlai",
  //     menuPrice: "500",
  //   },
  // ];
  const result = await user.save();
  // console.log(doc);

  JWT.sign({ result }, jwtKey, { expiresIn: "1m" }, (err, token) => {
    if (err) {
      res.send({ result: "something went wrong, please try after some time!" });
    }

    console.log("RegToken: ", token);

    // res.send({ result, auth: token });
    res.status(200).json({
      success: true,
      message: "User Registered Successfully",
      token
    });
  });

  // const accessToken = await signAccessToken(result.id);
  // const refreshToken = await signRefreshToken(result.id);

  // res.send({ accessToken, refreshToken });
  // res.json(result);
};

const loginUser = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email) {
    // alert("Name is Required!");
    return res.json({
      error: "Email is Empty",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      error: "Email is not registered!",
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({
      error: "Password in incorrect!",
    });
  }

  const cart = user.cart;

  JWT.sign({ user }, jwtKey, { expiresIn: "1h" }, (err, token) => {
    if (err) {
      res.send({ result: "something went wrong, please try after some time!" });
    }

    console.log("LogToken: ", token);

    res.send({ user, cart, auth: token });
  });

  //*********Adding Cart Items to the database*********

  // const num = user.cart.length;
  // console.log("num: ", num);

  // const cartItem = {
  //   restroName: "Powai Darbar",
  //   restroImage: "sg4t34",
  //   menuName: "Veg Manchurian",
  //   menuImage: "gasgasf",
  //   menuDescription: "Cuisine-Chinease",
  //   menuPrice: "100",
  // };

  // user.cart.push(cartItem);

  // await user.save();

  //*************************************************** */

  // const accessToken = await signAccessToken(user.id);
  // const refreshToken = await signRefreshToken(user.id);

  // res.send({ accessToken, refreshToken });
  // res.json(user);
};

const sendOTP = async (req, res) => {
  try {
    const { email, name } = req.body;
    const checkUserPresent = await User.findOne({ email });

    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User is already registered",
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });

      result = await OTP.findOne({ otp: otp });
    }

    const otpPayload = { email, name, otp };
    const otpBody = await OTP.create(otpPayload);
    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const sendMessage = async (req, res) => {
  try{
    const {name, email, message} = req.body;

    const mailResponse = await contactMail(
      email,
      name,
      `
      <h2>Message from ${name} (${email})</h2>
      <p>${message}</p>
      `
    )
    console.log("Email sent successfully: ", mailResponse);
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  }
  catch(error) {
    console.log("Error occurred while sending email: ", error);
    return res.status(500).json({success: false, error: error.message});
  }
}

module.exports = { registerUser, loginUser, sendOTP, sendMessage };
