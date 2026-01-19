import { createContext, useReducer, useState } from "react";
import CartReducer from "./CartReducer";
import useStorage from "../../hooks/useStorage";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(CartReducer, []);

  useStorage("cart", items, dispatch, "SET_CART");

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const isInCart = (id) => items.some((item) => item.id === id);

  const addToCart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const incrementQuantity = (id) =>
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });

  const decrementQuantity = (id) =>
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });

  return (
    <CartContext.Provider
      value={{
        items,
        totalQuantity,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
