import { combineReducers } from "redux";
import { products } from "./reducers/productsReducer";

const reducer = combineReducers({
  products,
});

export default reducer;
