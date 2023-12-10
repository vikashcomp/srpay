import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { addupperloginPan } from "../redux/actions/Upper-bodyPanAction";
import UserHeader from "./UserHeader";
import UserNav from "./UserNav";
import {useUserProfile,useUserwalletBalance} from '../customHooks/hooks';


const initialState = {
    pan_no: "",
    name: "",
    errors: {},
};

const DitributorAddPan = () => {
    const { kycData } = useUserProfile();
    const { walletBalanceData } = useUserwalletBalance();
    const { value } = useParams();
    const integerNumber = parseInt(value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [iState, updateState] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const { pan_no, errors, name } = iState;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateState({ ...iState, [name]: value });
    };

    const token = JSON.parse(window.localStorage.getItem("tokenData"));
    const tokenuserid = JSON.parse(window.localStorage.getItem("tokenuserid"));

    const handleValidation = () => {
        let error = {};
        let formIsValid = true;
        if (!pan_no) {
            setLoading(false)
            error.panError = "Pan Number is required";
            formIsValid = false;
        }

        updateState({
            ...iState,
            errors: error,
        });
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        let formIsValid = handleValidation();

        if (formIsValid) {
            const data = { pan_no, access_token: token, agent_type: integerNumber, user_id: tokenuserid };
            dispatch(addupperloginPan(data)).then((res) => {
                if (res.success == true) {
                    toast.success("PAN Verified Successfully", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
                    let panNumvber = window.localStorage.setItem(
                        "getPanNumber",
                        JSON.stringify(pan_no)
                    );

                    console.log("ressssss", res.data);
                    let panData = window.localStorage.setItem(
                        "panDataName",
                        JSON.stringify(res.data)
                    );

                    navigate(`/pandetail/add/${value}`);
                    updateState({ ...iState });
                } else {


                    updateState({
                        ...iState,
                    });
                }
            });
        }
    };
    return (
        <>
            <div>
            <UserHeader kycData={kycData} walletBalanceData={walletBalanceData} />
        <UserNav userRole={kycData?.user_type_label} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 mx-auto form text-center p-5">
                        <form className="py-5 main-bg" onSubmit={handleSubmit}>
                            <h2 className="fw-bold" style={{ color: "#e21d24" }}>
                                Verify Your <span style={{ color: "blue" }}>PAN</span>
                            </h2>
                            <div className="input my-5">
                                <input
                                    className=""
                                    type="text"
                                    name="pan_no"
                                    placeholder="PAN Number"
                                    value={pan_no}
                                    onChange={handleChange}
                                /> <br />
                                <span style={{ color: "red" }}>{errors?.panError}</span>
                            </div>
                            <div className="join py-1 mb-4">
                                <button className="btn btn-primary px-4" type='submit' disabled={loading ? loading : loading}>{loading ? "LOADING" : 'VERIFY'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default DitributorAddPan;
