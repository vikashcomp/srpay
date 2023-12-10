import axios from "axios";
import { userAction } from "../actionTypes";

export const userLoginInitiate=()=>({
    type:userAction.USER_LOGIN_INITIATE,
})

export const userLoginSucess=(data)=>({
    type:userAction.USER_LOGIN_SUCCESS,
    payload:data,
})

export const userLoginFailure=(data)=>({
    type:userAction.USER_LOGIN_FAILURE,
    payload:data,
})

export function userLogin(payload){
    // console.log('payloadddd',payload)
    return(dispatch)=>{
        dispatch(userLoginInitiate(payload));
        return new Promise((resolve,reject)=>
        axios
        .post('https://api.srpays.in/check-login',payload)
        .then((response)=>{
            const data=response.data;
            // console.log('responseee',response);
            if(data.status==200){
                dispatch(userLoginSucess(data));
            } else{
                dispatch(userLoginFailure(data));
            }
            resolve(data)
        })
        .catch((err)=>{
            dispatch(userLoginFailure(err));
            reject(err)
        })
        )
    }
}



//----------------------USER-STATUS-UPADTE--------------------------------//

export const userStatusInitiate=()=>({
    type:userAction.USER_STATUS_INITIATE,
})

export const userStatusSucess=(data)=>({
    type:userAction.USER_STATUS_SUCCESS,
    payload:data,
}) 

export const userStatusFailure=(data)=>({
    type:userAction.USER_STATUS_FAILURE,
    payload:data,
}) 

export function getUserStatus(payload){
    console.log('payloaddddd',payload)
    return(dispatch)=>{
        dispatch(userStatusInitiate(payload));
        return new Promise((resolve,reject)=>{
            axios.post("https://api.srpays.in/user-activate-reject",payload)
            .then((response)=>{
                const data=response.data;
                console.log('responseeee',response);
                if(data.status==200){
                    dispatch(userStatusSucess(data));
                } else{
                    dispatch(userStatusFailure(data));
                }
                resolve(data)
            })
            .catch((err)=>{
                dispatch(userStatusFailure(err));
                reject(err)
            })
        })
    }
}


//--------------------USER_ACTIVATED_LIST-------------------------//


export const userActivateInitiate=()=>({
    type:userAction.USER_ACTIVATE_INITIATE,
})


export const userActivateSuccess=(data)=>({
    type:userAction.USER_ACTIVATE_SUCCESS,
    payload:data,
})

export const userActivateFailure=(data)=>({
    type:userAction.USER_ACTIVATE_FAILURE,
    payload:data
})

export function getUserActivateList(payload){
    console.log('payload',payload)
    return(dispatch)=>{
        dispatch(userActivateInitiate(payload));
        return new Promise((resolve,reject)=>{
            axios.post('https://api.srpays.in/list-activated-user',payload)
            .then((response)=>{
                const data=response.data;
                console.log('ressssss',response);
                if(data.status==200){
                    dispatch(userActivateSuccess(data))
                    console.log('successsssssss')
                } else{
                    dispatch(userActivateFailure(data))
                    console.log('failuree')
                }
                resolve(data)
            })
            .catch((err)=>{
                dispatch(userActivateFailure(err))
                reject(err)
            })
        })
    }
}

//-------------------------USER_REJECTED_LIST---------------------------//

export const userRejectInitiate=()=>({
    type:userAction.USER_REJECT_INITIATE,
})

export const userRejectSuccess=(data)=>({
    type:userAction.USER_REJECT_SUCCESS,
    payload:data,
})

export const userRejectFailure=(data)=>({
        type:userAction.USER_REJECT_FAILURE,
        payload:data,
})

export function getUserRejectedList(payload){
    console.log('rejectttt payloadd',payload)
    return(dispatch)=>{
        dispatch(userRejectInitiate(payload));
        return new Promise((resolve,reject)=>{
            axios.post('https://api.srpays.in/list-rejected-user',payload)
            .then((response)=>{
                const data=response.data;
                console.log('response',response)
                if(data.status==200){
                    dispatch(userRejectSuccess(data))
                }
                else{
                    dispatch(userRejectFailure(data))
                }
                resolve(data)
            })
            .catch((err)=>{
                dispatch(userRejectFailure(err))
                reject(err)
            })
        })
    }
}