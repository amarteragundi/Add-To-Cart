import {
  FETCH_PRODUCTS,
  SEARCH_TERM,
  SELECTED_PAGE,
  CART_ITEMS,
  REMOVE_ITEM,
  MODIFY_QUANTITY,
  SORT_TYPE,
  PRICE_RANGE
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

export const filterByPrice = range => {
  return {
    type: PRICE_RANGE,
    payLoad: {
      min: range[0],
      max: range[1]
    }
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
