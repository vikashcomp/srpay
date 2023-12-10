
import { addFundOtpAction } from "../actionTypes";
import axios from "axios";


export const fundOtpInitiate = () => ({
  type: addFundOtpAction.FUND_OTP_INITIATE,

});

export const fundOtpSuccess = (data) => ({
  type: addFundOtpAction.FUND_OTP_SUCCESS,
  payload: data,
});

export const fundOtpFailure = (data) => ({
  type: addFundOtpAction.FUND_OTP_FAILURE,
  payload: data,
});

// -------Add-fund-----
export function AddFundOtp(payload) {
  console.log('payloaddd', payload)
  return (dispatch) => {
    dispatch(fundOtpInitiate(payload));
    return new Promise((resolve, reject) =>
      axios.post('https://api.srpays.in/admin-add-fund-otp', payload)
        .then((response) => {
          console.log('REsponse', response)
          const data = response.data;
          // const data = response.data;
          // console.log('DATa',data)
          if (response.status == 200) {
            dispatch(fundOtpSuccess(data))
            console.log('successs')
          }
          else {
            dispatch(fundOtpFailure(data))
            console.log('failuree')
          }
          resolve(data)
        })

        .catch((err) => {
          dispatch(fundOtpFailure(err))
          reject(err)
        })
    )
  }
}



// ------get-admin-bank-list-----

export const bankListInitiate = () => ({
  type: addFundOtpAction.BANK_LIST_INITIATE
})

export const bankListSuccess = (data) => ({
  type: addFundOtpAction.BANK_LIST_SUCCESS,
  payload: data,
})

export const bankListFailure = (data) => ({
  type: addFundOtpAction.BANK_LIST_FAILURE,
  payload: data,
})

export function getbankList(payload) {
  console.log('payloaddd', payload)
  return (dispatch) => {
    dispatch(bankListInitiate(payload));
    return new Promise((resolve, reject) =>
      axios.post("https://api.srpays.in/admin-bank-list", payload)
        .then((response) => {
          const data = response.data;

          if (response.status == 200) {
            dispatch(bankListSuccess(data))
            console.log('successs')
          }
          else {
            dispatch(bankListFailure(data))
            console.log('failuree')
          }
          resolve(data)
        })

        .catch((err) => {
          dispatch(bankListFailure(err))
          reject(err)
        })
    )
  }
}



// -----Admin-ledger----------


export const fundAddListInitiate = () => ({
  type: addFundOtpAction.FUND_ADD_LIST_INITIATE,
});

export const fundAddListSuccess = (data) => ({
  type: addFundOtpAction.FUND_ADD_LIST_SUCCESS,
  payload: data,
});

export const fundAddListFailure = (data) => ({
  type: addFundOtpAction.FUND_ADD_LIST_FAILURE,
  payload: data,
});

export const getFundAddList = (payload) => async (dispatch) => {
  try {
    dispatch(fundAddListInitiate(payload));
    const response = await axios.post("https://api.srpays.in/admin-fund-add-list", payload);
    if (response.status === 200) {
      dispatch(fundAddListSuccess(response.data.data));
    } else {
      dispatch(fundAddListFailure(response.data.data));
    }
    return response;
  } catch (err) {
    dispatch(fundAddListFailure(err));
    return err.response
  }

}


// ---confirm-otp-action-----

export const confirmOtpInitiate = () => ({
  type: addFundOtpAction.FUND_ADD_LIST_INITIATE,
});

export const confirmOtpSuccess = (data) => ({
  type: addFundOtpAction.FUND_ADD_LIST_SUCCESS,
  payload: data,
});

export const confirmOtpFailure = (data) => ({
  type: addFundOtpAction.FUND_ADD_LIST_FAILURE,
  payload: data,
});


export function confirmOtp(payload) {
  console.log('payloaddd', payload)
  return (dispatch) => {
    dispatch(confirmOtpInitiate(payload));
    return new Promise((resolve, reject) =>
      axios.post("https://api.srpays.in/admin-add-fund-verify-otp", payload)
        .then((response) => {
          const data = response.data;

          if (response.status == 200) {
            dispatch(confirmOtpSuccess(data))
            console.log('successs')
          }
          else {
            dispatch(confirmOtpFailure(data))
            console.log('failuree')
          }
          resolve(data)
        })

        .catch((err) => {
          dispatch(confirmOtpFailure(err))
          reject(err)
        })
    )
  }
}






