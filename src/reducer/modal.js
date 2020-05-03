import { SHOW_MODAL } from "../consts";

export default (state = { modal: null, show: false }, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...action.payLoad
      };
    }

    default:
      return state;
  }
};
