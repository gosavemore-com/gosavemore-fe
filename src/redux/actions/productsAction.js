import axiosRoute from "../../util/axiosRoute";
import {
  FETCH_PRODUCTS_FEATURED_REQUEST,
  FETCH_PRODUCTS_FEATURED_SUCCESS,
  FETCH_PRODUCTS_FEATURED_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCT_ID_REQUEST,
  FETCH_PRODUCT_ID_FAIL,
  FETCH_PRODUCT_ID_SUCCESS,
  FETCH_ADVERTISEMENT_REQUEST,
  FETCH_ADVERTISEMENT_SUCCESS,
  FETCH_ADVERTISEMENT_FAIL,
} from "../constants/products";

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

export const fetchProductId = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_ID_REQUEST });

    const { data } = await axiosRoute().get(`/api/products/${id}`);

    dispatch({ type: FETCH_PRODUCT_ID_SUCCESS, payload: data });
    console.log(data);
  } catch (err) {
    dispatch({ type: FETCH_PRODUCT_ID_FAIL, payload: err.response });
  }
};

export const fetchAdvertisement = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ADVERTISEMENT_REQUEST });
    const { data } = await axiosRoute().get("/api/advertisements");

    dispatch({ type: FETCH_ADVERTISEMENT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_ADVERTISEMENT_FAIL, payload: err.response });
  }
};
