import React from 'react';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const AgentCommision = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="mx-auto">
                        <h2 className="mx-auto " style={{ color: "#2e26c6" }}>
                            Commission <span style={{ color: "#e22d24" }}></span>
                        </h2>
                    </div>
                </div>

                <div className='row'>
                    <div className="col mb-5 offset-lg-2 mx-auto success-page main-bg">

                        <form className='formm' >
                            <div className='row'>
                                <div className='col-md-6 '>
                                    <label style={{ color: "#000" }}><b>State Distributor</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>

                                <div className='col-md-6'>
                                    <label style={{ color: "#000" }}><b>Super Distributor</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>

                                <div className='col-md-6 mt-2'>
                                    <label style={{ color: "#000" }}><b>Master Distributor</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>

                                <div className='col-md-6 mt-2'>
                                    <label style={{ color: "#000" }}><b>Distributor</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className='col-md-6 mt-2'>
                                    <label style={{ color: "#000" }}><b>Agent</b></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="button py-2 text-center">
                                <button
                                    className="btn btn-primary"
                                    style={{ backgroundColor: "blue" }}
                                >
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AgentCommision;
