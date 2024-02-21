import { useDispatch, useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import React from "react";

const Cart = () => {
  //Problem: Everytime our store changes, it will re-render the component. So it not convenient for the big production ready apk
  // const store = useSelector((store) => store);

  //Major Performance Improvement (By subscribing to specific portion of component of our store(here specific portion of component is 'item'))
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="flex flex-col text-center gap-7">
        <h1 className="font-bold text-3xl p-2">Cart Items - {cartItems.length}</h1>
        <button
          className="text-white bg-red-900 w-28 rounded-lg hover:bg-gray-700 p-2 m-auto"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
