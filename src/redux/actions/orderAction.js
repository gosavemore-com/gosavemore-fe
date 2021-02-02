import axiosRoute from "../../util/axiosRoute";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/orders";

export const fetchOrders = (order) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });
    const { data } = await axiosRoute().get(`/api/orders/${order}`);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: err.response });
  }
};

export const fetchOrders