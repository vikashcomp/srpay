import { panAction } from "../actionTypes";

import axios from "axios";

export const panLoginInitaite=()=>({
    type:panAction.PAN_LOGIN_INITIATE,
})

export const panLoginSuccess=(data)=>({
    type:panAction.PAN_LOGIN_SUCCESS,
    paylaod:data,
})

export const panLoginFailure=(data)=>({
    type:panAction.PAN_LOGIN_FAILURE,
    payload:data,
})

export function loginPan(payload){
   
    return(dispatch)=>{
        dispatch(panLoginInitaite(payload));
        return new Promise((resolve,reject)=>
            axios
            .post('https://api.srpays.in/verify-pan',payload)
            .then((response)=>{
                const data=response.data;
                

                if(data.status==200){
                    dispatch(panLoginSuccess(data))
                } else{
                    dispatch(panLoginFailure(data))
                }
                resolve(data);
            })

            .catch((err)=>{
                dispatch(panLoginFailure(err))
                reject(err);
            })
        )
    }
}