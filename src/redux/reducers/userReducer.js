import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/users";

let initialState = {
  isLoading: false,
  isSuccess: false,
  user: [],
  list: [],
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
        list: [],
        err: "",
      };

    case REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_USER_FAIL:
      return {
        registerError: payload,
      };

    case USER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        list: payload,
      };

    case USER_LIST_FAIL:
      return {
        ...state,
        isSuccess: false,
      };

    default:
      return state;
  }
};
