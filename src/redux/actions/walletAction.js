
import { walletAction } from "../actionTypes";
import axios from "axios";

//============================================reqApprvList======================================
export const requestApproveListInitiate = () => ({
    type: walletAction.REQUEST_APPROVE_LIST_INITIATE,
  });
  
  export const requestApproveListSuccess = (data) => ({
    type: walletAction.REQUEST_APPROVE_LIST_SUCCESS,
    payload: data,
  });
  
  export const requestApproveListFailure = (data) => ({
    type: walletAction.REQUEST_APPROVE_LIST_FAILURE,
    payload: data,
  });
  
  export const getApproveReqList=(payload)=>async(dispatch)=> {
      try {
        dispatch(requestApproveListInitiate(payload));
        const response = await axios.post("https://api.srpays.in/parent-request-money-list",payload);
        if (response.status === 200) {
          dispatch(requestApproveListSuccess(response.data.data));
        } else {
          dispatch(requestApproveListFailure(response.data.data));
        }
        return response;
      } catch (err) {
        dispatch(requestApproveListFailure(err));
        return err.response
      }
     
    }
//=========================================reqAcceptReject===================================

export const requestAcceptRejectInitiate = () => ({
    type: walletAction.REQUEST_ACCEPT_REJECT_INITIATE,
  });
  
  export const requestAcceptRejectSuccess = (data) => ({
    type: walletAction.REQUEST_ACCEPT_REJECT_SUCCESS,
    payload: data,
  });
  
  export const requestAcceptRejectFailure = (data) => ({
    type: walletAction.REQUEST_ACCEPT_REJECT_FAILURE,
    payload: data,
  });
  
  export const requestAcceptReject=(payload)=>async(dispatch)=> {
      try {
        dispatch(requestAcceptRejectInitiate(payload));
        const response = await axios.post("https://api.srpays.in//accept-ftr",payload);
        if (response.status === 200) {
          dispatch(requestAcceptRejectSuccess(response.data.data));
        } else {
          dispatch(requestAcceptRejectFailure(response.data.data));
        }
        return response;
      } catch (err) {
        dispatch(requestAcceptRejectFailure(err));
        return err.response
      }
     
    }