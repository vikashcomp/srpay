import React, { useState } from "react";
import Sradmin from "../images/Sradmin.jpeg";
import { useNavigate } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';

const SteatHeadAddUser = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const navigate = useNavigate();
    const [value, setValue] = useState("")
    const handleSubmit = () => {
        navigate(`/mobile/add/${value}`);
    }

    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className="container ">
                <div className="row left-srpay">
                    <div className="col-lg-6 col-md-10 p-5">
                        <form className="py-5 main-bg sr-left" onSubmit={handleSubmit} >
                            <h2 className="fw-bold text-center" style={{ color: " #e21d24" }}>
                                Add <span style={{ color: "blue" }}>User</span>
                            </h2>

                            <div class="form-group">
                                <label>Select User Type *</label>
                                <select class="form-select" value={value} onChange={(e) => setValue(e.target.value)}>
                                    <option>Select User Type</option>
                                    <option value="1">Partner</option>
                                    <option value="2">Distributor</option>
                                    <option value="4">Super Distributor</option>

                                </select>
                            </div>

                            <div className="join  text-center">
                                <button className="btn btn-primary px-4" type="submit">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <img class="img-fluid srpay" src={Sradmin} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SteatHeadAddUser
