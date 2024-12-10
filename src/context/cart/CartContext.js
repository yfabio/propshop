import { createContext, useReducer } from "react";
import cartReducer from "./CartReducer";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const navigate = useNavigate();

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const saveShippingAddress = (address) => {
    dispatch({
      type: "SHIPPING_ADDRESS",
      payload: {
        address,
        cb: () => navigate("/payment"),
      },
    });
  };

  const savePaymentMethod = (payment) => {
    dispatch({
      type: "PAYMENT_METHOD",
      payload: {
        payment,
        cb: () => navigate("/placeorder"),
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        shippingAddress: state.shippingAddress,
        addToCart,
        removeItem,
        saveShippingAddress,
        savePaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
