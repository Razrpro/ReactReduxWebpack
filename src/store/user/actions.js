export const USER_GET_SUCCESS = "USER_GET_SUCCESS";
export const USER_GET_FAILED = "USER_GET_FAILED";
export const USER_GET_UNDEFINED = "USER_GET_UNDEFINED";

export const getUserSuccess = data => ({
  type: USER_GET_SUCCESS,
  data
});

export const getUserFailed = () => ({
  type: USER_GET_FAILED
});

export const getUserUndefined = () => ({
  type: USER_GET_UNDEFINED
});

export const getUser = (
  start,
) => dispatch => {
  dispatch(getUserUndefined());
  dispatch(getUserSuccess());
}
