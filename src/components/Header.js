import React, {useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import React from "react";
import Logo from "../assets/img/logo1.png";
import Register from "./Register";
import { LoggedInUserContext } from "../utils/LoggedInUserContext";
import { ButtonContext } from "../utils/ButtonUserContext";

import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

// import axios from "axios";
// //backend url
// axios.defaults.baseURL = "http://localhost:4000";
// axios.defaults.withCredentials = true;

export const Title = () => (
  <a href="/">
    <img
      className="logo h-24 p-2"
      alt="logo"
      // src="https://s3.ap-south-1.amazonaws.com/trademark-base.vakilsearch.com/trademarklogo/5653883.png"
      src={Logo}
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const loggedInUserContext = useContext(LoggedInUserContext);
  const buttonContext = useContext(ButtonContext);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [isLoggedIn])

  // console.log("render");

  const cartItems = useSelector((store) => store.cart.items); //subscribing to our cart
  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-pink-50 shadow-lg">
      <Title />

      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2 text-lg ml-20">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2 text-lg ml-10">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-2 text-lg ml-10">Contact</li>
          </Link>

          <Link to="/instamart">
            <li className="px-2 text-lg ml-10">Instamart</li>
          </Link>

          <Link to="/cart">
            <li className="px-2 text-lg ml-10">
              Cart - {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>

      <h1 className="m-auto"> {isOnline ? "✅" : "❌"} </h1>

      <span className="p-10 font-bold text-red-900 ">{loggedInUserContext.data}</span>

      <Link to="/register">
        <button
          className="mt-8 mr-8 text-white bg-red-900 p-2 w-20 rounded-lg hover:bg-gray-700"
          onClick={() => {
            // setIsLoggedIn(true);
          }}
        >
          Register
        </button>
      </Link>

      {
        // loggedInUser() ? <button>Logout</button> : <button>Login</button>
        isLoggedIn && buttonContext.data=='Logout' ? (
          <button
            className="mt-8 mr-8 mb-8 text-white bg-red-900 p-2 w-20 rounded-lg hover:bg-gray-700"
            onClick={() => {
              setIsLoggedIn(false);
              loggedInUserContext.setData("");
              buttonContext.setData('Login');
              handleClearCart();
              localStorage.clear();
            }}
          >
            {buttonContext.data}
            
          </button>
        ) : (
          <Link to="/login">
            <button
              className="mt-8 mr-8 mb-8 text-white bg-red-900 p-2 w-20 rounded-lg hover:bg-gray-700"
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              {buttonContext.data} 
            </button>
          </Link>
        )
      }
    </div>
  );
};

export default Header;
