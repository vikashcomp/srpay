import { ledgerAction } from "../actionTypes";
import axios from "axios";

export const partnerLedgerInitiate = () => ({
    type:  ledgerAction.PARTNER_LEDGER_INITIATE
  })
  
  export const partnerLedgerSuccess = (data) => ({
    type:  ledgerAction.PARTNER_LEDGER_SUCCESS,
    payload: data,
  })
  
  export const partnerLedgerFailure = (data) => ({
    type: ledgerAction.PARTNER_LEDGER_FAILURE,
    payload: data,
  })

export function partnerLedgerList(payload) {
    console.log('payloaddd', payload)
    return (dispatch) => {
      dispatch(partnerLedgerInitiate(payload));
      return new Promise((resolve, reject) =>
        axios.post("https://api.srpays.in/partner-ledger", payload)
          .then((response) => {
            const data = response.data;
  
            if (response.status == 200) {
              dispatch(partnerLedgerSuccess(data))
              console.log('successs')
            }
            else {
              dispatch(partnerLedgerFailure(data))
              console.log('failuree')
            }
            resolve(data)
          })
  
          .catch((err) => {
            dispatch(partnerLedgerFailure(err))
            reject(err)
          })
      )
    }
  }

// -------walletbalance--------

export const walletBalanceInitiate = () => ({
  type:  ledgerAction.WALLET_BALANCE_INITIATE
})

export const walletBalanceSuccess = (data) => ({
  type:  ledgerAction.WALLET_BALANCE_SUCCESS,
  payload: data,
})

export const walletbalanceFailure = (data) => ({
  type: ledgerAction.WALLET_BALANCE_FAILURE,
  payload: data,
})

export function walletBalance(payload) {
  console.log('payloaddd', payload)
  return (dispatch) => {
    dispatch(walletBalanceInitiate(payload));
    return new Promise((resolve, reject) =>
      axios.post("https://api.srpays.in/wallet-bal", payload)
        .then((response) => {
          const data = response.data;

          if (response.status == 200) {
            dispatch(walletBalanceSuccess(data))
            console.log('successs')
          }
          else {
            dispatch(walletbalanceFailure(data))
            console.log('failuree')
          }
          resolve(data)
        })

        .catch((err) => {
          dispatch(walletbalanceFailure(err))
          reject(err)
        })
    )
  }
}