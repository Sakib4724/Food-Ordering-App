import { createContext, useState } from "react";
export const CartContext = createContext(null);

CartContext.displayName = "CartContext";

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    return <CartContext.Provider value={{cartItems, setCartItems}}>{props.children}</CartContext.Provider>
};