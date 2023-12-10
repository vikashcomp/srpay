import React, { useState } from 'react'
import electricity from "../images/electricity.jpg";
// import PayBillModalElectricity from './PayBillModalElectricity';

const RechargeElectricity = () => {
    const [provider, setProvider] = useState("")
    const [cusAcc, setCusAcc] = useState("")
    const [cusMobile, setCusMobile] = useState("")
    return (
        <>
            <div className='container'>
                <div className='row mb-5'>
                    <div className='col-6 main-bg mobile-recharge-tabs'>

                        <div className="tab-content mt-5" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="col-md-10">
                                    <select className="form-select " user={provider} onChange={(e) => setProvider(e.target.value)}>
                                        <option>Select Your Electricity Provider</option>
                                        <option value="user">user</option>
                                        <option value="banking"> Banking</option>
                                    </select>
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Enter Customer Account(CA) Number' cusNumber={cusAcc} onChange={(e) => setCusAcc(e.target.value)} />
                                </div>
                                <div className="col-md-10">
                                    <label htmlFor="inputEmail4" className="form-label"></label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Customer Mobile (Optional)' custMobile={cusMobile} onChange={(e) => setCusMobile(e.target.value)} />
                                </div>
                                <div className="col-md-10">
                                    <div className="d-grid view-bill ">
                                        {/* <PayBillModalElectricity user={provider} cusNumber={cusAcc} custMobile={cusMobile} /> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ----------mobile-reacharge-right---------- */}
                    <div className='col-5 main-bg ms-5'>
                        <div className='text-center'>
                            <h4 style={{ color: "#2e26c6" }}>Electricity  Bill<span style={{ color: "#e21d24" }}> Payment Offers</span></h4>
                        </div>
                        <img className="img-fluid pe-2" width="500px" src={electricity} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default RechargeElectricity
