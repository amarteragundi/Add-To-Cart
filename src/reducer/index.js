import selectedPageReducer from "./page";
import productListReducer from "./products";
import searchProductReducer from "./search";
import cartReducer from "./cart";

import { combineReducers } from "redux";

export default combineReducers({
  selectedPage: selectedPageReducer,
  searchTerm: searchProductReducer,
  productList: productListReducer,
  cart: cartReducer
});
