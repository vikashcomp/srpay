import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, Slide } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Mobile from "./Components/Mobile";
import Pan from "./Components/Pan";
import Welcome from "./Components/Welcome";
import Kyc from "./Components/Kyc";
import Otp from "./Components/Otp";
import Pandeatils from "./Components/Pandeatils";
import Profile from "./Components/Profile";
import Adminlogin from "./Components/Adminlogin";
import AgentDashboard from "./Components/AgentDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import VerifyAdmin from "./Components/VerifyAdmin";
import UserProfileStatus from "./Components/UserProfileStatus";
import { dashboard, kyc, kycType, login, verify } from "./constants/adminRoutes";
import AdminKycList from "./Components/AdminKycList";
import AdminHeader from "./Components/AdminHeader";
import AdminNav from "./Components/AdminNav";
import ApprovedKycList from "./Components/ApprovedKycList";
import RejectedKycList from "./Components/RejectedKycList";
import InstantTopup from './Components/InstantTopup'
import MoveMasterDistributor from "./Components/MoveMasterDistributor";
import PaymentDepositDistributorOnline from './Components/PaymentDepositDistributorOnline'
import RequestMoney from "./Components/RequestMoney";
import Commission from "./Components/Commission";
import FundRequest from "./Components/FundRequest";
import DistributorLedger from "./Components/DistributorLedger";
import MoveBankDistributor from "./Components/MoveBankDistributor";
import OperatorCommision from "./Components/OperatorCommision";
import CreateSlab from "./Components/CreateSlab";
import Recharge from "./Components/Recharge";
import DistributorState from "./Components/DistributorState";
import MasterDistributor from "./Components/MasterDistributor";
import Aeps from "./Components/Aeps";
import AddUser from "./Components/AddUser";
import AgentCommision from "./Components/AgentCommision";
import BankDetail from "./Components/BankDetail";
import MoveDistributor from "./Components/MoveDistributor";
import CreditCardPayment from "./Components/CreditCardPayment";
import AadharPay from "./Components/AadharPay";
import AgentLedger from "./Components/AgentLedger";
import FundRequestHistory from "./Components/FundRequestHistory";
import AepsHistory from "./Components/AepsHistory";
import AaharpayHistory from "./Components/AaharpayHistory";
import MoneyTransfer from "./Components/MoneyTransfer";
import MoneyTransferHistory from "./Components/MoneyTransferHistory";
import ReportComplaint from "./Components/ReportComplaint";
import PayoutSettelment from "./Components/PayoutSettelment";
import QrCode from "./Components/QrCode";
import AdminAddMobile from "./Components/AdminAddMobile";
import AdminAddOtp from "./Components/AdminAddOtp";
import AdminAddPan from "./Components/AdminAddPan";
import AdminWelcome from "./Components/AdminWelcome";
import MoveToBankHistory from "./Components/MoveToBankHistory";
import MoveToDistributorHistory from "./Components/MoveToDistributorHistory";
import WalletRecharge from "./Components/WalletRecharge";
import Complaint from "./Components/Complaint";
import ComplaintIssue from "./Components/ComplaintIssue";
import UtilityMobile from "./Components/UtilityMobile";
import UtilityDth from "./Components/UtilityDth";
import CreateStaff from "./Components/CreateStaff";
import AdminAddPandetail from "./Components/AdminAddPandetail";
import StateHeadDashboard from "./Components/StateHeadDashboard";
import SuperDistributorDashboard from "./Components/SuperDistributorDashboard";
import DistributorAddUser from "./Components/DistributorAddUser";
import { mobile } from "./constants/userRoutes";
import DistributorAddMobile from "./Components/DistributorAddMobile";
import DistributorAddOtp from "./Components/DistributorAddOtp";
import DitributorAddPan from "./Components/DitributorAddPan";
import DistributorAddPanDetails from "./Components/DistributorAddPanDetails";
import DistributorAddWelcome from "./Components/DistributorAddWelcome";
import MasterDistributorAddUser from "./Components/MasterDistributorAddUser";
import SuperDistributorAddUser from "./Components/SuperDistributorAddUser";
import SteatHeadAddUser from "./Components/SteatHeadAddUser";
import UserManagement from "./Components/UserManagement";
// import FundManagement from "./Components/FundManagement";
import SearchUser from "./Components/SearchUser";
import BlockUnblock from "./Components/BlockUnblock";
import FundTransferRequest from "./Components/FundTransferRequest";
import FundApproveCheckerl1 from "./Components/FundApproveCheckerl1";
import FundApproveCheckerl2 from "./Components/FundApproveCheckerl2";
import RequestApprove from "./Components/RequestApprove";
import PaymentApprove from "./Components/PaymentApprove";
import PartnerLeder from "./Components/PartnerLeder";
import AddFund from "./Components/AddFund";
import AdminLedger from "./Components/AdminLedger";
function App() {

  return (
    <div className="App">
      <ToastContainer transition={Slide} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path={mobile} element={<Mobile />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/pan" element={<Pan />} />
          <Route path="/pandeatils" element={<Pandeatils />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/instant-topup" element={<InstantTopup />} />
          <Route path="/move-to-master-distributor" element={<MoveMasterDistributor />} />
          <Route path="/payment-deposit" element={<PaymentDepositDistributorOnline />} />
          <Route path="/request-money" element={<RequestMoney />} />
          <Route path="/fund-request" element={<FundRequest />} />
          <Route path="/ledger" element={<DistributorLedger />} />
          <Route path="/move-to-bank" element={<MoveBankDistributor />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/agent-dashboard" element={<AgentDashboard />} />
          <Route path="/distributor-state" element={<DistributorState />} />
          <Route path="/master-dashboard" element={<MasterDistributor />} />
          <Route path="/statehead-dashboard" element={<StateHeadDashboard />} />
          <Route path="/superdistributor-dashboard" element={<SuperDistributorDashboard />} />
          <Route path="/aeps" element={<Aeps />} />
          <Route path="/adhar-pay" element={<AadharPay />} />
          <Route path="/commission" element={<AgentCommision />} />
          <Route path="/bankdetail" element={<BankDetail />} />
          <Route path="/move-to-distributor" element={<MoveDistributor />} />
          <Route path="/creditcardpayment" element={<CreditCardPayment />} />
          <Route path="/agentledger" element={<AgentLedger />} />
          <Route path="/fundrequesthistory" element={<FundRequestHistory />} />
          <Route path="/aepshistory" element={<AepsHistory />} />
          <Route path="/adharpayhistory" element={<AaharpayHistory />} />
          <Route path="/moneytransfer" element={<MoneyTransfer />} />
          <Route path="/moneytransferhistory" element={<MoneyTransferHistory />} />
          <Route path="/reportacomplaint" element={<ReportComplaint />} />
          <Route path="/payoutsettelment" element={<PayoutSettelment />} />
          <Route path="/qrcode" element={<QrCode />} />
          <Route path="/move-to-bank-history" element={<MoveToBankHistory />} />
          <Route path="/move-to-distributor-history" element={<MoveToDistributorHistory />} />
          <Route path="/wallet-reacharge-history" element={<WalletRecharge />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/complaintissue" element={<ComplaintIssue />} />
          <Route path="/mobile-recharge" element={<UtilityMobile />} />
          <Route path="/dth-recharge" element={<UtilityDth />} />
          <Route path="/Fund-transfer-request" element={<FundTransferRequest />} />
          <Route path="/statehead-add-user" element={<SteatHeadAddUser />} />
          <Route path="/superdistributor-add-user" element={<SuperDistributorAddUser />} />
          <Route path="/masterdistributor-add-user" element={<MasterDistributorAddUser />} />
          <Route path="/distributor-add-user" element={<DistributorAddUser />} />
          <Route path={`/mobile/add/:value`} element={<DistributorAddMobile />} />
          <Route path="/otp/add/:value" element={<DistributorAddOtp />} />
          <Route path="/pan/add/:value" element={<DitributorAddPan />} />
          <Route path="/pandetail/add/:value" element={<DistributorAddPanDetails />} />
          <Route path="/welcome/add/:value" element={<DistributorAddWelcome />} />
          <Route path="/request-approve-list" element={<RequestApprove />} />
          <Route path="/payment-approve-list" element={<PaymentApprove />} />
          <Route path="/partner-leder-list" element={<PartnerLeder />} />

          //Admin Routes
          <Route exact path={login} element={<Adminlogin />} />
          <Route path={dashboard} element={<AdminDashboard />} />
          <Route path='/mobile/:value' element={
            <>
              <AdminHeader />
              <AdminNav />
              <AdminAddMobile />
            </>
          } />
          <Route path="/otp/:value" element={
            <>
              <AdminHeader />
              <AdminNav />
              <AdminAddOtp />
            </>
          } />
          <Route path="/pan/:value" element={
            <>
              <AdminHeader />
              <AdminNav />
              <AdminAddPan />
            </>
          } />
          <Route path="/pandetail/:value" element={
            <>
              <AdminHeader />
              <AdminNav />
              <AdminAddPandetail />
            </>
          } />
          <Route path="/welcome/:value" element={
            <>
              <AdminHeader />
              <AdminNav />
              <AdminWelcome />
            </>
          } />


          <Route path={`${kyc}${kycType.pending}`} element={
            <>
              <AdminHeader />
              <AdminNav />
              <AdminKycList />
            </>
          } />

          <Route path={`${kyc}${kycType.approved}`} element={
            <>
              <AdminHeader />
              <AdminNav />
              <ApprovedKycList />
            </>
          } />

          <Route path={`${kyc}${kycType.rejected}`} element={
            <>
              <AdminHeader />
              <AdminNav />
              <RejectedKycList />
            </>
          } />
          <Route path='/usermanagement' element={
            <>
              <AdminHeader />
              <AdminNav />
              <UserManagement />
            </>
          } />
          <Route path='/commission' element={
            <>
              <AdminHeader />
              <AdminNav />
              <Commission />
            </>
          } />

          <Route path='/operator-commission' element={
            <>
              <AdminHeader />
              <AdminNav />
              <OperatorCommision />
            </>
          } />
          <Route path='/search-user' element={
            <>
              <AdminHeader />
              <AdminNav />
              <SearchUser />
            </>
          } />
          <Route path='/block-unblock' element={
            <>
              <AdminHeader />
              <AdminNav />
              <BlockUnblock />
            </>
          } />

          <Route path='/create-slab' element={
            <>
              <AdminHeader />
              <AdminNav />
              <CreateSlab />
            </>
          } />


          <Route path='/FundApprove-CheckerL1' element={
            <>
              <AdminHeader />
              <AdminNav />
              <FundApproveCheckerl1 />
            </>
          } />

          <Route path='/FundApprove-CheckerL2' element={
            <>
              <AdminHeader />
              <AdminNav />
              <FundApproveCheckerl2 />
            </>
          } />

          <Route path={verify} element={<VerifyAdmin />} />

          <Route path='/manage-user-type' element={
            <>
              <AdminHeader />
              <AdminNav />
              <AddUser />
            </>
          } />
          <Route path='/createstaf' element={
            <>
              <AdminHeader />
              <AdminNav />
              <CreateStaff />
            </>
          } />
          <Route path='/add-fund' element={
            <>
              <AdminHeader />
              <AdminNav />
              <AddFund />
            </>
          } />

          <Route path='/admin-ledger' element={
            <>
              <AdminHeader />
              <AdminNav />
              <AdminLedger/>
            </>
          } />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
