import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
} from "../constants/orders";

let initialState = {
  isLoading: false,
  isSuccess: false,
  ordered: [],
  err: "",
};

export const orders = (state = initialState, { type, payload }) => {
  switch (type) {
    // fetch featured products
    case ORDER_CREATE_REQUEST:
      return { ...state, isLoading: true };
    case ORDER_CREATE_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, ordered: payload };
    case ORDER_CREATE_FAIL:
      return { ...state, isSuccess: false, err: payload };

    // fetch order details/saved
    case ORDER_DETAILS_REQUEST:
      return { ...state, isLoading: true };
    case ORDER_DETAILS_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true };
    case ORDER_DETAILS_FAIL:
      return { ...state, isSuccess: false, err: payload };

    default:
      return state;
  }
};
