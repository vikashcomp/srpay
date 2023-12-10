import React from 'react';
import dthRecharges from "../images/dth-recharges.jpg";
import { SlRefresh } from 'react-icons/sl';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import { useUserProfile } from '../customHooks/hooks';

const UtilityDth = () => {
    const { kycData } = useUserProfile();
    return (
        <>
            <div>
                <UserHeader kycData={kycData} />
                <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className='container mt-4'>
                <div className='row mb-5'>
                    <div className='col-6 main-bg mobile-recharge-tabs'>
                        <h4>Reacharge</h4>
                        <div className="tab-content mt-5" id="pills-tabContent ">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="col-md-10">
                                    <select className="form-select" >
                                        <option>Select  Your DTH Provider</option>
                                        <option value="cash">user</option>
                                        <option value="Net Banking">Banking</option>
                                    </select>
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Enter Customer ID' />
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Enter Reacharge Amount' />
                                </div>

                                <div className="col-md-10 row">
                                    <div className='col-md-6'>
                                        <div className="d-grid view-bill">
                                            <button className='btn btn-danger' type="submit">Proceed Recharge</button>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="d-grid view-bill">
                                            <button className='btn btn-primary' type="submit"><SlRefresh />  Dth Heavy Refrace</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------mobile-reacharge-right---------- */}
                    <div className='col-5 main-bg ms-5'>
                        <div className='text-center'>
                            <h4 style={{ color: "#2e26c6" }}>DTH <span style={{ color: "#e21d24" }}> Recharge Offers</span></h4>
                            <img className="img-fluid pe-2 text-center" src={dthRecharges} />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default UtilityDth;
