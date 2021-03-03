import {
  CART_ADD_ITEM_FAIL,
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
  CART_SAVE_PRODUCTS,
  CART_SAVE_SHIPPING,
  CART_SAVE_PRICE_DETAILS,
  CART_LIST_CLEAR,
  CART_SAVE_PAYMENT_DETAILS,
} from "../constants/cart";

let initialState = {
  isLoading: false,
  isSuccess: false,
  cartItems: [],
  order: [],
  shipping: [],
  prices: [],
  payments: [],
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
          isLoading: false,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          isLoading: false,
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

    case CART_SAVE_PRODUCTS:
      return { ...state, order: payload };

    // save location
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: payload };

    case CART_SAVE_PRICE_DETAILS:
      return {
        ...state,
        prices: payload,
      };

    case CART_SAVE_PAYMENT_DETAILS:
      return {
        ...state,
        payments: payload,
      };

    case CART_LIST_CLEAR:
      return {
        ...state,
        isLoading: false,
        order: [],
        shipping: [],
        prices: [],
        payments: [],
      };

    default:
      return state;
  }
};
