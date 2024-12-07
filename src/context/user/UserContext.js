import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";
import axios from "axios";
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { isLoading: false, error: "" };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const isLoading = (value) => dispatch({ type: "IS_LOADING", payload: value });

  const login = async (credential) => {
    isLoading(true);
    try {
      const { data } = await axios.post("/api/auth/signin", credential);
      dispatch({ type: "SET_CREDENTIALS", payload: data });
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    } finally {
      isLoading(false);
    }
  };

  const register = async (user) => {
    try {
      isLoading(true);
      await axios.post("/api/auth/signup", user);
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    } finally {
      isLoading(false);
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: { isLoading: false, error: "" } });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        token: state.token,
        login,
        logout,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
