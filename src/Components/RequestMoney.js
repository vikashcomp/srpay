import React, { useEffect, useState } from 'react'
import { useUserProfile, useUserwalletBalance } from '../customHooks/hooks';
import UserHeader from './UserHeader';
import UserNav from './UserNav';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { addRequestMoney, getGenerateReferenceNumber, getrequestList } from '../redux/actions/requestMoneyAction';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { AiOutlineFileExcel } from 'react-icons/ai';
import moment from 'moment';

const RequestMoney = () => {

    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('')
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([])

    const userDataid = JSON.parse(window.localStorage.getItem('tokenData'))


    const { requestListData } = useSelector((state) => state.requestForm)
    console.log("requestListData", requestListData)
    const { requestGenerateData } = useSelector((state) => state.requestForm)
    console.log("requestGenerateData", requestGenerateData)



    //----------------Get Token---------------//
    useEffect(() => {
        dispatch(getrequestList({ access_token: userDataid }))

    }, [])

    useEffect(() => {
        dispatch(getGenerateReferenceNumber({ access_token: userDataid }))

    }, [])


    const handleClick = () => {
        const data = { access_token: userDataid, req_amount: amount, ntras_id: requestGenerateData?.data?.ntras_id }
        dispatch(addRequestMoney(data)).then((res) => {
            if (res.success == true) {
                setAmount('')
                dispatch(getrequestList({ access_token: userDataid }))
                toast.success("Data Inserted Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                });
            } else {
                toast.error('Something Went Wrong')
            }
        })
    }

    useEffect(() => {
        console.log(search);
        if (search) {
            let filterddata = requestListData?.data?.filter((mapping) => {
                return String(mapping?.ntras_id).toLowerCase().includes(search) ||
                    String(mapping?.ftr_no).toLowerCase().includes(search)
            })
            setFilterData(filterddata)
        } else {
            setFilterData(requestListData?.data)
        }
    }, [search, requestListData])


    return (
        <>
            <div>
                <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h2 style={{ color: "#2e26c6" }}>Request <span style={{ color: "#e21d24" }}>Money</span></h2>
                        <div className='row main-bg'>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail" className="mt-2 label-fund-request">FTR Reference Number</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder='444443235678' value={requestGenerateData?.data?.ftr_no} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Parent Id</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder='' value={requestGenerateData?.data?.parent_id} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Parent Name</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder='' value={requestGenerateData?.data?.parent_name} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Contact Number</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder='' value={kycData?.mobile_no} />
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Current OutStanding</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='--' />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Current Wallet Balance</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='--' value={walletBalanceData?.data?.wallet_bal
                  }/>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="mt-2 label-fund-request">Amount Requested</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='--' value={amount} onChange={(e) => setAmount(e.target.value)} />
                                </div>
                                <div className="button py-1">
                                    <button className="btn btn-primary me-3" style={{ backgroundColor: "blue" }} type="submit">Cancel</button>
                                    <button className="btn btn-primary" style={{ backgroundColor: "blue" }} type="submit" onClick={handleClick}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container fundRequestHistory mt-3 main-bg'>
                <h2 style={{ color: "#e21d24" }}>Request <span style={{ color: "#2e26c6" }}> History</span></h2>
                <div className='row'>
                    <div className='col-12 mt-3 mb-3 '>
                        <div className='col-4 d-flex '>
                            <ul>
                                <li style={{ color: "#e21d24", listStyle: "none" }}><b>Search</b></li>
                                <input type="" placeholder='Search' onChange={(e) => setSearch(e.target.value)} style={{ padding: "5px", border: "2px solid black", borderRadius: "5px" }}></input>
                            </ul>
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
                                        <th scope="col" hidden>ID</th>
                                        <th scope="col">Date And Time</th>
                                        <th scope="col">TXT ID</th>
                                        <th scope="col">FTR Reference</th>
                                        <th scope="col"> Name</th>
                                        <th scope="col">Contact No.</th>
                                        <th scope="col">Os Balance</th>
                                        <th scope="col">Wallet Balance</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Remarks</th>
                                        {/* <th scope="col">Dis Remarks</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterData?.length > 0 &&
                                        filterData?.map((x) => {
                                            return (
                                                <tr>
                                                    <th scope="row" hidden>{x.ntras_id}</th>
                                                    <td>{moment(x.requested_date).format("YYYY-MM-DD HH:MM:SS")}</td>
                                                    <td>{x.ftr_ref_no}</td>
                                                    <td>{x.ftr_ref_no}</td>
                                                    <td>{x.req_parent_name}</td>
                                                    <td></td>
                                                    {/* <td>{x.confirm_date}</td> */}
                                                    <td></td>
                                                    <td>{x.mode_transfer}</td>
                                                    <td>{x.req_amount}</td>
                                                    <td style={{
                                                        color:
                                                            x.trans_confirm === "Yes" ? 'green' :
                                                                x.trans_confirm === "No" && x.trans_confirm === "Yes"? 'red' :
                                                                    x.is_denied === false && x.trans_confirm === 'No' ? 'orange' : ''
                                                    }}>
                                                        <strong>
                                                            {
                                                               
                                                                    x.is_denied === false && x.trans_confirm === 'Yes' ? 'Accept' :
                                                                        x.is_denied === true && x.trans_confirm === 'No' ? 'Reject' : 
                                                                        x.is_denied === false && x.trans_confirm === 'No' ? 'Pending' :''
                                                            }
                                                        </strong>
                                                    </td>

                                                    {/* <td>{x.trans_ref_no}</td> */}
                                                    {/* <td>
                                                        {x.is_denied}
                                                    </td> */}
                                                    <td>{x.remarks}</td>
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
        </>
    )
}

export default RequestMoney;
