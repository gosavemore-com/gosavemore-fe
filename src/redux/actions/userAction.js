import axiosRoute from "../../util/axiosRoute";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from "../constants";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });
    const { data } = await axiosRoute().post("/api/users/login", {
      email,
      password,
    });

    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: LOGIN_USER_FAIL, payload: err.response });
  }
};
