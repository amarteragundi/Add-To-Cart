import {
  FETCH_PRODUCTS,
  LOW_TO_HIGH,
  HIGH_TO_LOW,
  SORT_BY_DISCOUNT
} from "../consts";

export const fetchProducts = () => {
  return {
    type: FETCH_PRODUCTS
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
