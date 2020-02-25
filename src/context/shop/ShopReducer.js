import { ADD_TO_CART, REMOVE_FROM_CART, SET_LOADING, SET_QUANTITY } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: action.payload,
        loading: false
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: action.payload,
        loading: false
      };
    case SET_QUANTITY:
      return {
        ...state,
        cartList: action.payload,
        loading: false
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
};
