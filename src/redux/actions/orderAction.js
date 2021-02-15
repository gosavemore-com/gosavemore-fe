import axiosRoute from "../../util/axiosRoute";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_SAVE_LOCATION,
  ORDER_SAVE_PRICE_DETAILS,
  ORDER_SAVE_PRODUCTS,
  ORDER_LIST_CLEAR,
  ORDER_SAVE_PAYMENT_DETAILS,
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

export const saveAddress = (data) => async (dispatch) => {
  dispatch({ type: ORDER_SAVE_LOCATION, payload: data });
};

export const saveProducts = (data) => async (dispatch) => {
  dispatch({ type: ORDER_SAVE_PRODUCTS, payload: data });
};

export const savePricingDetails = (data) => async (dispatch) => {
  dispatch({ type: ORDER_SAVE_PRICE_DETAILS, payload: data });
};

export const savePaymentDetails = (data) => async (dispatch) => {
  dispatch({ type: ORDER_SAVE_PAYMENT_DETAILS, payload: data });
};

export const clearOrders = () => async (dispatch) => {
  dispatch({ type: ORDER_LIST_CLEAR });
};
