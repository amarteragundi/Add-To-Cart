import { SEARCH_TERM } from "../consts";

export default (state = "", action) => {
  switch (action.type) {
    case SEARCH_TERM: {
      return action.payLoad;
    }
    default:
      return state;
  }
};
