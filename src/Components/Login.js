

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import play from "../images/play.png";
import { userLogin } from "../redux/actions/userAction";
import { toast } from "react-toastify";
import hide from "./hide.svg";
import show from "./show.svg";
import logo from '../images/sr.jpg'
import { useUserIsLoggedIn } from "../customHooks/hooks";
import ForgotPasword from "./ForgotPasword";

const initialState = {
    userId: '',
    login_otp: '',
    errors: {}
}

const Login = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    const [loading, setLoading] = useState(false);
    useUserIsLoggedIn()
    const userDataid = JSON.parse(window.localStorage.getItem('panDataName'))

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [iState, updateState] = useState(initialState);
    const { userId, login_otp, errors } = iState;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateState({ ...iState, [name]: value })
    }

    let handleValidation = () => {
        let error = {};
        let formIsValid = true;

        if (!userId.trim()) {
            error.userIdError = "* UserId can't be empty ";
            formIsValid = false;
        } else {
            if (!/^.+?@.+?\..+$/.test(userId)) {
                error.userIdIdError = "* UserId format is not valid";
                formIsValid = false;
            }
        }

        if (!login_otp.trim()) {
            error.login_otpError = "* Login_otp can't be empty";
            formIsValid = false;
        }

        updateState({
            ...iState,
            errors: error
        });
        return formIsValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = { userId: userId.trim(), login_otp: login_otp.trim() };
        dispatch(userLogin(data)).then((res) => {
            if (res.success == true) {
                setLoading(false);

                toast.success('Login Successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                });

                if (res.data.is_send_approval == true) {
                    window.localStorage.setItem("tokenData", JSON.stringify(res.data.token));

                    if (res.data.user_type_label == "Partner") {
                        navigate('/profile')
                    }
                    // else if (res.data.user_type_label == "Agent") {
                    //     navigate('/agent-dashboard')
                    // }
                    else if (res.data.user_type_label == "Master Distributor") {
                        navigate('/profile')
                    }
                    else if (res.data.user_type_label == "Distributor") {
                        navigate('/profile')
                    }
                    else if (res.data.user_type_label == "Super Distributor") {
                        navigate('/superdistributor-dashboard')
                    }
                    else if (res.data.user_type_label == "State Head") {
                        navigate('/statehead-dashboard')
                    }
                }
                else {
                    window.localStorage.setItem("tokenData", JSON.stringify(res.data.token));
                    navigate('/kyc');
                }

                updateState({
                    ...iState, userId: '',
                    login_otp: '',
                    errors: {}
                })
            }
            else {
                setLoading(false);
                toast.error('Invalid Credentials')
                updateState({
                    ...iState,
                });
            }
        });
    }

    const handleClick = () => {
        navigate('/mobile')
    }

    return (
        <>
            <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom top-header">
                 <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">                     <div className="logo p-3">
                        <img className="img-fluid" src={logo} />
                    </div>
                 </a>
                 <ul className="nav nav-pills d-inline cta p-3 text-center">
                     <li className="nav-item"><a href=""><i className="fa-solid fa-phone"></i> 0123456789</a></li>
                     <li className="nav-item"><a href=""><i className="fa-solid fa-envelope"></i> example@gmail.com</a></li>                 </ul>
            </header>

            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-12 mx-auto form text-center">
                        <form className="main-bg" onSubmit={handleSubmit}>
                            <h2 className="fw-bold" style={{ color: "#e21d24" }}>Log in <span style={{ color: "blue" }}>to Continue</span></h2>
                            <div className="input mt-4">
                                <input type="text" name="userId" placeholder="Username" value={userId} onChange={handleChange} />
                            </div>
                            <br />
                            <span style={{ color: "red" }}>{errors?.userIdError}</span>

                            <div className="input mt-3  password-input">
                                <input type={togglePassword ? "text" : "password"} name="login_otp" placeholder="Password" value={login_otp} onChange={handleChange} />

                                <img
                                    alt={togglePassword ? "Show" : "Hide"}
                                    src={togglePassword ? show : hide}
                                    onClick={() =>
                                        setTogglePassword((prevState) => !prevState)
                                    }
                                ></img>


                            </div> <br />
                             <span style={{ color: "red" }}>{errors?.login_otpError}</span>

                            <div className="button py-1">
                                <button className="btn btn-danger" style={{ backgroundColor: "red" }} type='submit' disabled={loading ? loading : loading}>{loading ? "LOADING" : 'LOGIN'} </button>
                            </div>
                            <span><a href=""><ForgotPasword /></a></span>
                            <div className="join mt-4">
                                <h6>Not a registered member? <a style={{ color: "red", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }} onClick={handleClick}>Join Now </a></h6>
                                <button className="btn btn-primary px-4" onClick={handleClick}> Join now</button>
                            </div>
                            <div className="gp">
                                <img className="img-fluid" src={play} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;







