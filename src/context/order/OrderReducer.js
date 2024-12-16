const orderReducer = (state, action) => {
  switch (action.type) {
    case "GET_ORDER":
      const createOrderState = {
        ...state,
        order: action.payload.order,
      };
      action.payload.cb();
      return createOrderState;
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
