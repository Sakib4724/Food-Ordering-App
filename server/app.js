const express = require("express");

const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const mongoose = require("mongoose");

const JWT = require("jsonwebtoken");
// const createError = require("http-errors");
const jwtKey = "demokey";

const User = require("./models/user");

const { addToCart, removeFromCart } = require("./controllers/cart.controller");
const useRouter = require('./routes/user.route');
const cartRouter = require('./routes/cart.route');

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

// app.post("/register", registerUser);

// app.post("/login", loginUser);

app.use(useRouter);

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

app.use(cartRouter);


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
  // console.log(process.env.ACCESS_TOKEN_SECRET);
});
