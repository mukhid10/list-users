const initialState = {
  isLoading: false,
  data: {},
};

export const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DETAIL_REQ":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_USER_DETAIL_SUCCESS":
      localStorage.setItem("userByID", JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
