import { SELECTED_PAGE, HOMEPAGE } from "../consts";

const initState = {
  selectedPage: HOMEPAGE
};

export default (state = initState, action) => {
  switch (action.type) {
    case SELECTED_PAGE: {
      return state;
    }

    default:
      return state;
  }
};
