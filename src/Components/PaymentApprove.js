import React from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { AiOutlineFileExcel } from 'react-icons/ai';

const PaymentApprove = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <div>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container fundRequestHistory mt-4 mb-3'>
                <h2 style={{ color: "#2e26c6"  }}>Payment Diposit <span style={{ color: "#e21d24" }}>History</span></h2>
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
                                        <th scope="col">Deposit Date</th>
                                        <th scope="col">Refrance Number</th>
                                        <th scope="col">User ID/Name</th>
                                        <th scope="col">Mode</th>
                                        <th scope="col">Deposit Amt</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Dis. Remark</th>
                                        <th scope="col">Remark</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">27/05/2022 12:32 Am</td>
                                        <td>09-06-2023</td>
                                        <td>Srpay1003</td>
                                        <td>Srpay1003/Ankit Parojiya</td>
                                        <td>Cash</td>
                                        <td>1000</td>
                                        <td>Inprocess</td>
                                        <td></td>
                                        <td>Axis Bank</td>
                                        <td>No Action</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">27/08/2022 12:32 Am</td>
                                        <td>25-08-2023</td>
                                        <td>Srpay1003</td>
                                        <td>Srpay1003/Ankit Parojiya</td>
                                        <td>Cash</td>
                                        <td>1000</td>
                                        <td>Inprocess</td>
                                        <td></td>
                                        <td>hdfsc Bank</td>
                                        <td>No Action</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">27/05/2022 12:32 Am</td>
                                        <td>09-06-2023</td>
                                        <td>Srpay1003</td>
                                        <td>Srpay1003/Ankit Parojiya</td>
                                        <td>Cash</td>
                                        <td>1000</td>
                                        <td>Inprocess</td>
                                        <td></td>
                                        <td>Axis Bank</td>
                                        <td>No Action</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentApprove
