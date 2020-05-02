import { SORT_TYPE } from "../consts";

export default (state = "", action) => {
  switch (action.type) {
    case SORT_TYPE: {
      return action.payLoad;
    }

    default:
      return state;
  }
};
