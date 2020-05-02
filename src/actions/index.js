import {
  FETCH_PRODUCTS,
  LOW_TO_HIGH,
  HIGH_TO_LOW,
  SORT_BY_DISCOUNT,
  SEARCH_TERM,
  SELECTED_PAGE,
  CART_ITEMS,
  REMOVE_ITEM,
  MODIFY_QUANTITY,
  SORT_TYPE
} from "../consts";

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS
  };
};

export const setSort = sort => {
  return {
    type: SORT_TYPE,
    payLoad: sort
  };
};

export const sortLowToHigh = () => {
  return {
    type: LOW_TO_HIGH
  };
};
export const sortHighToLow = () => {
  return {
    type: HIGH_TO_LOW
  };
};
export const sortByDiscount = () => {
  return {
    type: SORT_BY_DISCOUNT
  };
};
export const searchProduct = term => {
  return {
    type: SEARCH_TERM,
    payLoad: term
  };
};
export const switchPage = page => {
  return {
    type: SELECTED_PAGE,
    payLoad: page
  };
};

// ACTIONS FOR CART
export const addToCart = items => {
  return {
    type: CART_ITEMS,
    payLoad: items
  };
};

export const removeFromCart = item => {
  return {
    type: REMOVE_ITEM,
    payLoad: item
  };
};

export const modifyQuantity = (name, quantity) => {
  return {
    type: MODIFY_QUANTITY,
    payLoad: {
      name,
      quantity
    }
  };
};
