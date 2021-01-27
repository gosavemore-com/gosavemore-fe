import { combineReducers } from "redux";
import { products } from "./reducers/productsReducer";
import { users } from "./reducers/userReducer";
import { cart } from "./reducers/cartReducer";
import { orders } from "./reducers/ordersReducer";

const reducer = combineReducers({
  products,
  users,
  cart,
  orders,
});

export default reducer;
