const User = require("../models/user");
const JWT = require("jsonwebtoken");
const jwtKey = "demokey";

const registerUser = async (req, res) => {
  // console.log(req.body);
  //   res.send("Hello");
  // res.json(req.body);

  const { name, email, password } = req.body;

  if (!name) {
    // alert("Name is Required!");
    return res.json({
      error: "Name is required",
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

  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
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

    res.send({ result, auth: token });
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

  if (user.password != password) {
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

module.exports = { registerUser, loginUser };
