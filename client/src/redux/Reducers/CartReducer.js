import * as actionType from "../Constants/CartConstants";

export const CartReducer = (state = { cardItems: []}, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const Item = action.payload;
      const exist = state.cardItems.find(product => product.id === Item.id);

      if (exist) {
        return {
          ...state,
          cardItems: state.cardItems.map((data) =>
            data.product === exist.product ? Item : data
          ),
        };
      } else {
        return { ...state, cardItems: [...state.cardItems, Item] };
      }
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cardItems: state.cardItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
