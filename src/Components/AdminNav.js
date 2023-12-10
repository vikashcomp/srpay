import React, { useEffect, useState } from 'react'
import user from "../images/user.png";
import { toast } from "react-toastify";
import { kyc, kycType } from '../constants/adminRoutes'
import { Link, useNavigate } from 'react-router-dom';
const AdminNav = () => {



    const kycManagement = [
        {
            label: 'Approved Users',
            route: `${kyc}${kycType.approved}`

        }, {
            label: 'KYC Pending',
            route: `${kyc}${kycType.pending}`

        }, {
            label: 'e-KYC Verified',
            route: ''

        }, {
            label: 'AePS e-KYC',
            route: ''

        }, {
            label: 'KYC Rejected',
            route: `${kyc}${kycType.rejected}`

        },
    ]

    const navigate = useNavigate();

    const ddroutes = {
        "Manage User": "/usermanagement",
        "Create User": '/manage-user-type',
        "Manage Staff ": '/createstaf',

    }

    const handleLogout = () => {
        toast.success("Logout Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
        });
        localStorage.clear();
        navigate("/admin-login");
    };

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse bold" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <a className="nav-link active" aria-current="page" href="/admin-dashboard">
                                Dashboard
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Commission
                            </a>
                            <ul className="dropdown-menu mx-2">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Discount Module
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Commission Module
                                    </a>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to='/create-slab'>
                                        Create Slab
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to='/operator-commission'>
                                        Operator Commission
                                    </Link>
                                </li>
                            </ul>
                        </li>


                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Api Management
                            </a>
                            <ul className="dropdown-menu">
                                {
                                    ['Add API', 'Manage API', 'Provider API Setting', 'Custom API Routing', 'API Token', 'API Document', 'Add Service / Operator'].map((item, index) => <li>
                                        <a className="dropdown-item" href="#">
                                            {item}
                                        </a>
                                    </li>)
                                }

                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                User Management
                            </a>
                            <ul className="dropdown-menu">
                                {
                                    ['Manage User', 'Create User', 'Manage Staff', 'Create API Member', 'Manage API Member', 'Transfer USER'].map((item, index) =>
                                        <li>
                                            <Link className="dropdown-item" to={ddroutes[item]}>
                                                {item}
                                            </Link>
                                        </li>)
                                }



                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                KYC Management
                            </a>

                            <ul className="dropdown-menu">
                                {

                                    kycManagement.map((item, index) => <li>
                                        <Link to={item.route} className="dropdown-item" >{item.label}</Link>
                                    </li>)
                                }
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Fund Managment
                            </a>
                            <ul className="dropdown-menu mx-2">
                                <li>
                                    <Link className="dropdown-item" to='/FundApprove-CheckerL1'>
                                        Fund Approve - Checker L1
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to='/FundApprove-CheckerL2'>
                                        Fund Approve -Checker L2
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to='/add-fund'>
                                        Add Fund
                                    </Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" to='/admin-ledger'>
                                        Admin Ledger
                                    </Link>
                                </li>


                                <li>
                                    <a className="dropdown-item" href="#">
                                        Bulk Fund Proccess
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        Reverse Fund Request
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Bulk Reverse Fund
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Bulk Reverse Fund Approve
                                    </a>
                                </li>


                            </ul>
                        </li>


                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Reports
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Transaction History
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Utility API Request
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        Utility API Request Status
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        Complaints
                                    </a>
                                </li>


                                <li>
                                    <a className="dropdown-item" href="#">
                                        Complaint History
                                    </a>
                                </li>


                                <li>
                                    <a className="dropdown-item" href="#">
                                        Refunds
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        Refund History
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        Payment History Credits
                                    </a>
                                </li>


                                <li>
                                    <a className="dropdown-item" href="#">
                                        Fund Approve FTR
                                    </a>
                                </li>


                                <li>
                                    <a className="dropdown-item" href="#">
                                        User Primary Reports
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        Distributor To Partner FTR

                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        SD to Distributor FTR

                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link "
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Manage Admin
                            </a>
                            {/* <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
                <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="img-fluid logout" src={user} width="30px" />
                    </a>
                    <ul className="dropdown-menu" style={{ minWidth: 'unset', left: '-5px', padding: '0.5rem' }} >
                        <li className="d-flex align-items-center">
                            <i className="fa-solid fa-right-from-bracket" />
                            <a className="dropdown-item" href="#" style={{ padding: '3px', listStyle: "none" }} onClick={handleLogout}
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </li>

            </div>
        </nav>

    )
}

export default AdminNav
