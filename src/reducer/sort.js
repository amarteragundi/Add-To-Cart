import { SORT_TYPE, HIGH_TO_LOW } from "../consts";

export default (state = HIGH_TO_LOW, action) => {
  switch (action.type) {
    case SORT_TYPE: {
      return action.payLoad;
    }

    default:
      return state;
  }
};
