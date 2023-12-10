import { blockunblockAction } from "../actionTypes";
import axios from 'axios';

export const blockNumberInitiate = () => ({
    type: blockunblockAction.BLOCK_NUMBER_INITIATE,
})

export const blockNumberSuccess = (data) => ({
    type: blockunblockAction.BLOCK_NUMBER_SUCCESS,
    payload: data,
})

export const blockNumberFailure = (data) => ({
    type: blockunblockAction.BLOCK_NUMBER_FAILURE,
    payload: data,
})

// ------block-unblock------

export function blockunblock(payload){
    // console.log('payloaddd',payload);
    return (dispatch)=>{
        dispatch(blockNumberInitiate(payload));
        return new Promise((resolve,reject)=>
        axios
        .post('https://api.srpays.in/user-block-unblock',payload)
        .then((response)=>{
            const data=response.data
            
            if(data.status==200){
                dispatch(blockNumberSuccess(data))
            } else{
                dispatch(blockNumberFailure(data))
            }
            resolve(data)
        })

        .catch((err)=>{
            dispatch(blockNumberFailure(err));
            reject(err);
        })
        )
        

        
    }
}
