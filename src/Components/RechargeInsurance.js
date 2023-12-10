import React from 'react'
// import PayBillModalInsurance from './PayBillModalInsurance';
import insurance from "../images/insurance.webp";

const RechargeInsurance = () => {
    return (
        <div>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-6 main-bg mobile-recharge-tabs'>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="col-md-10">
                                    <select className="form-select" >
                                        <option>Select  Your Insurance Provider</option>
                                        <option value="cash">user</option>
                                        <option value="Net Banking"> Banking</option>
                                    </select>
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Enter Customer Account(CA) Number' />
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Enter Policy Number' />
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Enter Date of Birth' />
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Customer Mobile (Optional)' />
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Customer EmailAddress (Optional)' />
                                </div>
                                <div className="col-md-10">
                                    <div className="d-grid view-bill ">
                                        {/* <PayBillModalInsurance /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------mobile-reacharge-right---------- */}
                    <div className='col-5 main-bg ms-5'>
                        <div className='text-center'>
                            <h4 style={{ color: "#2e26c6" }}>Insurance Bill<span style={{ color: "#e21d24" }}> Payment Offers</span></h4>
                        </div>
                        <img className="img-fluid pe-2 mt-5" src={insurance} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RechargeInsurance;
