import { CART_ITEMS, REMOVE_ITEM, MODIFY_QUANTITY } from "../consts";

export default (state = [], action) => {
  switch (action.type) {
    case CART_ITEMS: {
      const itemExists = state.filter(
        item => item.name === action.payLoad.name
      );
      let items;
      if (itemExists?.length) {
        items = [
          ...state.filter(item => item.name !== action.payLoad.name),
          {
            ...itemExists[0],
            quantity: itemExists[0].quantity + 1
          }
        ];
      } else {
        items = [
          ...state,
          { ...action.payLoad, quantity: 1, index: state.length + 1 }
        ];
      }

      return items;
    }

    case REMOVE_ITEM: {
      return [...state.filter(item => item.name !== action.payLoad)];
    }

    case MODIFY_QUANTITY: {
      const newState = [
        ...state.filter(item => item.name !== action.payLoad.name)
      ];
      return [
        ...newState,
        {
          ...state.filter(item => item.name === action.payLoad.name)[0],
          quantity: action.payLoad.quantity
        }
      ];
    }

    default:
      return state;
  }
};
