import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { usePendingKycList } from '../customHooks/hooks';
import { getUserRejectedList } from '../redux/actions/userAction';

const RejectedKycList = () => {
    const [rest, setRest] = useState()
    
    const dispatch = useDispatch();
    const adminToken = JSON.parse(window.localStorage.getItem("adminToken"));
    const { listData } = usePendingKycList();
    console.log('listtttt', listData)

    const data = { access_token: adminToken }
    console.log('data', data)

    useEffect(() => {
        dispatch(getUserRejectedList(data)).then((res) => {
            console.log('hrshittt', res.data)
            setRest(res.data)
        })
    }, [])

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
                        <h2 className="my-4 adminHead"> Reject KYC List</h2>
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
                                        <th scope="col">Rejected Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {rest?.length > 0 &&
                                        rest?.map((item, index) => {
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
                                                    <td>{item.modify_at.toString().split(" ")[0]}</td>
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
    )
}

export default RejectedKycList;
