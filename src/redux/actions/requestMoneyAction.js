//--------------------------------Request-Money-List-----------------//

import { requestMoneyAction } from "../actionTypes";
import axios from 'axios';


export const requestListInitiate=()=>({
    type:requestMoneyAction.REQUEST_LIST_INITIATE
})

export const requestListSuccess=(data)=>({
    type:requestMoneyAction.REQUEST_LIST_SUCCESS,
    payload:data,
})

export const requestListFailure=(data)=>({
    type:requestMoneyAction.REQUEST_LIST_FAILURE,
    payload:data,
})

export function getrequestList(payload){
    console.log('payloaddd',payload)
    return(dispatch)=>{
        dispatch(requestListInitiate(payload));
        return new Promise((resolve,reject)=>
        axios.post('https://api.srpays.in/list-ftr',payload)
        .then((response)=>{
            const data=response.data;

            if(response.status==200){
                dispatch(requestListSuccess(data))
                console.log('successs')
            }
            else{
                dispatch(requestListFailure(data))
                console.log('failuree')
            }
            resolve(data)
        })

        .catch((err)=>{
            dispatch(requestListFailure(err))
            reject(err)
        })
        )
    }
}



//-------------------Generate-Reference-Number--------------------//

export const generateReferenceInitiate =()=>({
    type:requestMoneyAction.GENERATE_REFERENCE_INITIATE
})

export const generateReferenceSuccess=(data)=>({
    type:requestMoneyAction.GENERATE_REFERENCE_SUCCESS,
    payload:data,
})

export const generateReferenceFailure=(data)=>({
    type:requestMoneyAction.GENERATE_REFERENCE_FAILURE,
    payload:data,
})

export function getGenerateReferenceNumber(payload){
    console.log('payloaddddddd generate',payload)
    return (dispatch)=>{
        dispatch(generateReferenceInitiate(payload));

        return new Promise((resolve,reject)=>{
            axios.post('https://api.srpays.in/generate-ftr-no',payload)
            .then((response)=>{
                const data=response.data;

                if(response.status==200){
                    dispatch(generateReferenceSuccess(data));
                    console.log('successsssss')
                }
                else{
                    dispatch(generateReferenceFailure(data));
                    console.log('failureee')
                }
                resolve(data);
            })
            .catch((err)=>{
                dispatch(generateReferenceFailure(err));
                reject(err)
            })
        })
    }
}   


//--------------------SAVE-REQUEST-Money------------------------//

export const addRequestInitiate=()=>({
    type:requestMoneyAction.ADD_REQUEST_INITIATE
})

export const addRequestSuccess=(data)=>({
    type:requestMoneyAction.ADD_REQUEST_SUCCESS,
    payload:data,
})

export const addRequestFailure=(data)=>({
    type:requestMoneyAction.ADD_REQUEST_FAILURE,
    payload:data,
})

export function addRequestMoney(payload){
    console.log('payloadddd',payload)
    return(dispatch)=>{
        dispatch(addRequestInitiate(payload));

        return new Promise((resolve,reject)=>{
            axios.post('https://api.srpays.in/save-ftr',payload)
            .then((response)=>{
                const data=response.data;
                if(response.status==200){
                    dispatch(addRequestFailure(data));
                    console.log('successs')
                }
                else{
                    dispatch(addRequestFailure(data));
                    console.log('failureee')
                }
                resolve(data);
            })

            .catch((err)=>{
                dispatch(addRequestFailure(err));
                reject(err);
            })
        })
    }
}