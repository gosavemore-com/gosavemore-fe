import axiosRoute from "../../util/axiosRoute";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAIL,
} from "../constants";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    const { data } = await axiosRoute().get("/api/products");

    dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_PRODUCT_FAIL, payload: err.response });
  }
};
