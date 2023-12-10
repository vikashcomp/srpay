import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import { adduppersendOtp } from "../redux/actions/upper-bodyMobileAction";


const initialState = {
  mobile_no: "",
  errors: {},
};

const AdminAddMobile = () => {
  const { value } = useParams();
  const integerNumber = parseInt(value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [iState, updateState] = useState(initialState);
    const { mobile_no,errors } = iState;
    const [loading, setLoading] = useState(false);

    const token = JSON.parse(window.localStorage.getItem('adminToken'))

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
        if (!/^[1-9][0-9]{9}$/.test(mobile_no)) {
          setLoading(false)
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
        const data = {access_token:token,mobile_no,agent_type:integerNumber};
        dispatch(adduppersendOtp(data)).then((res) => {
          toast.success('OTP Sent Successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,

          });
          if (res.success == true) {
            let data = window.localStorage.setItem(
              "tokenuserid",
              JSON.stringify(res.data.user_id)
            );
  
            let mobileData = window.localStorage.setItem(
              "numberDataadduser",
              JSON.stringify(mobile_no)
            );
  
            navigate(`/otp/${value}`);
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
                /> 
              
                <br />
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
  )
}

export default AdminAddMobile;
