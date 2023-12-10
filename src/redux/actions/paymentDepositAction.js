import { paymentDepositAction } from "../actionTypes";

import axios from  "axios";

export const UtrNumberInitaite=()=>({
    type:paymentDepositAction.UTR_NUMBER_INITIATE
})

export const UtrNumberSuccess=(data)=>({
    type:paymentDepositAction.UTR_NUMBER_SUCCESS,
    payload:data,
})

export const UtrNumberFailure=(data)=>({
    type:paymentDepositAction.UTR_NUMBER_FAILURE,
    payload:data,
})

export function getUtrNumber(payload){
    console.log('payloadddd utrrr',payload);
    return(dispatch)=>{
        dispatch(UtrNumberInitaite(payload));
        return new Promise((resolve,reject)=>{
            axios.post('https://api.srpays.in/payment-dep-generate-ftr-no',payload)
            .then((response)=>{
                const data=response.data;
               
                if(response.status==200){
                    dispatch(UtrNumberSuccess(data.data))
                    console.log('sucessss utr')
                } else{
                    dispatch(UtrNumberFailure(data.data))
                }
                resolve(data);
                return response
            })
            .catch((err)=>{
                dispatch(UtrNumberFailure(err))
                reject(err)
            })
        })
    }
}


//--------------------------Payment-Deposit------------------------------//

export const PaymentDepositInitaite=()=>({
    type:paymentDepositAction.PAYMENT_DEPOSIT_INITIATE
})

export const PaymentDepositSuccess=(data)=>({
    type:paymentDepositAction.PAYMENT_DEPOSIT_SUCCESS,
    payload:data,
})

export const PaymentDepositFailure=(data)=>({
    type:paymentDepositAction.PAYMENT_DEPOSIT_FAILURE,
    payload:data,
})

export function getpaymentDeposit(payload){
    console.log('paymnet depositttttttt',payload);
    return(dispatch)=>{
        dispatch(PaymentDepositInitaite(payload));
        return new Promise((resolve,reject)=>
            axios.post('https://api.srpays.in/save-dep-payment-ftr',payload)
            .then((response)=>{
                const data=response.data;
               

                if(response.status==200){
                    dispatch(PaymentDepositSuccess(data.data))
                    console.log('payment sucessssss')
                } else{
                    dispatch(PaymentDepositFailure(data.data))
                    console.log('payment failuree')
                }
                resolve(data);
                return response;
            })

            .catch((err)=>{
                dispatch(PaymentDepositFailure
                    (err))
                reject(err)
            })
        )
    }
}


//---------------------------------PAYMENT-DEPOSIT_LIST---------------------------------//

export const PaymentListInitiate=()=>({
    type:paymentDepositAction.PAYMENT_LIST_INITIATE
})

export const PaymentListSuccess=(data)=>({
    type:paymentDepositAction.PAYMENT_LIST_SUCCESS,
    payload:data,
})

export const PaymentListFailure=(data)=>({
    type:paymentDepositAction.PAYMENT_LIST_FAILURE,
    payload:data,
})

export function getPaymentList(payload){
    console.log('payment listttttttt',payload)
    return(dispatch)=>{
        dispatch(PaymentListInitiate(payload));
        return new Promise((resolve,reject)=>
            axios.post('https://api.srpays.in/list-dep-payment',payload)
            .then((response)=>{
                const data=response.data
                console.log('responseee listtttt',response)

                if(response.status==200){
                    dispatch(PaymentListSuccess(data.data))
                    console.log('payment Listtt sucessssss')
                } else{
                    dispatch(PaymentListFailure(data.data))
                    console.log('payment listttt failure')
                }
                resolve(data);
                return response;
            })
            .catch((err)=>{
                dispatch(PaymentListFailure(err))
                    reject(err)
            })
        )
    }
}