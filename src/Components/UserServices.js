import React from "react";
import moneyTransfer from "../images/money-transfer.png";
import qrCode from "../images/qr-code.png";
import refund from "../images/refund.png";
import database from "../images/database.png";
import user from "../images/user.png";

const UserServices = ({ userRole }) => {
  const userServicesByRole = {
    Agent: [
      {
        label: "Request Money",
        icon: refund,
        cssClass: "box5-bg-color",
      },
    
      {
        label: "UPI QR",
        icon: qrCode,
        cssClass: "box1-bg-color",
      },
      {
        label: "E- Collect",
        icon: database,
        cssClass: "box4-bg-color",
      },
      {
        label: "Instant Topup",
        icon: moneyTransfer,
        cssClass: "box2-bg-color",
      },
      {
        label: "Fund Request",
        icon: user,
        cssClass: "box6-bg-color",
      },
    ],
    Partner: [
      {
        label: "Request Money",
        icon: refund,
        cssClass: "box5-bg-color",
        url: "/request-money", 
      },

      {
        label: "UPI QR",
        icon: qrCode,
        cssClass: "box1-bg-color",
      },
      {
        label: "E- Collect",
        icon: database,
        cssClass: "box4-bg-color",
      },
      {
        label: "Instant Topup",
        icon: moneyTransfer,
        cssClass: "box2-bg-color",
        url: "/instant-topup", 
      },
      {
        label: "Fund Request",
        icon: user,
        cssClass: "box6-bg-color",
        url: "/fund-request", 
      },
    ],
    Distributor: [
      {
        label: "Request Money",
        icon: refund,
        cssClass: "box5-bg-color",
      },
      {
        label: "Approve Fund Request",
        icon: user,
        cssClass: "box3-bg-color",
      },
      {
        label: "UPI QR",
        icon: qrCode,
        cssClass: "box1-bg-color",
      },
      {
        label: "E- Collect",
        icon: database,
        cssClass: "box4-bg-color",
      },
      {
        label: "Instant Topup",
        icon: moneyTransfer,
        cssClass: "box2-bg-color",
      },
      {
        label: "Fund Request",
        icon: user,
        cssClass: "box6-bg-color",
      },
    ],
    "Master Distributor": [
      {
        label: "Request Money",
        icon: refund,
        cssClass: "box5-bg-color",
      },
      {
        label: "Approve Fund Request",
        icon: user,
        cssClass: "box3-bg-color",
      },
      {
        label: "UPI QR",
        icon: qrCode,
        cssClass: "box1-bg-color",
      },
      {
        label: "E- Collect",
        icon: database,
        cssClass: "box4-bg-color",
      },
      {
        label: "Instant Topup",
        icon: moneyTransfer,
        cssClass: "box2-bg-color",
      },
      {
        label: "Fund Request",
        icon: user,
        cssClass: "box6-bg-color",
      },
    ],
    "Super Distributor": [
      {
        label: "UPI QR",
        icon: qrCode,
        cssClass: "box1-bg-color",
      },
      {
        label: "E- Collect",
        icon: database,
        cssClass: "box4-bg-color",
      },
      {
        label: "Instant Topup",
        icon: moneyTransfer,
        cssClass: "box2-bg-color",
      },
      {
        label: "Fund Request",
        icon: user,
        cssClass: "box6-bg-color",
      },
    ],
    "State Head": [
      {
        label: "UPI QR",
        icon: qrCode,
        cssClass: "box1-bg-color",
      },
      {
        label: "E- Collect",
        icon: database,
        cssClass: "box4-bg-color",
      },
      {
        label: "Instant Topup",
        icon: moneyTransfer,
        cssClass: "box2-bg-color",
      },
      {
        label: "Fund Request",
        icon: user,
        cssClass: "box6-bg-color",
      },
    ],
  };


  const getServicesByRole = (role) =>
    role &&
    <ul className={`list-unstyled d-flex justify-content-around`}>
      {userServicesByRole[role]?.map((x) => (
        <a href={x.url} style={{ textDecoration: 'none', color: '#000' }} className={`${x.cssClass}`}>
          <li style={{ padding: '0px 10px' }}>
            <img className="img-fluid" style={{ paddingRight: '5px' }} src={x.icon} width="25px" />
            <h6 className="d-inline">
              <b>{x.label}</b>
            </h6>
          </li>
        </a>
      ))}
    </ul>
  return <div className="row">{getServicesByRole(userRole)}</div>
};

export default UserServices;
