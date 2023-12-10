import React, { useState, useEffect } from 'react'

import { useUserProfile, useUserwalletBalance } from '../customHooks/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import UserHeader from './UserHeader';
import UserNav from './UserNav';
import { getFtrNumber, getFundRequest } from '../redux/actions/fundRequestAction';


const initialState = {
    req_amount: "",
    ac_id: "",
    ac_no: "",
    trans_id: "",
    ifsc: "",
    location: "",
    mode_trans: "",
    deposit_date: "",
    remarks: "",
    ntras_id: "",
}

const FundRequest = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();

    const dispatch = useDispatch();
    const [iState, updateState] = useState(initialState);
    const [slip, setSlip] = useState("")

    const { req_amount, ac_id, ac_no, trans_id, ifsc, location, mode_trans, deposit_date, remarks, ntras_id } = iState
    console.log('istateee', iState)


    const userDataid = JSON.parse(window.localStorage.getItem('tokenData'))

    const { requestFtrId } = useSelector((state) => state.fundRequestForm)
    console.log('requestFtrid', requestFtrId?.ntras_id)

    useEffect(() => {
        dispatch(getFtrNumber({ access_token: userDataid }))

    }, [])
    // ntras_id:requestFtrId?.data?.ntras_id
    //===============================tohitaddapi=====================
    const handleSubmit = (e) => {
        e.preventDefault();
        let bodyFormData = new FormData();
        bodyFormData.append('ntras_id', requestFtrId?.ntras_id);
        bodyFormData.append('access_token', userDataid);
        bodyFormData.append('req_amount', req_amount);
        bodyFormData.append('ac_id', requestFtrId?.ac_id);
        bodyFormData.append('ac_no', requestFtrId?.ac_no);
        bodyFormData.append('trans_id', trans_id);
        bodyFormData.append('ifsc', requestFtrId?.ifsc);
        bodyFormData.append('location', requestFtrId?.location);
        bodyFormData.append('mode_trans', mode_trans);
        bodyFormData.append('deposit_date', deposit_date);
        bodyFormData.append('remarks', remarks);
        bodyFormData.append('slip', slip);

        console.log('bodyFormDataaa', bodyFormData);

        dispatch(getFundRequest(bodyFormData)).then((res) => {

            if (res.success == true) {

                toast.success('Record Updated', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            else {
                updateState({ ...iState })
                toast.error('Invalid Data')
            }
        });
        updateState({ iState, req_amount: '', trans_id: '', mode_trans: '', location: '', deposit_date: '', remarks: '' })
        setSlip('')

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateState({ ...iState, [name]: value })  
    }

    const handleSlip = (e) => {
        setSlip(e.target.files[0])
    }
    return (
        <>
            <div>

                <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                <UserNav userRole={kycData?.user_type_label} />

            </div>
            <div className='container'>
                <div className='row mt-5 mb-5'>
                    <div className='col-md-12'>
                        <h2 style={{ color: "#2e26c6" }}>Fund <span style={{ color: "#e21d24" }}>Request</span></h2>
                        <div className='row main-bg'>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">FTR Reference Number</label>
                                <input type="text" className="form-control" id="inputEmail4" name='ftr_no' value={requestFtrId?.ftr_no} disabled />
                            </div>

                            <input type="hidden" className="form-control" id="inputEmail4" name='ntras_id' value={requestFtrId?.ntras_id} disabled />

                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Amount</label>
                                <input type="text" className="form-control" id="inputEmail4" name='req_amount' value={req_amount} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="mt-2 label-fund-request">Bank</label>
                                <input type="text" className="form-control" id="inputEmail4" name='bank_name' value={requestFtrId?.bank_name} disabled />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Account Number</label>
                                <input type="text" className="form-control" id="inputEmail4" name='ac_no' value={requestFtrId?.ac_no} disabled />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Bank Ref No/TXN Id</label>
                                <input type="text" className="form-control" id="inputEmail4" name='trans_id' value={trans_id} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="mt-2 label-fund-request">Mode</label>
                                <input type="text" className="form-control" id="inputEmail4" name='mode_trans' value={mode_trans} onChange={handleChange} />
                                {/* <select className="form-select" >
                                    <option>Cash</option>
                                    <option value="cash">UPI</option>
                                    <option value="Net Banking">Net Banking</option>
                                </select> */}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Branch IFSC</label>
                                <input type="text" className="form-control" id="inputEmail4" name='ifsc' value={requestFtrId?.ifsc} disabled />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Location</label>
                                <input type="text" className="form-control" id="inputEmail4" name='location' value={requestFtrId?.location} disabled />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="mt-2  label-fund-request">Payment Deposite Date</label>
                                <input type="date" className="form-control" id="inputEmail4" max={new Date().toISOString().split("T")[0]} name='deposit_date' value={deposit_date} onChange={handleChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Upload Slip</label>
                                <input type="file" className="form-control" id="inputEmail4" onChange={handleSlip} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="mt-2 label-fund-request">Remarks</label>
                                <textarea rows="4" cols="50" type="text" className="form-control" id="inputAddress" name='remarks' value={remarks} onChange={handleChange} />
                            </div>
                            <div className="button py-1">
                                <button className="btn btn-primary me-4" style={{ backgroundColor: "blue" }} type="submit">Cancel</button>
                                <button className="btn btn-primary" style={{ backgroundColor: "blue" }} type="submit" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FundRequest;
