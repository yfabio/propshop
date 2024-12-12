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
      const removeItemState = {
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };

      new UpdateCart(removeItemState).update();

      return removeItemState;
    case "SHIPPING_ADDRESS":
      const saveShippingAddressState = {
        ...state,
        shippingAddress: action.payload.address,
      };
      new UpdateCart(saveShippingAddressState).update();
      action.payload.cb();
      return saveShippingAddressState;
    case "PAYMENT_METHOD":
      const paymentMethodState = {
        ...state,
        paymentMethod: action.payload.payment,
      };
      new UpdateCart(paymentMethodState).update();
      action.payload.cb();
      return paymentMethodState;
    case "CLEAR_CART":
      const clearCartState = {
        ...action.payload,
      };
      new UpdateCart(clearCartState).update();
      return clearCartState;
    default:
      return state;
  }
};

export default cartReducer;
