import { moveDistributorAction} from '../actionTypes';

import axios from "axios";


export const moveDistributorInitiate=()=>({
    type:moveDistributorAction.MOVE_DISTRIBUTOR_INITIATE,
})

export const moveDistributorSuccess=(data)=>({
    type:moveDistributorAction.MOVE_DISTRIBUTOR_SUCCESS,
    payload:data,
})

export const moveDistributorFailure=(data)=>({
    type:moveDistributorAction.MOVE_DISTRIBUTOR_FAILURE,
    payload:data,
})


export function genFtrMoveDistributor(payload){
    // console.log('payloaddd',payload);
    return (dispatch)=>{
        dispatch(moveDistributorInitiate(payload));
        return new Promise((resolve,reject)=>
        axios
        .post('https://api.srpays.in/generate-ftr-move-dist',payload)
        .then((response)=>{
            const data=response.data
            
            if(data.status==200){
                dispatch(moveDistributorSuccess(data))
            } else{
                dispatch(moveDistributorFailure(data))
            }
            resolve(data)
        })

        .catch((err)=>{
            dispatch(moveDistributorFailure(err));
            reject(err);
        })
        )
           
    }
}


// -------save-move-distributor------


export const saveDistributorInitiate=()=>({
    type:moveDistributorAction.SAVE_DISTRIBUTOR_INITIATE,
})

export const saveDistributorSuccess=(data)=>({
    type:moveDistributorAction.SAVE_DISTRIBUTOR_SUCCESS,
    payload:data,
})

export const saveDistributorFailure=(data)=>({
    type:moveDistributorAction.SAVE_DISTRIBUTOR_FAILURE,
    payload:data,
})


export function saveFtrMoveDistributor(payload){
    // console.log('payloaddd',payload);
    return (dispatch)=>{
        dispatch(saveDistributorInitiate(payload));
        return new Promise((resolve,reject)=>
        axios
        .post('https://api.srpays.in/save-ftr-move-dist',payload)
        .then((response)=>{
            const data=response.data
            
            if(data.status==200){
                dispatch(saveDistributorSuccess(data))
            } else{
                dispatch(saveDistributorFailure(data))
            }
            resolve(data)
        })

        .catch((err)=>{
            dispatch(saveDistributorFailure(err));
            reject(err);
        })
        )
           
    }
}


