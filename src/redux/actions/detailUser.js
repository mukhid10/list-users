const getUserDetailReq = () => {
  return {
    type: "GET_USER_DETAIL_REQ",
  };
};

const getUserDetailSuccess = (data) => {
  return {
    type: "GET_USER_DETAIL_SUCCESS",
    payload: data,
  };
};

export const getUserDetailAction = (id) => {
  return (dispatch) => {
    dispatch(getUserDetailReq());
    const result = `https://reqres.in/api/users/${id}`;
    dispatch(getUserDetailSuccess(result));
  };
};
