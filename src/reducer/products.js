import { PRODUCTS_LIST } from "../consts";

export default (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LIST: {
      return [...action.data.items];
    }
    default:
      return state;
  }
};
