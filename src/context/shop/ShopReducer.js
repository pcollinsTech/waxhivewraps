import { ADD_TO_CART, REMOVE_FROM_CART, SET_LOADING, SET_QUANTITY } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.payload);
      const updateCart = state.cartList.concat(action.payload);
      console.log(updateCart);

      return {
        ...state,
        cartList: state.cartList.concat(action.payload),
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
