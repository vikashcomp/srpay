import { kycAction } from "../actionTypes";

import axios from 'axios';

export const kycLoginInitiate = () => ({
    type: kycAction.KYC_LOGIN_INITIATE,
})

export const kycLoginSuccess = (data) => ({
    type: kycAction.KYC_LOGIN_SUCCESS,
    payload: data,
})

export const kycLoginFailure = (data) => ({
    type: kycAction.KYC_LOGIN_FAILURE,
    payload: data,
})


export function getKyc(payload) {
    
    return (dispatch) => {
        dispatch(kycLoginInitiate(payload));
        return new Promise((resolve, reject) =>
            axios.post('https://api.srpays.in/get-login-info', payload)
                .then((response) => {
                    const data = response.data;
                   

                    if (response.status == 200) {
                        dispatch(kycLoginSuccess(data.data))
                        
                    } else {
                        dispatch(kycLoginFailure(data.data))
                    }
                    resolve(data);
                    return response
                })

                .catch((err) => {
                    dispatch(kycLoginFailure(err))
                    reject(err);

                })

        )
    }

}
