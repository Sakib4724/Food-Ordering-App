import { IMG_CDN_URL } from "../constants";
import React from "react";

export const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
}) => {
  // console.log("length is ", restraunt.length);
  // console.log(Object.keys(restraunt).length);

  // const { name, cloudinaryImageId, cuisines, avgRating } = restraunt.info;
  return (
    <div className="card w-[200px] p-2 m-2 shadow-xl bg-yellow-100 rounded-md border-2 border-gray-200 h-96">
      <img
        alt="Item Image"
        src={IMG_CDN_URL + cloudinaryImageId}
        className="h-40 w-60"
      />
      <h2 className="font-bold font-pop2 text-xl">{name}</h2>
      <h3 className="font-pop2 text-base">{cuisines.join(", ")}</h3>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};
