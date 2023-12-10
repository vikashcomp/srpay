import React, { useState } from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const PayoutSettelment = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const [selectType, setSelectType] = useState("")

    const handleSelect = (e) => {

        setSelectType(e.target.value)

    }
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mb-4 mt-4'>
                <h3 style={{ color: "red" }}>Payout <span style={{ color: "blue" }}> Settlement</span> </h3>
                <div className='row main-bg'>

                    <div className='row mb-3'>
                        <div className='col-md-4'>
                            <select className='form-select ' onChange={handleSelect}>
                                <option>Select Type</option>
                                <option value="self">Self</option>
                            </select>
                        </div>
                    </div>
                    {
                        selectType === "self" ? (
                            <>
                                <div className='col-md-2'>
                                    <button className='btn btn-primary'>IMPS</button>
                                </div>
                                <div className='col-md-2'>
                                    <button className='btn btn-primary'>NEFT</button>
                                </div>
                                <div className='col-md-3'>
                                    <button className='btn btn-primary'>Settele UPI</button>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <label>Payout Settlement Form</label>
                                        <select className='form-select'>
                                            <option value="Agent">Agent</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <label>Benificiary Bank</label>
                                        <select className='form-select'>
                                            <option value="Agent">Agent</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <label>Benificiary Bank</label>
                                        <input className='form-control' placeholder='Benificiary Bank'></input>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <label>Mobile</label>
                                        <input className='form-control' placeholder='Benificiary Bank'></input>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <label>Payout Amount </label>
                                        <input className='form-control' placeholder='Benificiary Bank'></input>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-primary" type="button">Proceed</button>
                                        </div>
                                    </div>
                                </div>
                            </>

                        ) : (
                            <>
                                <div className='col-md-2'>
                                    <button className='btn btn-primary'>NEFT</button>
                                </div>
                                <div className='col-md-3'>
                                    <button className='btn btn-primary'>Settele UPI</button>
                                </div>
                                <div className='col-md-3'>
                                    <button className='btn btn-primary'>Settele UPI</button>
                                </div>
                            </>

                        )
                    }

                    {/* <div className='col-md-2'>
                        <button className='btn btn-primary'>IMPS</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary'>NEFT</button>
                    </div>
                    <div className='col-md-3'>
                        <button className='btn btn-primary'>Settele UPI</button>
                    </div> */}


                </div>

            </div>
        </>
    )
}

export default PayoutSettelment;
