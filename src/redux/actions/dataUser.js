import axios from "axios";

const getReqData = () => {
  return {
    type: "REQUEST_ALL_DATA",
  };
};

const getReqSuccess = (data) => {
  return {
    type: "REQUEST_ALL_DATA_SUCCESS",
    payload: data,
  };
};

export const getAllDataAction = (data) => {
  return async (dispatch) => {
    dispatch(getReqData());
    const result = await axios.get("https://reqres.in/api/users?page=2");
    dispatch(getReqSuccess(result.data.data));
  };
};
