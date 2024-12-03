import UpdateCart from "./UpdateCart";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      new UpdateCart(state).update();

      return {
        cartItems: state.cartItems,
      };

    case "REMOVE_ITEM":
      const result = {
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };

      new UpdateCart(result).update();

      return result;
    default:
      return state;
  }
};

export default cartReducer;
