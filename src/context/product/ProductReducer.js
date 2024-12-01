const productReduer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "IS_LOADING":
      return {
        ...state,
        products: action.payload,
        isLoading: true,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productReduer;
