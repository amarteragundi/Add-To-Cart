import { SELECTED_PAGE, HOMEPAGE } from "../consts";

export default (state = HOMEPAGE, action) => {
  switch (action.type) {
    case SELECTED_PAGE: {
      return action.payLoad;
    }

    default:
      return state;
  }
};
