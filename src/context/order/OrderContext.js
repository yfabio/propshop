import { createContext, useContext, useReducer } from "react";
import orderReducer from "../order/OrderReducer";
import { useNavigate } from "react-router-dom";
import CartContext from "../cart/CartContext";
import useAxios from "../../hooks/useAxios";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const initialState = {
    order: {},
    isLoading: false,
    error: null,
  };

  const axios = useAxios();

  const [state, dispatch] = useReducer(orderReducer, initialState);

  const navigate = useNavigate();

  const { clearCart } = useContext(CartContext);

  const loading = (value) => dispatch({ type: "IS_LOADING", payload: value });

  const createOrder = async (order) => {
    try {
      loading(true);
      const { data } = await axios.post(`/api/orders`, order);
      if (data.id) {
        clearCart();
        navigate(`/order/${data.id}`);
      }
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    } finally {
      loading(false);
    }
  };

  const getOrderDetails = async (id) => {
    try {
      loading(true);
      const { data } = await axios.get(`/api/orders/${id}`);
      dispatch({
        type: "GET_ORDER",
        payload: {
          order: data,
          cb: () => {
            clearCart();
            navigate(`/order/${data.id}`);
          },
        },
      });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    } finally {
      loading(false);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        order: state.order,
        isLoading: state.isLoading,
        error: state.error,
        createOrder,
        getOrderDetails,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
