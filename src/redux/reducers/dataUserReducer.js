const initialState = {
  isLoading: false,
  data: [],
};

export const dataAllUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_ALL_DATA":
      return {
        ...state,
        isLoading: true,
      };
    case "REQUEST_ALL_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
