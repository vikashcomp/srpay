import React from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import { useUserProfile, useUserwalletBalance } from '../customHooks/hooks';

const ComplaintIssue = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
                <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mt-3 mb-4'>
                <h2 style={{ color: "red" }}>Transaction <span style={{ color: "blue" }}>History</span></h2>
                <div className='row main-bg '>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Date & time</th>
                                <th scope="col">Desc</th>
                                <th scope="col">Type</th>
                                <th scope="col">Trans Id</th>
                                <th scope="col">Amount</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">3 jun 2023 || 04:32 PM</th>
                                <td>DMT-FINO</td>
                                <td>Null</td>
                                <td>FD230603163213097</td>
                                <td>7500</td>
                                <td>Success</td>
                            </tr>
                            {/* <tr>
                                <th scope="row">3 jun 2023 || 4:32 pm</th>
                                <td>DMT-FINO</td>
                                <td>Null</td>
                                <td>FD230603163213097</td>
                                <td>7500</td>
                                <td>Success</td>
                            </tr>
                            <tr>
                                <th scope="row">3 jun 2023 || 4:32 pm</th>
                                <td>DMT-FINO</td>
                                <td>Null</td>
                                <td>FD230603163213097</td>
                                <td>7500</td>
                                <td>Success</td>
                            </tr> */}
                        </tbody>
                    </table>

                    <div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">DMT Transaction Issues</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Type your concern'></textarea>
                        </div>
                        <div>
                            <div className="mb-3 col-md-4">
                                <label for="formFile" className="form-label">Upload Screenshort</label>
                                <input className="form-control" type="file" id="formFile" placeholder='Upload Screenshort' />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type="button" className="btn btn-outline-primary me-4"><IoIosArrowBack /> Back</button>
                            <button type="button" className="btn btn-primary me-4">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComplaintIssue;
