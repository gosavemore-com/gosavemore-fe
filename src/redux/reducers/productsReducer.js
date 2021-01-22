import {
  FETCH_PRODUCT_FEATURED_REQUEST,
  FETCH_PRODUCT_FEATURED_SUCCESS,
  FETCH_PRODUCT_FEATURED_FAIL,
} from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  items: [],
  featured: [],
  err: "",
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_FEATURED_REQUEST:
      return { isLoading: true };
    case FETCH_PRODUCT_FEATURED_SUCCESS:
      return { isLoading: false, isSuccess: true, featured: payload };
    case FETCH_PRODUCT_FEATURED_FAIL:
      return { ...state, isSuccess: false };
    default:
      return state;
  }
};
