import axiosRoute from "../../util/axiosRoute";
import {
  FETCH_PRODUCT_FEATURED_REQUEST,
  FETCH_PRODUCT_FEATURED_SUCCESS,
  FETCH_PRODUCT_FEATURED_FAIL,
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
