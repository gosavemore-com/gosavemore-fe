import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  items: [],
  err: "",
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_REQUEST:
      return { isLoading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { isLoading: false, isSuccess: true, items: payload };
    case FETCH_PRODUCT_FAIL:
      return { ...state, isSuccess: false };
    default:
      return state;
  }
};
