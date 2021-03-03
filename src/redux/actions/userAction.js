import axiosRoute from "../../util/axiosRoute";

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from "../constants/users";

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

export const userRegister = (dataForm, history) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    console.log(history);

    const data = await axiosRoute().post("api/users/register", dataForm);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    history.push("/login");
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: err.response,
    });
  }
};

export const fetchUserList = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axiosRoute().get("/api/users");

    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: USER_LIST_FAIL, payload: err.response });
  }
};
