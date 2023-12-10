import React, { useEffect } from 'react';
import UserHeader from "./UserHeader";
import { toast } from 'react-toastify';
import UserNav from "./UserNav";
import { useUserProfile, useUserwalletBalance } from '../customHooks/hooks';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { AiOutlineFileExcel } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getApproveReqList, requestAcceptReject } from '../redux/actions/walletAction';
const RequestApprove = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const dispatch = useDispatch();
    const { approveList } = useSelector((state) => state.khataBookData);
    console.log("approveList", approveList);
    const token = JSON.parse(window.localStorage.getItem("tokenData"));
    useEffect(() => {
        dispatch(getApproveReqList({ access_token: token }))
    }, [])


    const handleAcceptReject = (item, type) => {
        if (type === true) {
            const data = { access_token: token, is_accept: 'true', ntras_id: item.ntras_id }
            dispatch(requestAcceptReject(data)).then((res) => {
                console.log("newss", res)
                if (res.data.success == true) {
                    dispatch(getApproveReqList({ access_token: token }))
                    toast.success("Request Accepted successfully!", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
                } else {
                    toast.error('Insufficient wallet balance')
                }
            })
        }
        else {
            const data = { access_token: token, is_accept: false, ntras_id: item.ntras_id }
            dispatch(requestAcceptReject(data)).then((res) => {
                if (res.data.success == true) {
                    dispatch(getApproveReqList({ access_token: token }))
                    toast.success("Request Rejected successfully!", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
                } else {
                    toast.error('Something Went Wrong')
                }
            })
        }

    }
    return (
        <>
            <div>
                <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container fundRequestHistory mt-4 mb-3'>
                <h2 style={{ color: "#e21d24" }}>Request <span style={{ color: "#2e26c6" }}>Money</span></h2>
                <div className='row  main-bg'>
                    <div className='col-12 mt-3 mb-3 '>
                        <div className='col-4 d-flex '>
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
                                <button className="btn btn-primary" type="submit"><AiOutlineFileExcel /> Export To Excel</button>
                            </div>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-danger" type="submit"><AiOutlineFilePdf /> Export To PDF</button>
                            </div>
                        </div>

                        <div className="container">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Date & Time</th>
                                        <th scope="col">RM Number</th>
                                        <th scope="col">User ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Os Balance</th>
                                        <th scope="col">Wallet  Balance</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Remark</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {approveList?.length > 0 ? (
                                        approveList?.map((item, i) => (
                                            <tr key={i}>
                                                <td scope="row">{moment(item.requested_date).format("YYYY-MM-DD & A")}</td>
                                                <td>{item.ftr_ref_no}</td>
                                                <td>{item.user_id}</td>
                                                <td>{item.req_cust_name}</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>{item.req_amount}</td>
                                                <td>
                                                    {item.trans_confirm === "No" && !item.is_denied ? (
                                                        <span className="pending">Pending</span>
                                                    ) : item.trans_confirm === "Yes" && !item.is_denied ? (
                                                        <span className="verified">Accepted</span>
                                                    ) : item.is_denied && item.trans_confirm === "No" ? (
                                                        <span className="rejected">Rejected</span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </td>
                                                <td>{item.remark}</td>
                                                <td>
                                                    {item.trans_confirm === "No" && !item.is_denied ? (
                                                        <>
                                                            <button className="btn btn-success me-2" type="button" onClick={() => handleAcceptReject(item, true)}>
                                                                Accept
                                                            </button>
                                                            <button className="btn btn-danger" type="button" onClick={() => handleAcceptReject(item, false)}>
                                                                Reject
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <span>No Action</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="10">
                                                <p>No Data found.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestApprove
