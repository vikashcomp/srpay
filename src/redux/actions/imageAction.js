import { imageAction } from "../actionTypes";
import axios from 'axios';

export const imageLoginInitiate=()=>({
    type:imageAction.IMAGE_LOGIN_INITIATE
})

export const imageLoginSuccess=(data)=>({
    type:imageAction.IMAGE_LOGIN_SUCCESS,
    payload:data,
})

export const imageLoginFailure=(data)=>({
    type:imageAction.IMAGE_LOGIN_FAILURE,
    payload:data,
})

export function getImage(payload){
    
    return(dispatch)=>{
        dispatch(imageLoginInitiate());
        return new Promise((resolve,reject)=>{
            axios.get(`https://api.srpays.in/download-file?filepath=${payload.filepath}`,{responseType: 'blob'})
            .then((response)=>{
               
                const data=response.data;
                let image=response.config.url;

                if(response.status===200){
                    window.localStorage.setItem('imageToken',JSON.stringify(image))
                    
                    dispatch(imageLoginSuccess(data));
                } else{
                    dispatch(imageLoginFailure(data));
                }

                   
                resolve(data)
                return response.config.url
            })
            .catch((error)=>{
                dispatch(imageLoginFailure(error));
                reject(error)

            })
        })

    }
}