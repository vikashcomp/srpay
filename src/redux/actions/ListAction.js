import { ListAction } from "../actionTypes";
import axios from "axios";

export const listLoginInitiate = () => ({
  type: ListAction.LIST_LOGIN_INITIATE,
});

export const listLoginSuccess = (data) => ({
  type: ListAction.LIST_LOGIN_SUCCESS,
  payload: data,
});

export const listLoginFailure = (data) => ({
  type: ListAction.LIST_LOGIN_FAILURE,
  payload: data,
});

export function getUserList(payload) {
  return (dispatch) => {
    dispatch(listLoginInitiate(payload));
    return new Promise((resolve, reject) =>
      axios
        .post("https://api.srpays.in/list-pending-kyc-check", payload)
        .then((response) => {
          const data = response.data;
          if (response.status == 200) {
            dispatch(listLoginSuccess(data));
          } else {
            dispatch(listLoginFailure(data));
          }
          resolve(data);
          return response;
        })
        .catch((error) => {
          dispatch(listLoginFailure(error));
          reject(error);
        })
    );
  };
}
