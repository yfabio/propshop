import { createContext, useReducer } from "react";
import orderReducer from "../order/OrderReducer";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OrderContext = createContext();

const ordersUrl = process.env.REACT_APP_API_ORDERS;

export const OrderProvider = ({ children }) => {
  const initialState = {
    order: {},
    isLoading: false,
    error: "",
  };

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(orderReducer, initialState);

  const loading = (value) => dispatch({ type: "IS_LOADING", payload: value });

  const createOrder = async (user, order) => {
    try {
      loading(true);
      const { data } = await axios.post(`${ordersUrl}/api/orders`, order, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: user.token,
        },
      });
      dispatch({
        type: "CREATE_ORDER",
        payload: {
          order: data,
          cb: () => navigate(`/order/${data.id}`),
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
        isLoading: state.isLoading,
        error: state.error,
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
