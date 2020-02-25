import React, { useReducer, createContext } from "react";

const ShopStateContext = createContext();
const ShopDispatchContext = createContext();

const initialState = {
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

function reducer(state, action) {
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
}

const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ShopStateContext.Provider value={state}>
      <ShopDispatchContext.Provider value={dispatch}>{children}</ShopDispatchContext.Provider>
    </ShopStateContext.Provider>
  );
};

export default ShopContextProvider;
