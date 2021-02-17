import axiosRoute from "../../util/axiosRoute";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../constants/orders";

export const createOrder = (orders) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });
    const { data } = await axiosRoute().post("/api/orders", orders);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: err.response });
  }
};

export const fetchOrderById = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });
    const { data } = await axiosRoute().get(`/api/orders/${id}`);

    console.log("this is the data", data);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: err.response });
  }
};
