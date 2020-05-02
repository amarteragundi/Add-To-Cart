import { PRICE_RANGE } from "../consts";

const initialState = {
  min: 6000,
  max: 100000
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRICE_RANGE: {
      return {
        min: action.payLoad.min,
        max: action.payLoad.max
      };
    }
    default:
      return state;
  }
};
