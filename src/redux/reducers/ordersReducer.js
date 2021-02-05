import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_SAVE_ADDRESS,
  ORDER_SAVE_PRODUCTS,
  ORDER_SAVE_PRICE_DETAILS,
  ORDER_LIST_CLEAR,
} from "../constants/orders";

let initialState = {
  isLoading: false,
  isSuccess: false,
  order: [],
  address: [],
  prices: [],
  payments: [],
  delivery: [],
  // prices: {
  //   taxPrice: 0,
  //   shippingPrice: 0,
  //   totalPrice: 0,
  // },
  // payments: {
  //   isPaid: false,
  //   paidAt: "",
  // },
  // delivery: {
  //   isDelivered: false,
  //   deliveredAt: "",
  // },
  err: "",
};

export const orders = (state = initialState, { type, payload }) => {
  switch (type) {
    // fetch featured products
    case ORDER_CREATE_REQUEST:
      return { ...state, isLoading: true };
    case ORDER_CREATE_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, order: payload };
    case ORDER_CREATE_FAIL:
      return { ...state, isSuccess: false, err: payload };

    case ORDER_SAVE_ADDRESS:
      return { ...state, address: payload };

    case ORDER_SAVE_PRODUCTS:
      return { ...state, order: payload };

    case ORDER_SAVE_PRICE_DETAILS:
      return {
        ...state,
        prices: payload,
      };

    case ORDER_LIST_CLEAR:
      return {
        ...state,
        order: [],
        address: [],
        prices: [],
        payments: [],
        delivery: [],
      };
    default:
      return state;
  }
};
