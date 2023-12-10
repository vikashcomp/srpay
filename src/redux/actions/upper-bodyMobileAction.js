import {mobileAction} from '../actionTypes';
import axios from "axios";


export const mobileLoginInitiate=()=>({
    type:mobileAction.MOBILE_LOGIN_INITIATE,
})

export const mobileLoginSuccess=(data)=>({
    type:mobileAction.MOBILE_LOGIN_SUCCESS,
    payload:data,
})

export const mobileLoginFailure=(data)=>({

    type:mobileAction.MOBILE_LOGIN_FAILURE,
    payload:data,
})


export function adduppersendOtp(payload){
    
    return (dispatch)=>{
        dispatch(mobileLoginInitiate(payload));
        return new Promise((resolve,reject)=>
        axios
        .post('https://api.srpays.in/add-user-send-otp',payload)
        .then((response)=>{
            const data=response.data
        
            if(data.status==200){
                dispatch(mobileLoginSuccess(data))
            } else{
                dispatch(mobileLoginFailure(data))
            }
            resolve(data)
        })

        .catch((err)=>{
            dispatch(mobileLoginFailure(err));
            reject(err);
        })
        )
         
    }
}



//----------------------Verify-Otp-------------------//

export const otpLoginInitiate=()=>({
    type:mobileAction.OTP_LOGIN_INITIATE,
})

export const otpLoginSuccess=(data)=>({
    type:mobileAction.OTP_LOGIN_SUCCESS,
    payload:data,
})

export const otpLoginFailure=(data)=>({
    type:mobileAction.OTP_LOGIN_FAILURE,
    payload:data,
})


export function addupperverifyOtp(payload){
    console.log('payloaddd',payload)
    return (dispatch)=>{
        dispatch(otpLoginInitiate(payload))
        return new Promise((resolve,reject)=>{
            axios
            .post('https://api.srpays.in/add-user-verify-otp',payload)
            .then((response)=>{
                const data=response.data
                console.log('resssss',response);
                if(data.status==200){
                    dispatch(otpLoginSuccess(data))
                } else{
                    dispatch(otpLoginFailure(data))
                }
                resolve(data);
            })

            .catch((err)=>{
                dispatch(otpLoginFailure(err));
                reject(err);
            })
        })
    }
}