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
    <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img
        alt="Item Image"
        src={IMG_CDN_URL + cloudinaryImageId}
        className="invisible"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};
