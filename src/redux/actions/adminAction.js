import { adminAction } from "../actionTypes";

import axios from 'axios';

export const adminLoginInitiate=()=>({
    type:adminAction.ADMIN_LOGIN_INITIATE
})

export const adminLoginSuccess=(data)=>({
    type:adminAction.ADMIN_LOGIN_SUCCESS,
    payload:data,
})

export const adminLoginFailure=(data)=>({
    type:adminAction.ADMIN_LOGIN_FAILURE,
    payload:data,
})

export function getAdminLogin(payload){
    // console.log('payloadddddddd',payload)
    return (dispatch)=>{
        dispatch(adminLoginInitiate(payload));
        return new Promise((resolve,reject)=>
        axios.post('https://api.srpays.in/check-admin-login',payload)
        .then((response)=>{
            const data=response.data
            // console.log('respoooooo',response);
            if(response.status==200){
                dispatch(adminLoginSuccess(data));
                // console.log('successss')
            } else{
                dispatch(adminLoginFailure(data));
                // console.log('failureeeeeeeeee')
            }
            resolve(data);
        })
        .catch((err)=>{
            dispatch(adminLoginFailure(err));
            reject(err);
        })
        )
    }
}