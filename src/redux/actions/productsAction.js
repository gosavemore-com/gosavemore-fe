import axiosRoute from "../../util/axiosRoute";
import {
  FETCH_PRODUCT_FEATURED_REQUEST,
  FETCH_PRODUCT_FEATURED_SUCCESS,
  FETCH_PRODUCT_FEATURED_FAIL,
  FETCH_PRODUCT_CATEGORIES_DRINKS_FAIL,
  FETCH_PRODUCT_CATEGORIES_DRINKS_REQUEST,
  FETCH_PRODUCT_CATEGORIES_DRINKS_SUCCESS,
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

export const fetchProductFeatured = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_FEATURED_REQUEST });
    const { data } = await axiosRoute().get("/api/products/featured");

    dispatch({ type: FETCH_PRODUCT_FEATURED_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_PRODUCT_FEATURED_FAIL, payload: err.response });
  }
};

export const fetchProductCategoriesDrinks = (category) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_CATEGORIES_DRINKS_REQUEST });

    const { data } = await axiosRoute().get(
      `/api/products/categories/${category}`
    );

    dispatch({ type: FETCH_PRODUCT_CATEGORIES_DRINKS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_DRINKS_FAIL,
      payload: err.response,
    });
  }
};

export const fetchProductCategoriesBottledCanned = (category) => async (
  dispatch
) => {
  try {
    dispatch({ type: FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_REQUEST });
    const { data } = await axiosRoute().get(
      `/api/products/categories/${category}`
    );

    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_BOTTLEDCANNED_FAIL,
      payload: err.response,
    });
  }
};

export const fetchProductCategoriesNoodles = (category) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_CATEGORIES_NOODLES_REQUEST });
    const { data } = await axiosRoute().get(
      `/api/products/categories/${category}`
    );

    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_NOODLES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_NOODLES_FAIL,
      payload: err.response,
    });
  }
};

export const fetchProductCategoriesRiceGrains = (category) => async (
  dispatch
) => {
  try {
    dispatch({ type: FETCH_PRODUCT_CATEGORIES_RICEGRAINS_REQUEST });
    const { data } = await axiosRoute().get(
      `/api/products/categories/${category}`
    );

    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_RICEGRAINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_RICEGRAINS_FAIL,
      payload: err.response,
    });
  }
};

export const fetchProductCategoriesSaucesSeasonings = (category) => async (
  dispatch
) => {
  try {
    dispatch({ type: FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_REQUEST });
    const { data } = await axiosRoute().get(
      `/api/products/categories/${category}`
    );

    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_CATEGORIES_SAUCESSEASONINGS_FAIL,
      payload: err.response,
    });
  }
};
