import { formAction } from "../actionTypes";
import axios from "axios";

export const formLoginInitiate = () => ({
    type: formAction.FORM_LOGIN_INITIATE

})

export const formLoginSuccess = (data) => ({
    type: formAction.FORM_LOGIN_SUCCESS,
    payload: data,

})

export const formLoginFailure = (data) => ({
    type: formAction.FORM_LOGIN_FAIILURE,
    payload: data,

})


export function getForm(payload) {
    // console.log('payload', payload)
    return (dispatch) => {
        dispatch(formLoginInitiate(payload));
        return new Promise((resolve, reject) =>
            axios.post("https://api.srpays.in/kyc-agent", payload)
                .then((response) => {
                    const data = response.data;
                    // console.log('ressponseeee', response);

                    if (data.success == true) {
                        dispatch(formLoginSuccess(data));
                        // console.log('success')
                    } else {
                        dispatch(formLoginFailure(data));
                        // console.log('failure')
                    }
                    resolve(data);
                    return response
                })

                .catch((err) => {
                    dispatch(formLoginFailure(err));
                    reject(err);

                })

        )
    }
}