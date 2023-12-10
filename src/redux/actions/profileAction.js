import { multiPartData } from "../../utils";
import { profileAction } from "../actionTypes";
import axios from "axios";

//============================================adharProof======================================
export const adharPhotoInitiate = () => ({
    type: profileAction.ADHAR_PHOTO_INITIATE,
  });
  
  export const adharPhotoSuccess = (data) => ({
    type: profileAction.ADHAR_PHOTO_SUCCESS,
    payload: data,
  });
  
  export const adharPhotoFailure = (data) => ({
    type: profileAction.ADHAR_PHOTO_FAILURE,
    payload: data,
  });
  
  export const adharPhoto=(payload)=>async(dispatch)=> {
      try {
        const updatedData = multiPartData(payload)
        dispatch(adharPhotoInitiate(payload));
        const response = await axios.post("https://api.srpays.in/change-adhar",updatedData);
        if (response.status === 200) {
          dispatch(adharPhotoSuccess(response.data));
        } else {
          dispatch(adharPhotoFailure(response.data));
        }
        return response;
      } catch (err) {
        dispatch(adharPhotoFailure(err));
        return err.response
      }
     
    }
//===================================panPhoto=======================================

export const panPhotoInitiate = () => ({
    type: profileAction.PAN_PHOTO_INITIATE,
  });
  
  export const panPhotoSuccess = (data) => ({
    type: profileAction.PAN_PHOTO_SUCCESS,
    payload: data,
  });
  
  export const panPhotoFailure = (data) => ({
    type: profileAction.PAN_PHOTO_FAILURE,
    payload: data,
  });
  
  export const panPhoto=(payload)=>async(dispatch)=> {
      try {
        const updatedData = multiPartData(payload)
        dispatch(panPhotoInitiate(payload));
        const response = await axios.post("https://api.srpays.in/change-pan",updatedData);
        if (response.status === 200) {
          dispatch(panPhotoSuccess(response.data));
        } else {
          dispatch(panPhotoFailure(response.data));
        }
        return response;
      } catch (err) {
        dispatch(panPhotoFailure(err));
        return err.response
      }
     
    }
//=================================bankPhoto======================================

export const bankPhotoInitiate = () => ({
    type: profileAction.BANK_PROOF_INITIATE,
  });
  
  export const bankPhotoSuccess = (data) => ({
    type: profileAction.BANK_PROOF_SUCCESS,
    payload: data,
  });
  
  export const bankPhotoFailure = (data) => ({
    type: profileAction.BANK_PROOF_FAILURE,
    payload: data,
  });
  
  export const bankPhoto=(payload)=>async(dispatch)=> {
      try {
        const updatedData = multiPartData(payload)
        dispatch(bankPhotoInitiate(payload));
        const response = await axios.post("https://api.srpays.in/change-bank",updatedData);
        if (response.status === 200) {
          dispatch(bankPhotoSuccess(response.data));
        } else {
          dispatch(bankPhotoFailure(response.data));
        }
        return response;
      } catch (err) {
        dispatch(bankPhotoFailure(err));
        return err.response
      }
     
    }

//====================================photoChange==================================
export const changePhotoInitiate = () => ({
  type: profileAction.CHANGE_PHOTO_INITIATE,
});

export const changePhotoSuccess = (data) => ({
  type: profileAction.CHANGE_PHOTO_SUCCESS,
  payload: data,
});

export const changePhotoFailure = (data) => ({
  type: profileAction.CHANGE_PHOTO_FAILURE,
  payload: data,
});

export const changePhoto=(payload)=>async(dispatch)=> {
    try {
      const updatedData = multiPartData(payload)
      dispatch(changePhotoInitiate(payload));
      const response = await axios.post("https://api.srpays.in/change-photo",updatedData);
      if (response.status === 200) {
        dispatch(changePhotoSuccess(response.data));
      } else {
        dispatch(changePhotoFailure(response.data));
      }
      return response;
    } catch (err) {
      dispatch(changePhotoFailure(err));
      return err.response
    }
   
  }
//============================================send for review===============================

export const sendForReviewInitiate = () => ({
  type: profileAction.SEND_FOR_REVIEW_INITIATE,
});

export const sendForReviewSuccess = (data) => ({
  type: profileAction.SEND_FOR_REVIEW_SUCCESS,
  payload: data,
});

export const sendForReviewFailure = (data) => ({
  type: profileAction.SEND_FOR_REVIEW_FAILURE,
  payload: data,
});

export const sendForReview=(payload)=>async(dispatch)=> {
    try {
      dispatch(sendForReviewInitiate(payload));
      const response = await axios.post("https://api.srpays.in/user-send-review",payload);
      if (response.status === 200) {
        dispatch(sendForReviewSuccess(response.data));
      } else {
        dispatch(sendForReviewFailure(response.data));
      }
      return response;
    } catch (err) {
      dispatch(sendForReviewFailure(err));
      return err.response
    }
   
  }