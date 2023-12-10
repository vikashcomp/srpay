import React from "react";
import { verify } from "../constants/adminRoutes";
import { Link } from "react-router-dom";
import { usePendingKycList } from "../customHooks/hooks";

const AdminKycList = () => {
  const { listData } = usePendingKycList();

  const handleView = (id) => {
    window.localStorage.setItem("userId", JSON.stringify(id));
  };
  return (
    <div className="container admin-dashboard-tabs main-bg mt-5 mb-5">
     

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="tab1"
          role="tabpanel"
          aria-labelledby="tab1-tab"
        >
          <div className="container ">
            <h2 className="my-4 adminHead"> Pending KYC List</h2>
            <div style={{ minHeight: "80vh" }}>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col" hidden>
                      ID
                    </th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Father Name</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Action</th>
                    {/* <th scope="col">Role</th> */}
                  </tr>
                </thead>
                <tbody>
                  {listData?.data?.length > 0 &&
                    listData?.data?.map((item, index) => {
                      return (
                        <tr>
                          <th scope="row" hidden>
                            {item.nuserid}
                          </th>
                          <td>{item.cust_name}</td>
                          <td>{item.father_name}</td>
                          <td>{item.dob}</td>
                          <td>{item.mobile_no}</td>
                          <td>{item.email_id}</td>
                          <td>
                            <Link
                              to={verify}
                              className="Blue"
                              onClick={() => handleView(item.nuserid)}
                            >
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                              >
                                View
                              </button>
                            </Link>
                          </td>
                          {/* <td>{item.role}</td> */}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default AdminKycList;
