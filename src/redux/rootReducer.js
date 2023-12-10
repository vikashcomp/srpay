import { combineReducers } from 'redux';
import listForm from './reducers/ListReducer'
import kycForm from './reducers/kycReducer';
import verifyForm from './reducers/verifyAdminReducer';
import slabForm from './reducers/slabReducer';
import requestForm from './reducers/requestMoneyReducer';
import fundRequestForm from './reducers/fundRequestReducer';
import khataBookData from "./reducers/walletReducer";
import addList from "./reducers/addListReducer";
import bankList from "./reducers/bankListReducer";
import partnerLedgerList from "./reducers/partnerLedgerReducer";
import moveDistributorForm from "./reducers/moveDistributorReducer";

const rootReducer = combineReducers({
  kycForm,
  listForm,
  verifyForm,
  slabForm,
  requestForm,
  fundRequestForm,
  khataBookData,
  addList,
  bankList,
  partnerLedgerList,
  moveDistributorForm
})

export default rootReducer;