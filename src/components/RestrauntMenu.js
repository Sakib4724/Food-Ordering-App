import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestraunt from "../utils/useRestraunt";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import React from "react";

const RestrauntMenu = () => {
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

  return !restraunt ? (
    <Shimmer />
  ) : (
    <div className="menu flex">
      <div className="pl-14 pt-10">
        <h1 className="p-2">Restraunt id: {id}</h1>
        <h2 className="font-bold text-2xl p-2">{restraunt?.name}</h2>
        <div style={{width: '300px'}} className="bg-red-100">                        {/* ******  Temperory div ******** */}
        <img src={IMG_CDN_URL + restraunt?.cloudinaryImageId} style={{width:'300px'}} className=""/> 
        </div>

        <h3 className="p-2 text-lg">Area: {restraunt?.areaName}</h3>
        <h3 className="p-2 text-lg">City: {restraunt?.slugs?.city}</h3>
        <h3 className="p-2 text-lg">Ratings: {restraunt?.avgRating}</h3>
        <h3 className="p-2 text-lg">Cost: {restraunt?.costForTwoMessage}</h3>
      </div>

      <div className="m-12">
        <h1 className="font-bold text-2xl">Menu</h1>
        <ul>
          {/* <li>{menu[0]?.card?.info?.name}</li> */}
          {menu?.map((item, index) => (
            <div className="p-5 bg-pink-100 m-10 rounded-2xl hover:bg-transparent hover:border-2 hover:border-black">
            <li> <img src={IMG_CDN_URL + item?.card?.info?.imageId} alt="Menu Img" className="w-40 inline-block"/> {item?.card?.info?.name} <button className="p-2 ml-44 bg-red-900 hover:bg-gray-700 text-white rounded-md block align-middle" onClick={() => addFoodItem(item?.card?.info)}>Add</button></li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
