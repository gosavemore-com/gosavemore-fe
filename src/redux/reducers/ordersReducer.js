import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from "../constants/orders";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isPaid: false,
  ordered: [],
  err: "",
};

export const orders = (state = initialState, { type, payload }) => {
  switch (type) {
    // create order list
    case ORDER_CREATE_REQUEST:
      return {
        isLoading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        ordered: payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        isSuccess: false,
        err: payload,
      };

    // fetch order details/saved
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        ordered: payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        ...state,
        isSuccess: false,
        err: payload,
      };
    case ORDER_PAY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isPaid: true,
      };
    case ORDER_PAY_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    case ORDER_PAY_RESET:
      return {
        ...state,
        ordered: [],
        isPaid: false,
      };
    default:
      return state;
  }
};
