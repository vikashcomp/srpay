import React, { useEffect, useState } from "react";
import logo from "../images/sr.jpg";
import hide from "./hide.svg";
import show from "./show.svg";
import { getAdminLogin } from "../redux/actions/adminAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dashboard } from "../constants/adminRoutes";

const initialState = {
  userId: "",
  passwd: "",
  errors: {},
};

const Adminlogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [togglePassword, setTogglePassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iState, updateState] = useState(initialState);
  const { userId, passwd, errors } = iState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateState({ ...iState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let formIsValid = handleValidation();

    if (formIsValid) {
      const data = { userId, passwd: passwd.trim() };
      dispatch(getAdminLogin(data)).then((res) => {
        if (res.success == true) {
          window.localStorage.setItem(
            "adminToken",
            JSON.stringify(res.data.token)
          );

          // window.localStorage.setItem('distributorId',JSON.stringify(res.data.distributorId));
          toast.success("Login Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });

          navigate(dashboard);
        } else {
          setLoading(false)
          updateState({
            userId: "",
            passwd: "",
          });
          toast.error("Invalid Credentials");
        }
      });
    }
  };

  let handleValidation = () => {
    let error = {};
    let formIsValid = true;

    if (!userId.trim()) {
      setLoading(false)
      error.userIdError = "*User Id can't be empty";
      formIsValid = false;
    }

    if (!passwd.trim()) {
      setLoading(false)
      error.passwdError = "* Password can't be empty";
      formIsValid = false;
    }

    updateState({
      ...iState,
      errors: error,
    });
    return formIsValid;
  };

  useEffect(() => {
    //check if admin is already logged in or not. If logged in then send him to dashboard
    let adminToken = window.localStorage.getItem("adminToken");
    if (adminToken) navigate(dashboard);

    //runs on unmounting of component
    return () => {
      updateState({

        ...iState,
        userId: "",
        passwd: "",
        errors: {},
      });
    };
  }, []);

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center mb-4 border-bottom top-header">
        <a
          href="/admin-login"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <div className="logo p-3">
            <img className="img-fluid" src={logo} />
          </div>
        </a>
        <ul className="nav nav-pills d-inline cta p-3 text-center">
          <li className="nav-item">
            <a href="">
              <i className="fa-solid fa-phone"></i> 0123456789
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <i className="fa-solid fa-envelope"></i> example@gmail.com
            </a>
          </li>
        </ul>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6 col-md-12 mx-auto form text-center p-5">
            <form className="main-bg" onSubmit={handleSubmit}>
              <h2
                className="fw-bold"
                style={{ color: "#e21d24", marginTop: "60px" }}
              >
                Admin <span style={{ color: "blue" }} >Login</span>
              </h2>
              <div className="input mt-4">
                <input
                  type="text"
                  name="userId"
                  placeholder="Username"
                  value={userId}
                  onChange={handleChange}
                />{" "}
                <br />
                <span style={{ color: "red" }}>{errors?.userIdError}</span>
              </div>
              <div className="input mt-3 position-relative password ">
                <input
                 type={togglePassword ? "text" : "password"}
                  name="passwd"
                  placeholder="Password"
                  id="id_password"
                  value={passwd}
                  onChange={handleChange}
                />{" "}
                <br />
                <span style={{ color: "red" }}>{errors?.passwdError}</span>
                {/* <i
                  className="far fa-eye position-absolute"
                  id="togglePassword"
                ></i> */}
                <img
                  alt={togglePassword ? "Show" : "Hide"}
                  src={togglePassword ? show : hide}
                  onClick={() =>
                    setTogglePassword((prevState) => !prevState)
                  }
                ></img>

              </div>
              <div className="button py-1">
                <button
                  className="btn btn-danger"
                  style={{ backgroundColor: "red", marginBottom: "80px" }}
                  type="submit" disabled={loading ? loading : loading}>{loading ? "LOADING" : 'LOGIN'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
