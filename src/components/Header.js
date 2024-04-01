import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import React from "react";
import Logo from "../assets/img/barakat2.jpg";
import Register from "./Register";
import { LoggedInUserContext } from "../utils/LoggedInUserContext";
import { ButtonContext } from "../utils/ButtonUserContext";
import { CartContext } from "../utils/CartContext";

import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

import { IoIosArrowDropdown } from "react-icons/io";

// import axios from "axios";
// //backend url
// axios.defaults.baseURL = "http://localhost:4000";
// axios.defaults.withCredentials = true;

//************************ */
//Adding tailwind css styles
//************************ */

export const Title = () => (
  <div className="">
    <a
      href="/"
      className="text-red-900 font-bold text-3xl flex items-center h-full ml-5 font-pop"
    >
      Zaikaa
      {/* <img
      className="logo h-24 p-2"
      alt="logo"
      // src="https://s3.ap-south-1.amazonaws.com/trademark-base.vakilsearch.com/trademarklogo/5653883.png"
      src={Logo}
    /> */}
    </a>
  </div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [dropDown, setIsDropDown] = useState(true);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const loggedInUserContext = useContext(LoggedInUserContext);
  const buttonContext = useContext(ButtonContext);
  const cartContext = useContext(CartContext);

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

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="header flex justify-between bg-yellow-200 shadow-lg">
      <Title />

      <button onClick={() => setIsDropDown(!dropDown)}>
        <IoIosArrowDropdown className="text-4xl xl:invisible mx-5" />
      </button>

      {screenWidth > 600 && screenWidth < 1200 && (
        <div className="nav-items hidden">
          <ul className="flex flex-col py-10">
            <Link to="/">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">Home</li>
            </Link>

            <Link to="/about">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                About
              </li>
            </Link>

            <Link to="/contact">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Contact
              </li>
            </Link>

            <Link to="/instamart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Instamart
              </li>
            </Link>

            {/* <Link to="/cart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Cart - {cartItems.length} items
              </li>
            </Link> */}

            <Link to="/cart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Cart - {cartContext.cartItems.length} items
              </li>
            </Link>
          </ul>
        </div>
      )}
      {screenWidth > 1200 && (
        <div className="nav-items">
          <ul className="flex flex-col py-10 md:flex-row sm:flex-col">
            <Link to="/">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">Home</li>
            </Link>

            <Link to="/about">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                About
              </li>
            </Link>

            <Link to="/contact">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Contact
              </li>
            </Link>

            <Link to="/instamart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Instamart
              </li>
            </Link>

            {/* <Link to="/cart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Cart - {cartItems.length} items
              </li>
            </Link> */}

            <Link to="/cart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Cart - {cartContext.cartItems.length} items
              </li>
            </Link>
          </ul>
        </div>
      )}

      {dropDown == true ? (
        <div className="nav-items hidden">
          <ul className="flex flex-col py-10 md:flex-row sm:flex-col">
            <Link to="/">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">Home</li>
            </Link>

            <Link to="/about">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                About
              </li>
            </Link>

            <Link to="/contact">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Contact
              </li>
            </Link>

            <Link to="/instamart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Instamart
              </li>
            </Link>

            {/* <Link to="/cart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Cart - {cartItems.length} items
              </li>
            </Link> */}

            <Link to="/cart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Cart - {cartContext.cartItems.length} items
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="nav-items">
          <ul className="flex flex-col py-10">
            <Link to="/">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">Home</li>
            </Link>

            <Link to="/about">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                About
              </li>
            </Link>

            <Link to="/contact">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Contact
              </li>
            </Link>

            <Link to="/instamart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Instamart
              </li>
            </Link>

            {/* <Link to="/cart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Cart - {cartItems.length} items
              </li>
            </Link> */}

            <Link to="/cart">
              <li className="px-2 text-lg ml-10 font-pop2 font-medium">
                Cart - {cartContext.cartItems.length} items
              </li>
            </Link>
          </ul>
        </div>
      )}

      <h1 className="m-auto ml-14"> {isOnline ? "✅" : "❌"} </h1>

      <span className="p-10 font-bold text-red-900 ">
        {loggedInUserContext.data}
      </span>

      <div className="flex flex-col lg:flex-row">
        <Link to="/register">
          <button
            className="mt-4 mr-20 text-white bg-red-900 p-2 w-20 rounded-lg hover:bg-gray-700 font-pop2 font-normal lg:w-20 lg:mt-8 lg:mr-8 text-sm lg:text-base"
            onClick={() => {
              // setIsLoggedIn(true);
            }}
          >
            Register
          </button>
        </Link>

        {
          // loggedInUser() ? <button>Logout</button> : <button>Login</button>
          isLoggedIn && buttonContext.data == "Logout" ? (
            <button
              className="mt-4 mr-20 mb-16 text-white bg-red-900 p-2 w-20 rounded-lg hover:bg-gray-700 font-pop2 font-normal lg:w-20 lg:mt-8 lg:mr-8 text-sm lg:text-base"
              onClick={() => {
                setIsLoggedIn(false);
                loggedInUserContext.setData("");
                cartContext.cartItems.length = 0;
                buttonContext.setData("Login");
                handleClearCart();
                localStorage.clear();
              }}
            >
              {buttonContext.data}
            </button>
          ) : (
            <Link to="/login">
              <button
                className="mt-4 mr-20 mb-4 text-white bg-red-900 p-2 w-20 rounded-lg hover:bg-gray-700 font-pop2 font-normal lg:w-20 lg:mt-8 lg:mr-8 sm:mt-4 sm:mr-4 text-sm lg:text-base"
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
    </div>
  );
};

export default Header;
