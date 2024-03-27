import { IMG_CDN_URL } from "../constants";
import React from "react";

export const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="card w-[200px] p-2 m-4 shadow-lg bg-yellow-100">
      <img
        src={IMG_CDN_URL + imageId}
        alt="Item Image"
        className="h-40 rounded-md p-2"
      />
      <p className="font-pop2 font-semibold">{name}</p>
      {/* <h3>{description}</h3> */}
      <p className="font-pop2 font-medium">₹ {price / 100}</p>
    </div>
  );
};
