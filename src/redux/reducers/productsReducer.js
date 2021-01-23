import {
  FETCH_PRODUCT_FEATURED_REQUEST,
  FETCH_PRODUCT_FEATURED_SUCCESS,
  FETCH_PRODUCT_FEATURED_FAIL,
  FETCH_PRODUCT_CATEGORIES_DRINKS_REQUEST,
  FETCH_PRODUCT_CATEGORIES_DRINKS_SUCCESS,
  FETCH_PRODUCT_CATEGORIES_DRINKS_FAIL,
  FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_REQUEST,
  FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_SUCCESS,
  FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_FAIL,
  FETCH_PRODUCT_CATEGORIES_NOODLES_REQUEST,
  FETCH_PRODUCT_CATEGORIES_NOODLES_SUCCESS,
  FETCH_PRODUCT_CATEGORIES_NOODLES_FAIL,
  FETCH_PRODUCT_CATEGORIES_RICEGRAINS_REQUEST,
  FETCH_PRODUCT_CATEGORIES_RICEGRAINS_SUCCESS,
  FETCH_PRODUCT_CATEGORIES_RICEGRAINS_FAIL,
  FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_REQUEST,
  FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_SUCCESS,
  FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_FAIL,
} from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  drinks: [],
  bottledCanned: [],
  noodles: [],
  riceGrains: [],
  saucesSeasonings: [],
  featured: [],
  err: "",
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_FEATURED_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_FEATURED_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, featured: payload };
    case FETCH_PRODUCT_FEATURED_FAIL:
      return { ...state, isSuccess: false };

    case FETCH_PRODUCT_CATEGORIES_DRINKS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_CATEGORIES_DRINKS_SUCCESS:
      return { ...state, isLoading: false, isSuccess: true, drinks: payload };
    case FETCH_PRODUCT_CATEGORIES_DRINKS_FAIL:
      return { ...state, isSuccess: false };

    case FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        bottledCanned: payload,
      };
    case FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_FAIL:
      return { ...state, isSuccess: false };

    case FETCH_PRODUCT_CATEGORIES_NOODLES_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_CATEGORIES_NOODLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        noodles: payload,
      };
    case FETCH_PRODUCT_CATEGORIES_NOODLES_FAIL:
      return { ...state, isSuccess: false };

    // rice and grains
    case FETCH_PRODUCT_CATEGORIES_RICEGRAINS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_CATEGORIES_RICEGRAINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        riceGrains: payload,
      };
    case FETCH_PRODUCT_CATEGORIES_RICEGRAINS_FAIL:
      return { ...state, isSuccess: false };

    // sauces and seasonings
    case FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        saucesSeasonings: payload,
      };
    case FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_FAIL:
      return { ...state, isSuccess: false };

    default:
      return state;
  }
};
