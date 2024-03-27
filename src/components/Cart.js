import { useDispatch, useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import React, { useState, useEffect } from "react";

const Cart = () => {
  //Problem: Everytime our store changes, it will re-render the component. So it not convenient for the big production ready apk
  // const store = useSelector((store) => store);

  //Major Performance Improvement (By subscribing to specific portion of component of our store(here specific portion of component is 'item'))
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const [authorized, setAuthorized] = useState(true);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await fetch("http://localhost:4000/cart", {
          method: "POST",
          headers: {
            authorization: JSON.parse(localStorage.getItem("token")),
          },
        });

        const result = await response.json();

        if (result.error) {
          setAuthorized(false);
        } else {
          setAuthorized(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkAuthorization();
  }, []);

  return (
    <>
      {authorized ? (
        <>
          <div className="flex flex-col text-center gap-7">
            <h1 className="text-center p-2 font-bold text-2xl mx-auto font-pop2 mt-4">
              Cart Items - {cartItems.length}
            </h1>

            <button
              className="text-white bg-red-900 w-28 rounded-lg hover:bg-gray-700 p-2 m-auto font-pop2 font-normal"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>

          <div className="flex flex-wrap bg-yellow-200 m-10 rounded-xl">
            {cartItems.map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}
          </div>
        </>
      ) : (
        <h1 className="font-bold text-2xl text-center flex items-center justify-center h-screen">
          Please Log-in to access this Page !
        </h1>
      )}
    </>
  );
};

export default Cart;
