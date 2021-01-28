import {
  CART_ADD_ITEM_FAIL,
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
} from "../constants/cart";

let initialState = {
  isLoading: false,
  isSuccess: false,
  cartItems: [],
  err: "",
};

export const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    // fetch featured products
    case CART_ADD_ITEM_REQUEST:
      return { ...state, isLoading: true };
    case CART_ADD_ITEM_SUCCESS:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_ADD_ITEM_FAIL:
      return { ...state, isSuccess: false };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== payload),
      };

    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
