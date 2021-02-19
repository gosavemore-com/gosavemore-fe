import axiosRoute from "../../util/axiosRoute";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
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

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: err.response });
  }
};

export const updateOrderPay = (orderId, paymentResult) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });
    const { data } = await axiosRoute().put(
      `/api/orders/${orderId}/pay`,
      paymentResult
    );

    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ORDER_PAY_FAIL, payload: err.response });
  }
};

export const resetOrderPay = () => async (dispatch) => {
  dispatch({ type: ORDER_PAY_RESET });
};
