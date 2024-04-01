import { IMG_CDN_URL } from "../constants";
import React from "react";

export const FoodItem = ({ menuName, menuImage, menuPrice }) => {
  return (
    <div className="card w-[200px] p-2 m-4 shadow-lg bg-yellow-100">
      <img
        src={IMG_CDN_URL + menuImage}
        alt="Item Image"
        className="h-40 rounded-md p-2"
      />
      <p className="font-pop2 font-semibold">{menuName}</p>
      {/* <h3>{description}</h3> */}
      <p className="font-pop2 font-medium">₹ {menuPrice}</p>
    </div>
  );
};
