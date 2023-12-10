

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { verify } from "../constants/adminRoutes";
import { Link } from "react-router-dom";
import { usePendingKycList } from "../customHooks/hooks";
import { blockunblock } from "../redux/actions/blockunblockAction";
import { getUserActivateList } from '../redux/actions/userAction';
import { useDispatch } from 'react-redux';

const BlockUnblock = () => {
    const handleView = (id) => {
        window.localStorage.setItem("userId", JSON.stringify(id));
    };

    const [rest, setRest] = useState([]);
    const [search, setSearch] = useState('');
    const [blockedUsers, setBlockedUsers] = useState([]);

    const dispatch = useDispatch();

    const adminToken = JSON.parse(window.localStorage.getItem("adminToken"));
    const { listData } = usePendingKycList();

    const data = { access_token: adminToken };

    useEffect(() => {
        dispatch(getUserActivateList(data)).then((res) => {
            console.log('hrshittt', res.data);
            setRest(res.data);
            setBlockedUsers(res.data.filter(user => user.isBlocked));
        });
    }, []);

    const toggleBlockStatus = async (userId, is_block) => {
        if (userId) {
            const data = { user_id: userId, is_block: !is_block, access_token: adminToken };
            try {
                const res = await dispatch(blockunblock(data));
    
                if (res.success) {
                    toast.success(res.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
    
                    // Update blocked status locally for immediate UI update
                    setBlockedUsers(prevBlockedUsers => {
                        const updatedUsers = prevBlockedUsers.map(user => {
                            if (user.nuserid === userId) {
                                return { ...user, isBlocked: !is_block };
                            }
                            return user;
                        });
                        return updatedUsers;
                    });
    
                    // Refresh the page
                    window.location.reload();
                } else {
                    toast.error("Error: Unable to update user status.");
                }
            } catch (error) {
                console.error('An error occurred:', error);
                toast.error("An error occurred while updating user status.");
            }
        }
    };
    

    const filteredData = rest.filter(item => (
        item.cust_name.toLowerCase().includes(search.toLowerCase()) ||
        item.father_name.toLowerCase().includes(search.toLowerCase()) ||
        item.modify_at.toString().includes(search) ||
        item.dob.toString().includes(search)
    ));

    return (
        <>
            <div className="container mt-5">
                <input
                    className="form-control me-2 search-user"
                    type="search"
                    value={search}
                    placeholder="Search User.."
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="container admin-dashboard-tabs main-bg mt-5 mb-5">
                <div className="container ">
                    <div style={{ minHeight: "80vh" }}>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" hidden >
                                        ID
                                    </th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Father Name</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Accepted Date</th>
                                    <th scope="col">Block/Unblock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0 &&
                                    filteredData.map((item, index) => {
                                        return (
                                            <tr key={item.nuserid}>
                                                <th scope="row" hidden>
                                                    {item.nuserid}
                                                </th>
                                                <td>{item.cust_name}</td>
                                                <td>{item.father_name}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.mobile_no}</td>
                                                <td>{item.email_id}</td>
                                                <td>{item.modify_at.toString().split(" ")[0]}</td>
                                                <td>
                                                    {item.is_block === true ? (
                                                        <button
                                                            className="btn btn-sm btn-danger"
                                                            onClick={() => toggleBlockStatus(item.nuserid, item.is_block)}
                                                        >
                                                            Block
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn btn-sm btn-success"
                                                            onClick={() => toggleBlockStatus(item.nuserid, item.is_block)}
                                                        >
                                                            Unblock
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlockUnblock;



