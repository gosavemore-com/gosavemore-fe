import axiosRoute from "../../util/axiosRoute";
import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEMS,
} from "../constants/cart";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    dispatch({ type: CART_ADD_ITEM_REQUEST });
    const { data } = await axiosRoute().get(`/api/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM_SUCCESS,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity,
      },
    });
  } catch (err) {
    dispatch({ type: CART_ADD_ITEM_FAIL, payload: err.response });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });
};

export const clearCart = () => async (dispatch) => {
  dispatch({ type: CART_CLEAR_ITEMS });
};
