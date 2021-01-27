import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from "../constants/orders";

let initialState = {
  isLoading: false,
  isSuccess: false,
  order: [],
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
    default:
      return state;
  }
};
