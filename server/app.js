const express = require("express");

const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const mongoose = require("mongoose");

const JWT = require("jsonwebtoken");
const createError = require("http-errors");
const jwtKey = "demokey";

const User = require("./models/user");
const Cart = require("./models/cart");

mongoose
  .connect("mongodb://127.0.0.1:27017/foodapkuser")
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("Database not connected", err));

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/register", AuthRoute);

app.post("/register", async (req, res) => {
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
});

app.post("/login", async (req, res) => {
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

  JWT.sign({ user }, jwtKey, { expiresIn: "1h" }, (err, token) => {
    if (err) {
      res.send({ result: "something went wrong, please try after some time!" });
    }

    console.log("LogToken: ", token);

    res.send({ user, auth: token });
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
});

app.get("/register", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

app.get("/login", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

app.post("/instamart", verifyToken, async (req, res, next) => {
  // const header = req.headers['authorization'];
  // console.log("Header: ", header);
  console.warn("Middleware called!");
});

app.post("/cart", verifyToken, async (req, res, next) => {
  // const {restroName, restroImage, menuImage, menuName, menuDescription, menuPrice} = req.body;
  // let cart = new Cart();
  // cart.restroName = req.body.restroName;
  // cart.restroImage = req.body.restroImage;
  // cart.menuImage = req.body.menuImage;
  // cart.menuName = req.body.menuName;
  // cart.menuDescription = req.body.menuDescription;
  // cart.menuPrice = req.body.menuPrice;
  // const result = await cart.save();
  // res.send(result);
});

app.post("/add-to-cart", async(req, res, next) => {
  console.log("add-to-cart api");
  const {email, restroName, restroImage, menuName, menuImage, menuDescription, menuPrice} = req.body;

  try{
    const user = await User.findOne({ email });

    if(!user){
      return res.json({
        error: "You are not logged in!",
      });
    }
    
    // const cartItem = {
    //   restroName: restroName,
    //   restroImage: restroImage,
    //   menuName: menuName,
    //   menuImage: menuImage,
    //   menuDescription: menuDescription,
    //   menuPrice: menuPrice
    // }
  
      const cartItem = {
      restroName: restroName,
      restroImage: restroImage,
      menuName: menuName,
      menuImage: menuImage,
      menuDescription: menuDescription,
      menuPrice: menuPrice/100
    };
  
    user.cart.push(cartItem);
  
    await user.save();

    return res.json({
      message: "Item Added to cart successfully",
    });
  }
  catch(error) {
    console.error("Error adding item from cart:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

})

app.post("/remove-from-cart", async(req, res, next) => {
  console.log("remove-from-cart api");
  const { email, restroName, menuName } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user does not exist, return error
    if (!user) {
      return res.json({
        error: "User not found",
      });
    }

    // Update the user document to remove the item from the cart
    await User.findOneAndUpdate(
      { email },
      { $pull: { cart: { restroName, menuName } } }
    );

    return res.json({
      message: "Item removed from cart successfully",
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  console.log("Header token: ", token);

  if (token) {
    JWT.verify(token, jwtKey, (err, valid) => {
      if (err) {
        return res.json({
          error: "Token is Invalid!",
        });
      } else {
        next();
      }
    });
  } else {
    return res.json({
      error: "Token is missing!",
    });
  }

  // next();
}

// app.post("/refresh-token", async (req, res, next) => {
//   try {
//     const { refreshToken } = req.body;

//     if (!refreshToken) throw createError.BadRequest();
//     const userId = await verifyRefreshToken(refreshToken);

//     const accessToken = await signAccessToken(userId);
//     const refToken = await signRefreshToken(userId);

//     res.send({ accessToken: accessToken, refreshToken: refToken });
//   } catch (error) {
//     next(error);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
  console.log(process.env.ACCESS_TOKEN_SECRET);
});
