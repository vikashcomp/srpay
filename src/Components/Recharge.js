import React, { useState } from 'react';
import water from "../images/water-tap.png";
import shield from "../images/shield.png";
import idea from "../images/idea.png";
import gas from "../images/gas.png";
import RechargeElectricity from './RechargeElectricity';
import RechargeWater from './RechargeWater';
import RechargeInsurance from './RechargeInsurance';
import RechargeGas from './RechargeGas';
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const Recharge = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const [activeTabId, setActiveTabId] = useState('tab1');

    const handleTabClick = (tabId) => {
        setActiveTabId(tabId);
    };
    return (
        <>
         <div>
         <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
        </div>

            <div className='container mt-5 recharge-tab'>
                <h2 style={{ color: "#e21d24" }}> Utility <span style={{ color: "#2e26c6" }}>Payment </span></h2>
                <nav >
                    <ul className="nav ">
                        <li className="nav-item ">
                            <a
                                className={`nav-link ${activeTabId === 'tab1' ? 'active' : ''}  text-center`}
                                onClick={() => handleTabClick('tab1')}
                                href="#"

                            >
                                <img className="img-fluid pe-2" src={idea} width="50px" />
                                <p className='mobile-recharge-para'>Electricity</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTabId === 'tab2' ? 'active' : ''}  text-center`}
                                onClick={() => handleTabClick('tab2')}
                                href="#"
                            >
                                <img className="img-fluid pe-2" src={water} width="50px" />
                                <p className='mobile-recharge-para'>Water</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTabId === 'tab3' ? 'active' : ''} text-center`}
                                onClick={() => handleTabClick('tab3')}
                                href="#"
                            >
                                <img className="img-fluid pe-2" src={shield} width="50px" />
                                <p className='mobile-recharge-para'>Insurance</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTabId === 'tab4' ? 'active' : ''}  text-center`}
                                onClick={() => handleTabClick('tab4')}
                                href="#"
                            >
                                <img className="img-fluid pe-2" src={gas} width="50px" />
                                <p className='mobile-recharge-para'>Gas</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                {activeTabId === 'tab1' && (
                    <div>
                        <RechargeElectricity />
                    </div>
                )}

                {activeTabId === 'tab2' && (
                    <div>
                        <RechargeWater />
                    </div>
                )}

                {activeTabId === 'tab3' && (
                    <div>
                        <RechargeInsurance />
                    </div>
                )}
                {activeTabId === 'tab4' && (
                    <div>
                        <RechargeGas />
                    </div>
                )}
            </div>
        </>
    )
}

export default Recharge;
