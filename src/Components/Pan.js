import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPan } from "../redux/actions/panAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from '../images/sr.jpg'


const initialState = {
  pan_no: "",
  name: "",
  errors: {},
};

const Pan = () => {
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

  const handleValidation = () => {
    let error = {};
    let formIsValid = true;
    if (!pan_no) {
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
      const data = { pan_no, access_token: token };
      dispatch(loginPan(data)).then((res) => {
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
          // console.log("panData", panData);

          navigate("/pandeatils");
          updateState({ ...iState });
        } else {
          setLoading(false)
          toast.error("Invalid Pan Number", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
          updateState({
            ...iState,
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
  );
};

export default Pan;
