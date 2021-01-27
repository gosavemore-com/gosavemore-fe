import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../constants/users";

let initialState = {
  isLoading: false,
  isSuccess: false,
  user: [],
  err: "",
};

export const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: payload,
        err: "",
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        isSuccess: false,
        user: [],
        err: payload,
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isSuccess: false,
        user: [],
        err: "",
      };

    case REGISTER_USER_REQUEST:
      return {
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        isLoading: false,
      };
    case REGISTER_USER_FAIL:
      return {
        registerError: payload,
      };

    default:
      return state;
  }
};
