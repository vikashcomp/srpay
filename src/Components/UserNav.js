import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import user from "../images/user.png";
import home from "../images/home-button.png";
import { useSelector } from "react-redux";
import { useUserProfile } from "../customHooks/hooks";


const UserNav = ({ userRole }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { kycData } = useUserProfile();
  // console.log('kycDtaausernavvvv', kycData)


  useEffect(() => {
    // Simulate fetching navData from an API or any async operation
    // For demonstration purposes, use setTimeout to simulate the async operation
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed
  }, []);

  const handleLogout = () => {
    toast.success("Logout Successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
    localStorage.clear();
    navigate("/");
  };

  const handleDashboard = () => {
    if (userRole == "Agent") {
      navigate('/agent-dashboard')
    }
    else if (userRole == 'Partner') {
      navigate('/agent-dashboard')
    }
    else if (userRole == 'Master Distributor') {
      navigate('/master-dashboard')
    }
    else if (userRole == "Distributor") {
      navigate('/distributor-state')
    }
    else if (userRole == "Super Distributor") {
      navigate('/superdistributor-dashboard')
    }
    else if (userRole == " State Head") {
      navigate('/statehead-dashboard')
    }


  }

  const ddRoutes = {
    "Instant Topup": "/instant-topup",
    "Move to MD": "/move-to-master-distributor",
    "Payment Deposit": "/payment-deposit",
    "Request Money": "/request-money",
    "Fund Request": "/fund-request",
    "Fund Request History": "/fund-request-history",
    "Ledger": "/ledger",
    "Partner Ledger": "/partner-ledger",
    "Move To Bank": "/move-to-bank",
    // "Fund Transfer":'/fund-transfer'
    "Aeps History": "/aepshistory",
    "Aeps": "/aeps",
    "DTH Recharge": "/dth-recharge",
    "Mobile Recharge": "/mobile-recharge",
    "Payment Deposit ( Cash / Online )": "/payment-deposit",
    "Credit Card Payment": "/creditcard-payment",
    "Agent Profile": "/profile",
    "Distributor Profile": "/profile",
    "Master Distributor Profile": "/profile",
    "Super Distributor Profile": "/profile",
    "Steat Head Profile": "/profile",
    "Aadhar PAY": "/adhar-pay",
    "Commissions": "/commission",
    "Bank Details": "/bankdetail",
    "Move to Distributor": "/move-to-distributor",
    "Credit Card Payment": "/creditcardpayment",
    "Agent Ledger": "/agentledger",
    "Fund Request History": "/fundrequesthistory",
    "Aadhar PAY History": "/adharpayhistory",
    "Money Transfer": "/moneytransfer",
    "Money Transfer History": "/moneytransferhistory",
    "Report A Complaint": "/reportacomplaint",
    "Payout Settelment": "/payoutsettelment",
    "UPI QR": "/qrcode",
    "Move To Bank History": "/move-to-bank-history",
    "Move to Distributor History": "/move-to-distributor-history",
    "Wallet Recharge History": "/wallet-reacharge-history",
    "Mobile Recharge ": "/utility-mobile",


    "Create Partner": "/distributor-add-user",
    "Manage Staff Here": "/masterdistributor-add-user",
    "Manage User": "/superdistributor-add-user",
    "Manage Staff": "/statehead-add-user",


    "Request Approve":"/request-approve-list",
    "Payment Approve":"/payment-approve-list",
    "Partner Ledger":"/partner-leder-list"
    // "Fund Transfer Request": "/Fund-transfer-request"
  };

  const navData = {
    Agent: {
      Accounts: [
        "Instant Topup",
        "Fund Request",
        "Commissions",
        "Bank Details",
        "UPI QR Mini",
        "Report A Complaint",
      ],
      Wallet: [
        "Request Money",
        "Move to Distributor",
        "Payment Deposit ( Cash / Online )",
        "Ledger",
        "Move To Bank",
        "Refund Avalaible",
      ],
      "Banking Service": [
        "Money Transfer",
        "Aeps",
        "Nepal Remmitance",
        "Credit Card Payment",
        "Aadhar PAY",
        "UPI Payments",
        "Wallet Recharge",
        "Payout Settelment",
      ],
      "Utility Services": [
        "Mobile Recharge",
        "DTH Recharge",
        "Uitility Payment ( Mannul)",
        "Uitility Payment 2.0",
        "Bharat Billpay",
      ],
      Travel: [
        "Air Ticket",
        " Hotel Booking",
        "Tour Package",
        "Bus Booking",
        "Texi Service",
      ],
      // CMS: [],
      "MY Profile": [
        "Agent Certificate",
        "BC Certificate",
        "Marketing Material",
        "Agent Profile",
        "TDS Certificate",
        "GST Invoice",
        "Bank Settings",
        "Partner e-KYC",
      ],
      Reports: [
        "Agent Ledger",
        "Transaction Recon",
        "Fund Request History",
        " Login Report",
        {
          "Transaction History": [
            "Aeps History",
            "Aadhar PAY History",
            "Money Transfer History",
            "UPI QR",
            "Utility Service",
            "Mini ATM Report",
            "BBPS",
            "Refund Report",
            "Move To Bank History",
            "Move to Distributor History",
            "Instant Topup",
            "Request Money",
            "Nepal Remmitance",
            "Credit Card Payment",
            "UPI Payments",
            "Wallet Recharge History",
            "Payout Settelment",]
        }

      ],




    },
    Partner: {
      Accounts: [
        "Instant Topup",
        "Fund Request",
        "Commissions",
        "Bank Details",
        "UPI QR Mini",
        "Report A Complaint",
      ],
      Wallet: [
        "Request Money",
        "Move to Distributor",
        "Payment Deposit ( Cash / Online )",
        "Ledger",
        "Move To Bank",
        "Refund Avalaible",
      ],
      "Banking Service": [
        "Money Transfer",
        "Aeps",
        "Nepal Remmitance",
        "Credit Card Payment",
        "Aadhar PAY",
        "UPI Payments",
        "Wallet Recharge",
        "Payout Settelment",
      ],
      "Utility Services": [
        "Mobile Recharge",
        "DTH Recharge",
        "Uitility Payment ( Mannul)",
        "Uitility Payment 2.0",
        "Bharat Billpay",
      ],
      Travel: [
        "Air Ticket",
        " Hotel Booking",
        "Tour Package",
        "Bus Booking",
        "Texi Service",
        
      ],
      // CMS: [],
      "MY Profile": [
        "Agent Certificate",
        "BC Certificate",
        "Marketing Material",
        "Agent Profile",
        "TDS Certificate",
        "GST Invoice",
        "Bank Settings",
        "Partner e-KYC",
      ],
      Reports: [
        "Agent Ledger",
        "Transaction Recon",
        "Fund Request History",
        " Login Report",
        {
          "Transaction History": [
            "Aeps History",
            "Aadhar PAY History",
            "Money Transfer History",
            "UPI QR",
            "Utility Service",
            "Mini ATM Report",
            "BBPS",
            "Refund Report",
            "Move To Bank History",
            "Move to Distributor History",
            "Instant Topup",
            "Request Money",
            "Nepal Remmitance",
            "Credit Card Payment",
            "UPI Payments",
            "Wallet Recharge History",
            "Payout Settelment",]
        }

      ],
        




    },
    Distributor: {
      // DashBoard: [],
      Accounts: [
        "Instant Topup",
        "Fund Request",
        "UPI QR Mini",
        "Create Partner",
        // "Manage Staff User",
        // "Commissions",
        "Bank Details",
        "E-Collect",
        "Report A Complaint",
        "Revoke Topup",
      ],
      Wallet: [
        {
          Khatabook: [
            "Request Money",
            "Payment Deposit",
            "Move to MD",
            "Ledger"
          ],
        },
        {
          "Khatabook Partner": [
            
            "Request Approve",
            "Payment Approve",
            "Partner Ledger"
          ]
          ,
        },
      ],


      Reports: [
        "Ledger",
        "Transaction Recon",
        "Agent Sale MIS",
        "Agent Service MIS",
        "Partner Topup Report",
        "Topup Request Report",
        "FTR Status Report"
      ],
      "Transaction Status": [
        "Partner Ledger",
        "Transaction Status",
        "Sender Number",
      ],
      "Device / Product": ["Request Product", "Replace / Repaire"],
      "My Profile": [
        "BC Certificate",
        "Distributor Profile",
        "Distributor Certificate",
        "Marketing Material",
        "TDS Certificate",
        "GST Invoice",
      ],
      //   "Home Icon": [],
    },
    "Master Distributor": {
      // DashBoard: [
        
      // ],
      Accounts: [
        "Instant Topup",
        "Fund Request",
        "Bank Details",
        "E- Collect",
        // "Create Distributor",
        "Manage Staff",
        // "Create Partner",
        // "Manage Partner",
        // "Commissions",
        "Revoke Topup",
      ],

      Wallet: [
        {
          "Khatabook Partner": [
            "Fund Transfer",
            "Fund Request Approve",
            "Update / Approve Payment",
            "Partner Ledger",
          ],
        },
        {
          "Khatabook Distributor": [
            "Fund Transfer",
            "Fund Request Approve",
            "Update / Approve Payment",
            "Khatabook Ledger",
          ],
        },
      ],
      Reports: [
        "Ledger",
        "Transaction Recon",
        "Fund Request Report",
        "Distributor Performance",
        "Distributor Topup Report",
        "Partner Topup Report",
        "FTR Status Report",
      ],
      "Transaction Status": [
        "Partner Ledger",
        "Transaction Status",
        "Sender Number",
      ],
      "Device / Product": [
        "Partner Ledger",
        "Transaction Status",
        "Sender Number",
      ],
      "My Profile": [
        "BC Certificate",
        "Master Distributor Profile",
        "Distributor Certificate",
        "Marketing Material",
        "TDS Certificate",
        "GST Invoice",
        "Partner e-KYC",
      ],
      //   "Home Icon": [],
    },
    "Super Distributor": {
      // DashBoard: [],
      Accounts: [
        // "Create MD",
        "Manage User",
        // "Create Distributor",

        // "Create Partner",
        // "Manage Partner"
      ],
      Wallet: [
        "UPI QR Code",
        "Bank Details",
        "E - Collect",
        "Instant Topup",
        "Fund Request",
        "Commissions",
        "Fund Topup",
        "Revoke Topup"

      ],
      Reports: [
        "Ledger",
        "SD Performance",
        "MD Performance",
        "Distributor Performance",
        "Topup Report",
        "FTR Status Report"

      ],
      "Transaction Status": [
        "Partner Ledger",
        "Transaction Status",
        "Sender Number"

      ],
      "Device / Product": [
        "Request Product",
        "Replace / Repaire"

      ],
      "My Profile": [
        "BC Certificate",
        "Super Distributor Profile",
        "Distributor Certificate",
        "Marketing Material",
        "TDS Certificate",
        "GST Invoice",
        "Partner e-KYC"

      ],
      //   "Home Icon": [],
    },
    "State Head": {
      // DashBoard: [],
      Accounts: [
        "Create SD",
        "Manage Staff",
        "Create MD",
        "Manage MD",
        "Create Distributor",
        "Manage Distributor",
        "Create Partner",
        "Manage Partner",
      ],
      Wallet: [
        "UPI QR Code",
        "Bank Details",
        "E- Collect",
        "Instant Topup",
        "Fund Request",
        "Commissions",
        "Fund Topup",
        "Revoke Topup",
      ],
      Reports: [
        "Ledger",
        "Transaction Recon",
        "Service / Product",
        "SD Performance",
        "MD Performance",
        "Distributor Performance",
        "Topup Report",
        "FTR Status Report",
      ],
      "Transaction Status": [
        "Partner Ledger",
        "Transaction Status",
        "Sender Number",
      ],
      "Device / Product": ["Request Product", "Replace / Repaire"],
      "My Profile": [
        "BC Certificate",
        "State Head Profile",
        "Distributor Certificate",
        "Marketing Material",
        "TDS Certificate",
        "GST Invoice",
        "Partner e-KYC",
      ],
      //   "Home Icon": [],
    },
  };

  //   //   // const getNavItemsByRole = (role) =>
  //   //   //   role &&
  //   //   //   Object.keys(navData[role]).map((item) => (
  //   //   //     <>
  //   //   //       {navData[role][item].length > 0 ? (
  //   //   //         <li className="nav-item dropdown">
  //   //   //           <a
  //   //   //             className="nav-link dropdown-toggle nav-dropdown "
  //   //   //             href="#"
  //   //   //             data-bs-toggle="dropdown"
  //   //   //             aria-expanded="false"
  //   //   //           >
  //   //   //             {item}
  //   //   //           </a>
  //   //   //           <ul className="dropdown-menu">
  //   //   //             {navData[role][item].map((subItem) =>
  //   //   //               typeof subItem != "object" ? (
  //   //   //                 <li className="">
  //   //   //                   <Link to={ddRoutes[subItem]} className="dropdown-item">
  //   //   //                     {subItem}
  //   //   //                   </Link>
  //   //   //                 </li>
  //   //   //               ) : (
  //   //   //                 <>
  //   //   //                   {Object.keys(subItem).map((x) => (
  //   //   //                     <li className="nav-item dropdown ">
  //   //   //                       <a
  //   //   //                         className="nav-link dropdown-toggle subitem-color"
  //   //   //                         href="#"
  //   //   //                         data-bs-toggle="dropdown"
  //   //   //                       >
  //   //   //                         {x}
  //   //   //                       </a>
  //   //   //                       <ul>
  //   //   //                         {subItem[x].map((y) => (
  //   //   //                           <li>
  //   //   //                             <Link to={ddRoutes[y]} className="dropdown-item">
  //   //   //                               {y}
  //   //   //                             </Link>
  //   //   //                           </li>
  //   //   //                         ))}

  //   //   //                       </ul>
  //   //   //                     </li>
  //   //   //                   ))}

  //   //   //                 </>
  //   //   //               )
  //   //   //             )}

  //   //   //           </ul>
  //   //   //         </li>
  //   //   //       ) : (
  //   //   //         <>Dashboard</>
  //   //   //       )}
  //   //   //     </>
  //   //   //   ));


  const getNavItemsByRole = (role) =>
    role &&
    navData[role] &&
    Object.keys(navData[role]).map((item) => (
      <React.Fragment key={item}>
        {navData[role][item] && navData[role][item].length > 0 ? (
          <li className="nav-item dropdown bold">
            <a
              className="nav-link dropdown-toggle nav-dropdown"
             disabled={kycData?.is_menu_enable==false}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {item}
            </a>
            <ul className="dropdown-menu">
              {navData[role][item].map((subItem) =>
                typeof subItem !== "object" ? (
                  <li key={subItem} className="" >
                    <Link to={ddRoutes[subItem]} className="dropdown-item">
                      {subItem}
                    </Link>
                  </li>
                ) : (
                  <li key={item + "-" + subItem}>
                    {Object.keys(subItem).map((x) => (
                      <React.Fragment key={item + "-" + subItem + "-" + x}>
                        <li className="nav-item dropdown subitem">
                          <a
                            className="nav-link dropdown-toggle subitem-color"
                            href="#"
                            data-bs-toggle="dropdown"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          >
                            {x}
                          </a>
                          <ul className="dropdown-menu">
                            {subItem[x].map((y) => (
                              <li key={item + "-" + subItem + "-" + x + "-" + y}>
                                <Link to={ddRoutes[y]} className="dropdown-item">
                                  {y}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </React.Fragment>
                    ))}
                  </li>
                )
              )}
            </ul>

          </li>
        ) : (
          <React.Fragment key={item}>Dashboard</React.Fragment>
        )}
      </React.Fragment>
    ));

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-recharge  ">
      <div className="container">

        {/* {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : ( */}
        <>
          {getNavItemsByRole(userRole)}

          <li className="nav-item dropdown">

            <a
              className="nav-link "
          
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false" style={{ width: "60px" }}
            >
              <img className="img-fluid logout" onClick={handleDashboard} src={home} />
            </a>
            {/* <ul
    className="dropdown-menu"
    style={{ minWidth: "unset", left: "-5px", padding: "0.5rem" }}
  >
    <li className="d-flex align-items-center">
      <i className="fa-solid fa-right-from-bracket" />
      <a
        className="dropdown-item"
        href="#"
        style={{ padding: "3px" }}
        onClick={}
      >
        Home Page
      </a>
    </li>
  </ul> */}
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false" style={{ width: "60px" }}
            >
              <img className="img-fluid logout" src={user} width="60px" />
            </a>
            <ul
              className="dropdown-menu"
              style={{ minWidth: "unset", left: "-5px", padding: "0.5rem" }}
            >

              <li className="d-flex align-items-center">
                <i className="fa-solid fa-right-from-bracket" />
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ padding: "3px" }}
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </>
        {/* ) */}

        {/* } */}

      </div>
    </nav>
  );
};

export default UserNav;


















