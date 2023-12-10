import { ledgerAction } from "../actionTypes";

const initialState = {
    partnerLedgerData: [],
    walletBalanceData: [],
    loader: false,
}

export default function partnerLedgerList(state = initialState, { type, payload }) {

    switch (type) {
        case ledgerAction.PARTNER_LEDGER_INITIATE: {
            return {
                ...state, loader: true, partnerLedgerData: []
            }
        }

        case ledgerAction.PARTNER_LEDGER_SUCCESS: {
            return {
                ...state, loader: false, partnerLedgerData: payload
            }
        }

        case ledgerAction.PARTNER_LEDGER_FAILURE: {
            return {
                ...state, loader: false, partnerLedgerData: []
            }
        }

        // -------walletbalance----------

        case ledgerAction.WALLET_BALANCE_INITIATE:{
            return{
                ...state,loader:true,walletBalanceData:[]
            }
        }

        case ledgerAction.WALLET_BALANCE_SUCCESS:{
            return{
                ...state,loader:false,walletBalanceData:payload
            }
        }

        case ledgerAction.WALLET_BALANCE_FAILURE:{
            return{
                ...state,loader:false,walletBalanceData:payload
            }
        }

        
        



        default:
            return state
    }
}


