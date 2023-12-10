
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AddFundOtp, confirmOtp, getFundAddList, getbankList } from '../redux/actions/addFundOtp';

const initialState = {
    ref_bank_id: "",
    trans_id: "",
    trans_date: "",
    trans_amt: "",
    remarks: ""
};


const AddFund = () => {
    const dispatch = useDispatch();
    const [iState, updateState] = useState(initialState);
    const [bankAccount, setBankAccount] = useState("")
    const { ref_bank_id, trans_id, trans_date, trans_amt, remarks } = iState;
    const [serialNo, updateSerialNo] = useState(10);
    const [show, setShow] = useState(false);
    const [otp, setOtp] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = JSON.parse(window.localStorage.getItem('adminToken'));
    const fundid = JSON.parse(window.localStorage.getItem('nfundId'));
    const nfundId = fundid?.nfundid

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateState({ ...iState, [name]: value })
    };

    const { bankListData } = useSelector((state) => state.bankList);
    console.log("bankListData", bankListData)

    const { addListData } = useSelector((state) => state.addList);
    console.log("addListData", addListData)

    useEffect(() => {
        dispatch(getFundAddList({ access_token: token }));
    }, []);


    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    // -------confirm-otp---

    const handleOtpSubmit = () => {

        const data = { otp, nfundId, access_token: token };
        dispatch(confirmOtp(data))
            .then((res) => {
                if (res.success == true) {
                    toast.success("Records Saved Successfully", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
                    setOtp("")
                    handleClose();
                } else {
                    toast.error("something went wrong", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
                    setOtp("")
                }
            })


    };

    useEffect(() => {
        dispatch(getbankList({ access_token: token }));
    }, [dispatch, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                access_token: token,
                ref_bank_id: bankAccount,
                trans_id,
                trans_date,
                trans_amt,
                remarks,

            };


            // Dispatch the action to get the OTP
            const response = await dispatch(AddFundOtp(data));


            if (response.success == true) {
                // Display success toast and open the modal
                toast.success("OTP sent Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                });


                window.localStorage.setItem("nfundId", JSON.stringify(response.data))
                handleShow(); // Open the modal when OTP is sent successfully
                updateState({ ref_bank_id: '', trans_id: '', trans_date: '', trans_amt: '', remarks: '' })
            } else {
                // Display error toast if something went wrong
                toast.error('Something Went Wrong');
            }
        } catch (error) {
            // Handle any exceptions that might occur during the API call
            console.error("API Request Failed:", error);
            toast.error('Failed to send OTP. Please try again.');
        }
    };

    const selectedBank = bankListData?.data
    
    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-7'>
                        <h2 style={{ color: "red" }}>Add <span style={{ color: 'blue' }}>Fund</span></h2>
                        <div className='card main-bg'>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group mb-1'>
                                        <label className="input-field">Select Bank Account:</label>
                                        <select className="form-select" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)}>
                                            <option value=''>Select bank account</option>
                                            <option value='1'>HDFC</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="input-field">Trans ID: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            value={trans_id}
                                            onChange={handleChange}
                                            name="trans_id"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="input-field">Trans Date: </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            value={trans_date}
                                            onChange={handleChange}
                                            name="trans_date"
                                        />
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="input-field">Amount: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            value={trans_amt}
                                            onChange={handleChange}
                                            name="trans_amt"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="input-field">Remarks: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            value={remarks}
                                            onChange={handleChange}
                                            name="remarks"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary">Send OTP</button>
                                    </div>

                                    <Modal show={show} onHide={handleClose} className="ModalBox">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Enter OTP</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter OTP"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                    value={otp}
                                                    onChange={handleOtpChange}
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick={handleOtpSubmit}
                                                >
                                                    Confirm
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </form>
                            </div>
                        </div>
                    </div>

                    {bankAccount == '1' && selectedBank && bankListData?.data?.map((bank, index) => ((
                        <div className='col-md-5'>
                            <h2 style={{ color: "red" }}>Bank <span style={{ color: 'blue' }}>Details</span></h2>
                            <div className='card main-bg'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h5 className='input-field'>Bank</h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6>{bank.bank_name}</h6>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h5 className='input-field'>A/C Number</h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6>{bank.ac_no}</h6>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h5 className='input-field'>IFSC Code</h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6>{bank.ifsc}</h6>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h5 className='input-field'>Location</h5>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h6>{bank.location}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))}


                    {/* <div className='container mt-4'>
                        <h2 style={{ color: "red" }}>Fund<span style={{ color: 'blue' }}> History</span></h2>
                        <div className="main-bg">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Account Number</th>
                                        <th scope="col">Bank Name</th>
                                        <th scope="col">IFSC Code</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Trans Date</th>
                                        <th scope="col">Trans Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        addListData && addListData.length > 0 ? (
                                            addListData.map((x, i) => (
                                                <tr key={x.nfundid}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{x.ac_no}</td>
                                                    <td>{x.bank_name}</td>
                                                    <td>{x.ifsc_code}</td>
                                                    <td>{x.location}</td>
                                                    <td>{x.trans_id}</td>
                                                    <td>{x.trans_date}</td>
                                                    <td>{x.trans_amount}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="8">
                                                    <p>No Data found.</p>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>



                    </div> */}
                </div>


            </div>
        </>
    );
};

export default AddFund;









