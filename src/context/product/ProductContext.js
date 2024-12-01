import { createContext, useReducer } from "react";
import productReduer from "./ProductReducer";
import axios from "axios";

const ProductContext = createContext();

const imgUrl = process.env.REACT_APP_IMG_URL;

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    product: {},
    isLoading: false,
    error: "",
  };

  const [state, dispatch] = useReducer(productReduer, initialState);

  const isLoading = () => dispatch({ type: "IS_LOADING" });

  const getProducts = async () => {
    isLoading();
    try {
      const { data } = await axios.get("/api/products");

      const values = data.map((product) => {
        product.image = `${imgUrl}${product.image}`;
        return product;
      });

      dispatch({ type: "GET_PRODUCTS", payload: values });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.data.message });
    }
  };

  const getProduct = async (id) => {
    isLoading();
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      data.image = `${imgUrl}${data.image}`;
      dispatch({ type: "GET_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.data.message });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        product: state.product,
        isLoading: state.isLoading,
        error: state.error,
        getProducts,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
