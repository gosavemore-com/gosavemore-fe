import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  user: [],
  err: "",
};

export const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isSuccess: false,
        err: payload,
      };
    default:
      return state;
  }
};
