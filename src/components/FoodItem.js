import { IMG_CDN_URL } from "../constants";
import React from "react";

export const FoodItem = ({name, description, imageId, price} ) => {
    return(
        <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-50">

            <img src={IMG_CDN_URL + imageId} alt="Item Image"/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{description}</h3>
            <h4>Rs. {price/100}</h4>

        </div>
    )
}