import { verifyAdminAction } from "../actionTypes";
import axios from "axios";

export const verifyLoginInitiate=()=>({
    type:verifyAdminAction.VERIFY_LOGIN_INITIATE
})

export const verifyLoginSuccess=(data)=>({
    type:verifyAdminAction.VERIFY_LOGIN_SUCCESS,
    payload:data,
})

export const verifyLoginFailure=(data)=>({
    type:verifyAdminAction.VERIFY_LOGIN_FAILURE,
    payload:data,
    
})

export function getVerifyAdmin(payload){
    
    return(dispatch)=>{
        dispatch(verifyLoginInitiate());
        return new Promise((resolve,reject)=>
            axios.post('https://api.srpays.in/user-kyc-check',payload)
            .then((response)=>{
                const data=response.data;
               

                if(response.status==200){
                    dispatch(verifyLoginSuccess(data));
                   
                } else{
                    dispatch(verifyLoginFailure(data));
                   
                }

                resolve(data);
                return response;
            })
            .catch((error)=>{
                dispatch(verifyLoginFailure(error));
                reject(error);
                
            })
        )
    }
}

