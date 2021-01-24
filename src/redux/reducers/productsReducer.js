import {
  FETCH_PRODUCTS_FEATURED_REQUEST,
  FETCH_PRODUCTS_FEATURED_SUCCESS,
  FETCH_PRODUCTS_FEATURED_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCT_ID_REQUEST,
  FETCH_PRODUCT_ID_SUCCESS,
  FETCH_PRODUCT_ID_FAIL,
  FETCH_ADVERTISEMENT_REQUEST,
  FETCH_ADVERTISEMENT_SUCCESS,
  FETCH_ADVERTISEMENT_FAIL,
} from "../constants/products";

let initialState = {
  isLoading: false,
  isSuccess: false,
  items: [],
  item: [],
  featured: [],
  advertisements: [],
  err: "",
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    // fetch featured products
    case FETCH_PRODUCTS_FEATURED_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_FEATURED_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, featured: payload };
    case FETCH_PRODUCTS_FEATURED_FAIL:
      return { ...state, isSuccess: false };

    // fetch all products
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, items: payload };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, isSuccess: false };

    // fetch a product id
    case FETCH_PRODUCT_ID_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_ID_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, item: payload };
    case FETCH_PRODUCT_ID_FAIL:
      return { ...state, isSuccess: false };

    // fetch a product id
    case FETCH_ADVERTISEMENT_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ADVERTISEMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        advertisements: payload,
      };
    case FETCH_ADVERTISEMENT_FAIL:
      return { ...state, isSuccess: false };

    default:
      return state;
  }
};
