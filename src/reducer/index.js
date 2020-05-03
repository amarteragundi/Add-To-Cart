import selectedPageReducer from "./page";
import productListReducer from "./products";
import searchProductReducer from "./search";
import cartReducer from "./cart";
import sortTypeReducer from "./sort";
import priceRangeReducer from "./priceRange";
import modalReducer from "./modal";

import { combineReducers } from "redux";

export default combineReducers({
  selectedPage: selectedPageReducer,
  searchTerm: searchProductReducer,
  sort: sortTypeReducer,
  priceRange: priceRangeReducer,
  productList: productListReducer,
  cart: cartReducer,
  modal: modalReducer
});
