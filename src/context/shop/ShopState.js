import React, { useReducer } from "react";
import ShopContext from "./shopContext";
import ShopReducer from "./ShopReducer";
import { ADD_TO_CART, SET_LOADING, REMOVE_FROM_CART, SET_QUANTITY } from "../types";
const ShopState = props => {
  const inititalState = {
    cartList: [
      {
        price: "4.50",
        quantity: 1,
        purchasable: true,
        catalog_visibility: "visible",
        id: "1711acc6-24bb-547c-b3e8-7e1939f6da8f",
        name: "The Smalls Lucky Dip",
        slug: "the-smalls-lucky-dip",
        regular_price: "",
        sale_price: "",
        description: "",
        images: [
          {
            alt: "",
            name: "6 single lucky dip",
            src: "https://i0.wp.com/waxhivewraps.com/wp-content/uploads/2019/08/6-single-lucky-dip.png?fit=3450%2C4934&ssl=1"
          }
        ],
        product_variations: [
          {
            price: "4.50",
            weight: "20"
          }
        ],
        wordpress_id: 3142
      }
    ],
    loading: false,
    cartOpen: false
  };

  const [state, dispatch] = useReducer(ShopReducer, inititalState);

  const addToCart = item => {
    console.log("ADD TO CART", item);
    // const updatedCart = state.cartList.push(item);
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
  };

  const setQuantity = (id, quantity) => {
    const updatedCart = state.cartList.map(item => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    dispatch({
      type: SET_QUANTITY,
      payload: updatedCart
    });
  };

  const removeFromCart = id => {
    const updatedCart = inititalState.cartList.filter(item => item.id !== id);

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
        cartList: state.cartList,
        loading: state.loading,
        addToCart,
        setQuantity,
        removeFromCart,
        setLoading
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopState;
