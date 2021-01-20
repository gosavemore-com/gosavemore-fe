import axiosRoute from "../../util/axiosRoute";

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  FETCH_PRODUCT_REQUEST,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from "../constants";

export const loginUser = (emailPasswordData, history) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });
    const { data } = await axiosRoute().post(
      "/api/users/login",
      emailPasswordData
    );

    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });

    localStorage.setItem("token", data.token);
    history.push("/");
  } catch (err) {
    dispatch({ type: LOGIN_USER_FAIL, payload: err.response.data.message });
  }
};

export const logoutUser = (history) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_USER_REQUEST });
    localStorage.removeItem("token");

    dispatch({ type: LOGOUT_USER_SUCCESS });
    history.push("/");
  } catch (err) {
    dispatch({ type: LOGOUT_USER_FAIL });
    console.log(err);
  }
};
