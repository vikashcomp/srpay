import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import smiley from "../images/smiley.png";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const DistributorAddWelcome = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const navigate = useNavigate();

    const tokenpan = JSON.parse(window.localStorage.getItem("panDataName"));

    const handleNaviagte = () => {
        navigate("/");

    };

    useEffect(() => {
        window.localStorage.removeItem("tokenData");
        window.localStorage.removeItem("panDataName");
        window.localStorage.removeItem("numberData");
        window.localStorage.removeItem("getPanNumber");
    }, []);
    return (
        <>

            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-8 col-md-12 mx-auto success-page main-bg text-center">
                        <div className="col-lg-4 mx-auto form p-2">
                            <img src={smiley} className="smiley-img" width="50" alt='proper' />
                        </div>
                        <div className="col-lg-10 mx-auto">
                            <h2>Dear user welcome to SRPAY Family</h2>
                            <p>
                                Your account has been created successfully
                            </p>
                            <p>
                                User ID - {tokenpan.userId} & One time password -{" "}
                                {tokenpan.login_otp}
                            </p>
                        </div>
                        <div className="my-3">
                            <h3>To</h3>
                        </div>
                        <div className="join pb-5">
                            <button className="btn btn-primary px-4" onClick={handleNaviagte}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DistributorAddWelcome
