import React, { useReducer } from "react";
import axios from "axios";
import ShopContext from "./shopContext";
import ShopReducer from "./ShopReducer";
import { ADD_TO_CART, R, SET_LOADING, REMOVE_FROM_CART } from "../types";
import { postData } from "./posts";
const ShopState = props => {
  const inititalState = {
    cart: [],
    loadding: false
  };

  const [state, dispatch] = useReducer(ShopReducer, inititalState);

  const addToCart = item => {
    const updatedCart = inititalState.push(item);
    dispatch({
      type: ADD_TO_CART,
      payload: updatedCart
    });
  };

  const removeFromCart = item => {
    const updatedCart = inititalState.cart.filter(item => item !== item);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: updatedCart
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });
  // Search Users

  // Set Loading
  return (
    <ShopContext.Provider
      value={{
        cart: state.cart,
        loading: state.loading,
        addToCart,
        removeFromCart,
        setLoading
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopState;
