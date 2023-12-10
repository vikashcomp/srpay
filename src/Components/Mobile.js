import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sendOtp } from "../redux/actions/mobileAction";
import logo from '../images/sr.jpg'


const initialState = {
  mobile_no: "",

  errors: {},
};

const Mobile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [iState, updateState] = useState(initialState);
  const { mobile_no, errors } = iState;
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateState({ ...iState, [name]: value });
  };

  let handleValidation = () => {
    let error = {};
    let formIsValid = true;
    if (!mobile_no.trim()) {
      setLoading(false)
      error.phoneError = "* Phone Number can't be empty";
      formIsValid = false;
    } else {
      setLoading(false)
      if (!/^[1-9][0-9]{9}$/.test(mobile_no)) {
        error.phoneError = "* Only 10 digits numbers are allowed";
        formIsValid = false;
      }
      if (isNaN(mobile_no)) {
     setLoading(false)
        error.phoneError = "* Only numeric values are allowed";
        formIsValid = false;
      }
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
      const data = { mobile_no };
      dispatch(sendOtp(data)).then((res) => {
        toast.success('OTP Sent Successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,

        });
        if (res.success == true) {
          setLoading(false)
          let data = window.localStorage.setItem(
            "tokenData",
            JSON.stringify(res.data.token)
          );

          let mobileData = window.localStorage.setItem(
            "numberData",
            JSON.stringify(mobile_no)
          );


          navigate("/otp");
          updateState({ ...iState });
        } else {
        setLoading(false);
        updateState({
          ...iState,
          mobile_no: '', // Reset the mobile number field
          errors: {},    // Reset the errors object
        });
        }
      });
    }
  };

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom top-header">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <div className="logo p-3">
            <img className="img-fluid" src={logo} />
          </div>
        </a>
        <ul className="nav nav-pills d-inline cta p-3 text-center">
          <li className="nav-item"><a href=""><i className="fa-solid fa-phone"></i> 0123456789</a></li>
          <li className="nav-item"><a href=""><i className="fa-solid fa-envelope"></i> example@gmail.com</a></li>
        </ul>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-md-6 col-md-12 mx-auto form text-center p-5 verify-mobile">
            <form className="py-5 main-bg" onSubmit={handleSubmit}>
              <h2 className="fw-bold" style={{ color: "#e21d24" }}>
                Verify <span style={{ color: "#2e26c" }}>Mobile Number</span>
              </h2>
              <div className="input mt-4">
                <input
                  className=""
                  type="text"
                  name="mobile_no"
                  placeholder="Mobile Number"
                  value={mobile_no}
                  onChange={handleChange}
                /> <br />
                <span style={{ color: "red" }}>{errors?.phoneError}</span>
              </div>
          

              <div className="button py-1">
               
              </div>
              <div className="join py-3 mb-4">
                <button className="btn btn-primary px-4" type='submit' disabled={loading ? loading : loading}>{loading ? "LOADING" : 'SEND OTP'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
