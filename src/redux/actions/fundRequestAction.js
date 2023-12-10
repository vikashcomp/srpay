import { fundRequestAction } from "../actionTypes";

import axios from "axios";

export const FtrNumberInitaite = () => ({
    type: fundRequestAction.FTR_NUMBER_INITIATE
})

export const FtrNumberSuccess = (data) => ({
    type: fundRequestAction.FTR_NUMBER_SUCCESS,
    payload: data,
})

export const FtrNumberFailure = (data) => ({
    type: fundRequestAction.FTR_NUMBER_FAILURE,
    payload: data,
})

export function getFtrNumber(payload) {
    // console.log('payloaddddd ftrrrr',payload);
    return (dispatch) => {
        dispatch(FtrNumberInitaite(payload));
        return new Promise((resolve, reject) =>
            axios.post('https://api.srpays.in/fund-req-generate-ftr-no', payload)
                .then((response) => {
                    const data = response.data;


                    if (response.status = 200) {
                        dispatch(FtrNumberSuccess(data.data))

                    } else {
                        dispatch(FtrNumberFailure(data.data))
                    }
                    resolve(data);
                    return response
                })

                .catch((err) => {
                    dispatch(FtrNumberFailure(err))
                    reject(err)
                })
        )
    }
}


//---------------------FUND-REQUEST------------------------//

export const FundRequestInitite = () => ({
    type: fundRequestAction.FUND_REQUEST_INITIATE
})

export const FundRequestSuccess = (data) => ({
    type: fundRequestAction.FUND_REQUEST_SUCCESS,
    payload: data,
})

export const FundRequestFailure = (data) => ({
    type: fundRequestAction.FUND_REQUEST_FAILURE,
    payload: data,
})

export function getFundRequest(payload) {
    console.log('payloadddd fund req', payload);
    return (dispatch) => {
        dispatch(FundRequestInitite(payload));
        return new Promise((resolve, reject) =>
            axios.post('https://api.srpays.in/save-fund-ftr', payload)
                .then((response) => {
                    const data = response.data;
                    console.log('resssponse fundd', response)

                    if (response.status == 200) {
                        dispatch(FundRequestSuccess(data.data))
                        console.log('successss fund')
                    } else {
                        dispatch(FundRequestFailure(data.data))
                        console.log('failureee fund')
                    }
                    resolve(data);
                    return response;
                })

                .catch((err) => {
                    dispatch(FundRequestFailure(err))
                    reject(err)
                })
        )
    }
}

//=============================fundReuestLISTAdmin---------------------------------

export const fundListAdminInitiate = () => ({
    type: fundRequestAction.FUND_LIST_ADMIN_INITIATE
})

export const fundListAdminSuccess = (data) => ({
    type: fundRequestAction.FUND_LIST_ADMIN_SUCCESS,
    payload: data,
})

export const fundListAdminFailure = (data) => ({
    type: fundRequestAction.FUND_LIST_ADMIN_FAILURE,
    payload: data,
})

export function getFundListAdmin(payload) {
    return (dispatch) => {
        dispatch(fundListAdminInitiate(payload));
        return new Promise((resolve, reject) =>
            axios.post('https://api.srpays.in/admin-list-fund-request', payload)
                .then((response) => {
                    const data = response.data;
                    if (response.status == 200) {
                        dispatch(fundListAdminSuccess(data.data))
                    } else {
                        dispatch(fundListAdminFailure(data.data))
                    }
                    resolve(data);
                    return response;
                })
                .catch((err) => {
                    dispatch(fundListAdminFailure(err))
                    reject(err)
                })
        )
    }
}


//---------------------FUND-REQUEST-LIST----------------------------//


export const fundListInitiate = () => ({
    type: fundRequestAction.FUND_LIST_INITIATE
})

export const fundListSuccess = (data) => ({
    type: fundRequestAction.FUND_LIST_SUCCESS,
    payload: data,
})

export const fundListFailure = (data) => ({
    type: fundRequestAction.FUND_LIST_FAILURE,
    payload: data,
})

export function getFundList(payload) {
    console.log('getFundListt', payload);
    return (dispatch) => {
        dispatch(fundListInitiate(payload));
        return new Promise((resolve, reject) =>
            axios.post('https://api.srpays.in/list-fund-request', payload)
                .then((response) => {
                    const data = response.data;
                    if (response.status == 200) {
                        dispatch(fundListSuccess(data.data))
                        console.log('successss listtttt')
                    } else {
                        dispatch(fundListFailure(data.data))
                    }
                    resolve(data);
                    return response;
                })
                .catch((err) => {
                    dispatch(fundListFailure(err))
                    reject(err)
                })
        )
    }
}


// ------------------------FUND-REQUEST-ADMIN-accept/rejected button work-----------//

export const fundAcceptInitiate = () => ({
    type: fundRequestAction.FUND_ACCEPT_INITIATE
})

export const fundAcceptSuccess = (data) => ({
    type: fundRequestAction.FUND_ACCEPT_SUCCESS,
    payload: data,
})

export const fundAcceptFailure = (data) => ({
    type: fundRequestAction.FUND_ACCEPT_FAILURE,
    payload: data,
})

export function getFundAccept(payload) {
    console.log('getFundAccepttt', payload);
    return (dispatch) => {
        dispatch(fundAcceptInitiate(payload));
        return new Promise((resolve, reject) =>
            axios.post('https://api.srpays.in//admin-fund-request-accept', payload)
                .then((response) => {
                    const data = response.data;
                    if (response.status == 200) {
                        dispatch(fundAcceptSuccess(data.data))
                    } else {
                        dispatch(fundAcceptFailure(data.data))
                    }
                    resolve(data);
                    return response;
                })
                .catch((err) => {
                    dispatch(fundAcceptFailure(err))
                    reject(err)
                })
        )
    }
}

//============================FundList2================================


export const fundListSecondInitiate = () => ({
    type: fundRequestAction.FUND_LIST_SECOND_INITIATE
})

export const fundListSecondSuccess = (data) => ({
    type: fundRequestAction.FUND_LIST_SECOND_SUCCESS,
    payload: data,
})

export const fundListSecondFailure = (data) => ({
    type: fundRequestAction.FUND_LIST_SECOND_FAILURE,
    payload: data,
})

export function getFundListSecond(payload) {
    return (dispatch) => {
        dispatch(fundListSecondInitiate(payload));
        return new Promise((resolve, reject) =>
            axios.post('https://api.srpays.in///admin-list-fund-request-l2', payload)
                .then((response) => {
                    const data = response.data;
                    if (response.status == 200) {
                        dispatch(fundListSecondSuccess(data.data))
                    } else {
                        dispatch(fundListSecondFailure(data.data))
                    }
                    resolve(data);
                    return response;
                })
                .catch((err) => {
                    dispatch(fundListSecondFailure(err))
                    reject(err)
                })
        )
    }
}

//==========================================refund2==============================


export const fundAcceptSecondInitiate = () => ({
    type: fundRequestAction.FUND_ACCEPT_SECOND_INITIATE
})

export const fundAcceptSecondSuccess = (data) => ({
    type: fundRequestAction.FUND_ACCEPT_SECOND_SUCCESS,
    payload: data,
})

export const fundAcceptSecondFailure = (data) => ({
    type: fundRequestAction.FUND_ACCEPT_SECOND_FAILURE,
    payload: data,
})

export function getFundAcceptSecond(payload) {
    return (dispatch) => {
        dispatch(fundAcceptSecondInitiate(payload));
        return new Promise((resolve, reject) =>
            axios.post('https://api.srpays.in//admin-fund-request-accept-l2', payload)
                .then((response) => {
                    const data = response.data;
                    if (response.status == 200) {
                        dispatch(fundAcceptSecondSuccess(data.data))
                    } else {
                        dispatch(fundAcceptSecondFailure(data.data))
                    }
                    resolve(data);
                    return response;
                })
                .catch((err) => {
                    dispatch(fundAcceptSecondFailure(err))
                    reject(err)
                })
        )
    }
}