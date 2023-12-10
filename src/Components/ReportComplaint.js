import React from 'react';
import { useNavigate } from 'react-router-dom';
import {AiFillFileExcel} from 'react-icons/ai';
import {AiFillFilePdf} from 'react-icons/ai';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const ReportComplaint = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const navigate=useNavigate()

    const handleClick=()=>{
        navigate('/complaint')
    }
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container fundRequestHistory mt-5 mb-5'>
                <h2 style={{ color: "#e21d24" }}> Report A  <span style={{ color: "#2e26c6" }}>Complaint</span></h2>
                <div className='row main-bg'>
                    <div className='col-12 mt-3 '>
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
                                <button className="btn btn-primary" type="submit"><AiFillFileExcel /> Export To Excel</button>
                            </div>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-danger" type="submit"><AiFillFilePdf /> Export To PDF</button>
                            </div>
                        </div>

                        <div className="container">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Date & Time</th>
                                        <th scope="col">TXN Id</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Payment Mode</th>
                                        <th scope="col">Debit</th>
                                        <th scope="col">Credit</th>
                                        <th scope="col">Closing Balance</th>
                                        <th scope="col">Raise Complaint</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">10/12/2022  12:53 AM</th>
                                        <td>truyt6754342</td>
                                        <td>ddfgt</td>
                                        <td>upi</td>
                                        <td>--</td>
                                        <td>20,0000</td>
                                        <td>20,0000</td>
                                        <td><button className='btn btn-success' onClick={handleClick}>Complaint</button></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">11/12/2021  1:02 AM</th>
                                        <td>truyt6754342</td>
                                        <td>ddfgt</td>
                                        <td>net banking</td>
                                        <td>--</td>
                                        <td>20,0000</td>
                                        <td>20,0000</td>
                                        <td><button className='btn btn-success' onClick={handleClick}>complaint</button></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">19/02/2023 03:07 PM</th>
                                        <td>truyt6754342</td>
                                        <td>ddfgt</td>
                                        <td>upi</td>
                                        <td>--</td>
                                        <td>20,0000</td>
                                        <td>20,0000</td>
                                        <td><button className='btn btn-success' onClick={handleClick}>complaint</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">05/05/2023 04:05 AM</th>
                                        <td>truyt6754342</td>
                                        <td>ddfgt</td>
                                        <td>upi</td>
                                        <td>--</td>
                                        <td>20,0000</td>
                                        <td>20,0000</td>
                                        <td><button className='btn btn-success' onClick={handleClick}>complaint</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportComplaint;
