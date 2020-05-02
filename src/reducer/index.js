import selectedPageReducer from "./page";
import productListReducer from "./products";
import searchProductReducer from "./search";
import cartReducer from "./cart";
import sortTypeReducer from "./sort";

import { combineReducers } from "redux";

export default combineReducers({
  selectedPage: selectedPageReducer,
  searchTerm: searchProductReducer,
  sort: sortTypeReducer,
  productList: productListReducer,
  cart: cartReducer
});
