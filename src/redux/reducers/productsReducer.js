import {
  FETCH_PRODUCTS_FEATURED_REQUEST,
  FETCH_PRODUCTS_FEATURED_SUCCESS,
  FETCH_PRODUCTS_FEATURED_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
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
    case FETCH_PRODUCTS_FEATURED_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_FEATURED_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, featured: payload };
    case FETCH_PRODUCTS_FEATURED_FAIL:
      return { ...state, isSuccess: false };

    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, items: payload };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, isSuccess: false };

    default:
      return state;
  }
};
