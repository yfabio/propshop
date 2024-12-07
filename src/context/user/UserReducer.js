const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_CREDENTIALS":
      const updateState = {
        isLoading: false,
        user: action.payload,
      };
      localStorage.setItem("user", JSON.stringify(updateState));
      return updateState;
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
