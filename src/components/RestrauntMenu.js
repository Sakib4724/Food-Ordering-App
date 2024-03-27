import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import React from "react";

import { LoggedInUserContext } from "../utils/LoggedInUserContext";

const RestrauntMenu = () => {
  const loggedInUserState = useContext(LoggedInUserContext);

  // const [restraunt, setRestraunt] = useState(null);
  // const [menu, setMenu] = useState([]);

  //how to read a dynamic URL params
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  const { restraunt, menu } = useRestraunt(id);

  // useEffect(() => {
  //   getRestrauntInfo();
  // }, []);

  // async function getRestrauntInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1211588&lng=72.8979674&restaurantId="+id
  //   );
  //   const json = await data.json();
  //   // console.log(json.data);
  //   setRestraunt(json.data?.cards[0]?.card?.card?.info);
  //   setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  // }

  //   if(!restraunt){
  //     return <Shimmer />
  //   }

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem());
  };

  // const [menuIndex, setMenuIndex] = useState(0);

  // const [data, setData] = useState({
  //   email: loggedInUserState.email,
  //   restroName: restraunt?.name,
  //   restroImage: restraunt?.cloudinaryImageId,
  //   menuName: menu[menuIndex]?.dish?.info?.name,
  //   menuImage: menu[menuIndex]?.dish?.info?.imageId,
  //   menuDescription: menu[menuIndex]?.dish?.info?.description,
  //   menuPrice: menu[menuIndex]?.dish?.info?.price,
  // })

  // useEffect(() => {
  //   if (restraunt) {
  //     setData({
  //       email: loggedInUserState.email,
  //       restroName: restraunt?.name,
  //       restroImage: restraunt?.cloudinaryImageId,
  //       menuName: menu[menuIndex]?.dish?.info?.name,
  //       menuImage: menu[menuIndex]?.dish?.info?.imageId,
  //       menuDescription: menu[menuIndex]?.dish?.info?.description,
  //       menuPrice: menu[menuIndex]?.dish?.info?.price
  //     });
  //   }
  // }, [restraunt, menu, menuIndex, loggedInUserState.email]);

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  useEffect(() => {
    if (menu && menu.length > 0) {
      setSelectedMenuItem(menu[0]?.dish?.info);
    }
  }, [menu]);

  const addToCart = async (item) => {
    try {
      const res = await fetch("http://localhost:4000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loggedInUserState.email,
          restroName: restraunt?.name,
          restroImage: restraunt?.cloudinaryImageId,
          menuName: item.name,
          menuImage: item.imageId,
          menuDescription: item.description,
          menuPrice: item.price,
        }),
      });

      const response = await res.json();

      if (response.error) {
        alert(response.error);
      } else {
        alert("Added to Cart Successfully !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (item) => {
    try {
      const res = await fetch("http://localhost:4000/remove-from-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loggedInUserState.email,
          restroName: restraunt?.name,
          restroImage: restraunt?.cloudinaryImageId,
          menuName: item.name,
          menuImage: item.imageId,
          menuDescription: item.description,
          menuPrice: item.price,
        }),
      });

      const response = await res.json();

      if (response.error) {
        alert(response.error);
      } else {
        alert("Removed from Cart Successfully !");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return !restraunt ? (
    <Shimmer />
  ) : (
    <div className="menu flex justify-center">
      <div
        className="pl-14 pt-10 bg-yellow-200 m-10 p-10 rounded-xl"
        style={{ height: "700px" }}
      >
        <h1 className="p-2 font-pop2">Restraunt id: {id}</h1>
        <h2 className="font-bold text-2xl p-2 font-pop2">{restraunt?.name}</h2>
        <div style={{ width: "300px" }} className="bg-red-100">
          {/* ******  Temperory div ******** */}
          <img
            src={IMG_CDN_URL + restraunt?.cloudinaryImageId}
            style={{ width: "300px" }}
            className="shadow-2xl"
          />
        </div>

        <h3 className="p-2 text-lg text-red-900 font-pop2 font-medium">
          Area: <span className="text-black">{restraunt?.areaName}</span>
        </h3>
        <h3 className="p-2 text-lg text-red-900 font-pop2 font-medium">
          City: <span className="text-black">{restraunt?.slugs?.city}</span>
        </h3>
        <h3 className="p-2 text-lg text-red-900 font-pop2 font-medium">
          Ratings: <span className="text-black">{restraunt?.avgRating}</span>
        </h3>
        <h3 className="p-2 text-lg text-red-900 font-pop2 font-medium">
          Cost:{" "}
          <span className="text-black">{restraunt?.costForTwoMessage}</span>
        </h3>
      </div>

      <div className="m-10 bg-yellow-200 p-10 rounded-xl">
        <h1 className="font-bold text-2xl font-pop2 text-center">Menu</h1>
        <ul>
          {/* <li>{menu[0]?.card?.info?.name}</li> */}
          {menu?.map((item, index) => (
            <div className="p-5 bg-yellow-100 m-10 rounded-2xl hover:bg-transparent hover:border-2 hover:border-black">
              <li className="font-pop2 font-medium">
                <div className="flex">
                  <img
                    src={IMG_CDN_URL + item?.dish?.info?.imageId}
                    alt="Menu Img"
                    className="w-40 inline-block rounded-md p-2"
                  />

                  <div className="flex flex-col">
                    <p className="p-2">{item?.dish?.info?.name}</p>
                    <p className="p-2 text-gray-700 font-normal">
                      {item?.dish?.info?.description}
                    </p>
                    {item?.dish?.info?.price != null ? (
                      <p className="p-2">₹ {item?.dish?.info?.price / 100}</p>
                    ) : (
                      <p className="p-2">Price Not Available</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className="p-2 m-2 w-24 bg-red-900 hover:bg-gray-700 text-white rounded-md block align-middle font-normal"
                    onClick={async () => {
                      addFoodItem(item?.dish?.info);
                      setSelectedMenuItem(item?.dish?.info);
                      addToCart(item?.dish?.info);
                    }}
                  >
                    Add
                  </button>
                  <button
                    className="p-2 m-2 w-24 bg-red-900 hover:bg-gray-700 text-white rounded-md block align-middle font-normal"
                    onClick={() => {
                      removeFoodItem();
                      setSelectedMenuItem(item?.dish?.info);
                      removeFromCart(item?.dish?.info);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
