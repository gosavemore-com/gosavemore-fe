import axiosRoute from "../../util/axiosRoute";
import {
  FETCH_PRODUCTS_FEATURED_REQUEST,
  FETCH_PRODUCTS_FEATURED_SUCCESS,
  FETCH_PRODUCTS_FEATURED_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../constants";

export const fetchProductFeatured = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_FEATURED_REQUEST });
    const { data } = await axiosRoute().get("/api/products/featured");

    dispatch({ type: FETCH_PRODUCTS_FEATURED_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_PRODUCTS_FEATURED_FAIL, payload: err.response });
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    const { data } = await axiosRoute().get("/api/products/");

    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload: err.response,
    });
  }
};
