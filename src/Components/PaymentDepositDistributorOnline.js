import React, { useEffect, useState } from 'react';
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';
import UserHeader from './UserHeader';
import UserNav from './UserNav';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentList, getUtrNumber, getpaymentDeposit } from '../redux/actions/paymentDepositAction';

const initialState = {
    trans_id: '',
    ifsc: '',
    location: '',
    deposit_date: '',
    req_amount: '',
    ac_no: '',
    remarks: '',
}

const PaymentDepositDistributorOnline = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    
    const [iState, updateState] = useState(initialState);
    const { trans_id, ifsc, location, deposit_date, req_amount, ac_no, remarks } = iState
    const dispatch = useDispatch();

    const [bank_name, setBankName] = useState("")
    const [mode_trans, setModeTrans] = useState("")
    const [slip, setSlip] = useState("")
    const handleSlip = (e) => {
        setSlip(e.target.files[0])
    }

    const userDataid = JSON.parse(window.localStorage.getItem('tokenData'))


    const { requestUtrId } = useSelector((state) => state.listForm)
    console.log('requestUtrId', requestUtrId)


    const { paymentListData } = useSelector((state) => state.listForm)
    console.log('paymentListData', paymentListData)



    useEffect(() => {
        dispatch(getUtrNumber({ access_token: userDataid }))
    }, [])

    useEffect(() => {
        dispatch(getPaymentList({ access_token: userDataid }))
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        updateState({ ...iState, [name]: value })   // istate m data h usko change nhi kr rhe,comma lgane k baad woh change hota h//
    }

    const handleClick = (e) => {
        e.preventDefault();
        let bodyFormData = new FormData();
        bodyFormData.append('npayment_id', requestUtrId?.ntras_id);
        bodyFormData.append('access_token', userDataid);
        bodyFormData.append('trans_id', trans_id);
        bodyFormData.append('ifsc', ifsc);
        bodyFormData.append('location', location);
        bodyFormData.append('deposit_date', deposit_date);
        bodyFormData.append('req_amount', req_amount);
        bodyFormData.append('ac_no', ac_no);
        bodyFormData.append('remarks', remarks);
        bodyFormData.append('slip', slip);
        bodyFormData.append('bank_name', bank_name);
        bodyFormData.append('mode_trans', mode_trans);
        dispatch(getpaymentDeposit(bodyFormData)).then((res) => {
            if (res.success == true) {
                updateState({ iState, trans_id: '', ifsc: '', location: '', deposit_date: '', req_amount: '', ac_no: '', remarks: '' })
                setSlip('');
                setModeTrans('');
                setBankName('')
                dispatch(getPaymentList({ access_token: userDataid }))
                toast.success('Record Updated', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            else {
                updateState({ ...iState })
                toast.error('Invalid Data')
            }
        })
    }

    return (
        <>

<div>
      <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
      </div>

            <div className='container mt-5 mb-5'>
                <h2 style={{ color: "#2e26c6" }}>Payment Deposit <span style={{ color: "#e21d24" }}>Distributor </span></h2>
                <div className='row main-bg '>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">UTR Reference Number</label>
                        <input type="text" className="form-control" id="inputEmail4" name='ftr_no' value={requestUtrId?.ftr_no} disabled />
                    </div>
                    <input type="hidden" className="form-control" id="inputEmail4" name='ntras_id' value={requestUtrId?.ntras_id} disabled />

                    <div className="col-md-4">
                        <label htmlFor="inputPassword4" className="mt-2 label-fund-request">Bank Name</label>
                        <select className="form-select" value={bank_name} onChange={(e) => { setBankName(e.target.value) }} >
                            <option>Select Bank</option>
                            <option value='SBI'>SBI</option>
                            <option value="PNB">PNB</option>
                            <option value="HDFC">HDFC</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Bank RefNo/TxN Id</label>
                        <input type="text" className="form-control" id="inputEmail4" name='trans_id' value={trans_id} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Branch IFSC</label>
                        <input type="text" className="form-control" id="inputEmail4" name='ifsc' value={ifsc} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputPassword4" className="mt-2 label-fund-request">Mode</label>
                        <select className="form-select" value={mode_trans} onChange={(e) => { setModeTrans(e.target.value) }}>
                            <option>Select Mode</option>
                            <option value='cash'>Cash</option>
                            <option value="Net Banking">Net Banking</option>
                            <option value="UPI">UPI</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Payment Deposite Date</label>
                        <input type="date" className="form-control" id="inputEmail4" name='deposit_date' value={deposit_date} onChange={handleChange} />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Deposite Amount</label>
                        <input type="text" className="form-control" id="inputEmail4" name='req_amount' value={req_amount} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Remarks</label>
                        <input type="text" className="form-control" id="" name='remarks' value={remarks} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Account Number</label>
                        <input type="text" className="form-control" id="inputEmail4" name='ac_no' value={ac_no} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Location</label>
                        <input type="text" className="form-control" id="inputEmail4" name='location' value={location} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Upload Slip</label>
                        <input type="file" className="form-control" id="inputEmail4" onChange={handleSlip} />
                    </div>
                    <div className="payment-button">
                        <button className="btn btn-primary me-2" >Cancel</button>
                        <button className="btn btn-primary" onClick={handleClick}>Process</button>
                    </div>



                    <div className='container fundRequestHistory mt-3'>
                        <h2 style={{ color: "#e21d24" }}> Payment Deposit<span style={{ color: "#2e26c6" }}> History</span></h2>
                        <div className='row'>
                            <div className='col-12 mt-3 mb-3 '>
                                <div className='col-4 d-flex'>
                                    <ul>
                                        <li style={{ color: "#e21d24", listStyle: "none" }}><b>From</b></li>
                                        <input type="date"></input>
                                    </ul>
                                    <ul>
                                        <li style={{ color: "#2e26c6", listStyle: "none" }}><b>To</b></li>
                                        <input type="date"></input>
                                    </ul>
                                    <div className="ms-5 mt-3 search-button">
                                        <button className="btn btn-primary" type="submit">Search</button>
                                    </div>

                                </div>
                                <div className='d-flex  mb-3 right-button'>
                                    <div className="ms-5 mt-3 search-button">
                                        <button className="btn btn-primary" type="submit">Export To Excel</button>
                                    </div>
                                    <div className="ms-5 mt-3 search-button">
                                        <button className="btn btn-danger" type="submit">Export To PDF</button>
                                    </div>
                                </div>

                                <div className="container">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Date & Time</th>
                                                <th scope="col">TxN Id</th>
                                                <th scope="col">Bank Name</th>
                                                <th scope="col">Ac No</th>
                                                <th scope="col">IFSC</th>
                                                <th scope="col">Ammount</th>
                                                {/* <th scope="col">Status</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                paymentListData?.length > 0 &&
                                                paymentListData?.map((x) => {
                                                    console.log('paymentListDataaa', paymentListData)
                                                    return (
                                                        <tr>
                                                            <th scope="row">{x.requested_date.toString().split(" ")[0]}</th>
                                                            <td>{x.trans_id}</td>
                                                            <td>{x.bank_name}</td>
                                                            <td>{x.ac_no}</td>
                                                            <td>{x.ifsc}</td>
                                                            <td>{x.deposit_amount}</td>

                                                            {/* <td>
                                                                <i to="/verify-kyc" className="Blue"><button type="button" className="btn btn-outline-success btn-sm me-3">Approve</button></i>
                                                            </td> */}
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentDepositDistributorOnline;
