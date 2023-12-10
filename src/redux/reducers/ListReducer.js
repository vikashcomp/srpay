import { ListAction, paymentDepositAction } from "../actionTypes";

const initialState = {
    listData: [],
    paymentListData:[],
    requestUtrId:[],
    loader: false,
    loginStatus: false,
}

export default function listForm(state = initialState, { type, payload }) {
    //    console.log('payloaddd',payload)
    switch (type) {
        case ListAction.LIST_LOGIN_INITIATE: {
            return {
                ...state, loader: true, listData: []
            }
        }

        case ListAction.LIST_LOGIN_SUCCESS: {

            return {
                ...state, loader: false, listData: payload

            }
        }

        case ListAction.LIST_LOGIN_FAILURE: {
            return {
                ...state, loader: false, listData: []
            }

        }


// ----------payment-list-data----

        case paymentDepositAction.PAYMENT_LIST_INITIATE:{
            return{
                ...state,loader:true,paymentListData:[]
            }
        }

        case paymentDepositAction.PAYMENT_LIST_SUCCESS:{
            return{
                ...state,loader:false,paymentListData:payload
            }
        }

        case paymentDepositAction.PAYMENT_LIST_FAILURE:{
            return{
                ...state,loader:false,paymentListData:payload
            }
        }

        // ------UTRNumber----

        case paymentDepositAction.UTR_NUMBER_INITIATE:{
            return{
                ...state,loader:true,requestUtrId:[]
            }
        }

        case paymentDepositAction.UTR_NUMBER_SUCCESS:{
            return{
                ...state,loader:false,requestUtrId:payload
            }
        }

        case paymentDepositAction.UTR_NUMBER_FAILURE:{
            return{
                ...state,loader:false,requestUtrId:payload
            }
        }


        default:
            return state
    }
}