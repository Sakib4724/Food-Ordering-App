import { useDispatch, useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { LoggedInUserContext } from "../utils/LoggedInUserContext";

const Cart = () => {
  //Problem: Everytime our store changes, it will re-render the component. So it not convenient for the big production ready apk
  // const store = useSelector((store) => store);

  //Major Performance Improvement (By subscribing to specific portion of component of our store(here specific portion of component is 'item'))
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const cartContext = useContext(CartContext);
  const loggedInUserState = useContext(LoggedInUserContext);

  const handleClearCart = async() => {
    // dispatch(clearCart());
    try{
      console.log("try clearcart")
      const res = await fetch("http://localhost:4000/clear-cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loggedInUserState.email
        })
      })

      const response = await res.json();

      if(response.error) {
        alert(response.error);
      } 
      else{
        cartContext.setCartItems(response.cart);
        alert("Cart cleared Successfully !");
      }
    }
    catch(error) {
      console.log(error);
    }
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
              Cart Items - {cartContext.cartItems.length}
            </h1>

            <button
              className="text-white bg-red-900 w-28 rounded-lg hover:bg-gray-700 p-2 m-auto font-pop2 font-normal"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>

          <div className="flex flex-wrap bg-yellow-200 m-10 rounded-xl">
            {(cartContext.cartItems).map((item) => (
              <FoodItem key={item.id} {...item} />
            ))}
          </div>
        </>
      ) : (
        <h1 className="font-pop2 font-bold text-2xl text-center flex items-center justify-center h-screen">
          Please Log-in to access this Page !
        </h1>
      )}
    </>
  );
};

export default Cart;
