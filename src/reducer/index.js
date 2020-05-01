import selectedPageReducer from "./page";
import productListReducer from "./products";

import { combineReducers } from "redux";

export default combineReducers({
  selectedPage: selectedPageReducer,
  productList: productListReducer
});
