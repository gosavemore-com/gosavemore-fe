import { combineReducers } from "redux";
import { products } from "./reducers/productsReducer";
import { users } from "./reducers/userReducer";

const reducer = combineReducers({
  products,
  users,
});

export default reducer;
