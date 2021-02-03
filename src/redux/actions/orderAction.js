import axiosRoute from "../../util/axiosRoute";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_SAVE_ADDRESS,
  ORDER_SAVE_PRODUCTS,
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

export const saveAddress = (data) => async (dispatch) => {
  dispatch({ type: ORDER_SAVE_ADDRESS, payload: data });
};

export const saveProducts = (data) => async (dispatch) => {
  dispatch({ type: ORDER_SAVE_PRODUCTS, payload: data });
};
