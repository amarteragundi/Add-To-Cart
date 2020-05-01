import {
  PRODUCTS_LIST,
  LOW_TO_HIGH,
  HIGH_TO_LOW,
  SORT_BY_DISCOUNT
} from "../consts";

export default (state = [], action) => {
  debugger;
  switch (action.type) {
    case PRODUCTS_LIST: {
      return [...action.data.items];
    }

    case LOW_TO_HIGH: {
      const lowToHighSorted = state.sort((a, b) =>
        a.price.actual < b.price.actual ? -1 : 1
      );
      return [...lowToHighSorted];
    }

    case HIGH_TO_LOW: {
      const lowToHighSorted = state.sort((a, b) =>
        a.price.actual > b.price.actual ? -1 : 1
      );
      return [...lowToHighSorted];
    }
    case SORT_BY_DISCOUNT: {
      const byDiscount = state.sort((a, b) =>
        a.discount > b.discount ? -1 : 1
      );
      return [...byDiscount];
    }
    default:
      return state;
  }
};
