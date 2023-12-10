import React, { useState, useEffect } from "react";
import { verify } from "../constants/adminRoutes";
import { Link } from "react-router-dom";
import { usePendingKycList } from "../customHooks/hooks";
import { getUserActivateList } from '../redux/actions/userAction';
import { useDispatch } from 'react-redux';

const SearchUser = () => {

    const handleView = (id) => {
        window.localStorage.setItem("userId", JSON.stringify(id));
    };

    const [rest, setRest] = useState([]);
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const adminToken = JSON.parse(window.localStorage.getItem("adminToken"));
    const { listData } = usePendingKycList();

    const data = { access_token: adminToken };

    useEffect(() => {
        dispatch(getUserActivateList(data)).then((res) => {
            console.log('hrshittt', res.data);
            setRest(res.data);
        });
    }, []);

    const filteredData = rest.filter(item => (
        item.cust_name.toLowerCase().includes(search.toLowerCase()) ||
        item.father_name.toLowerCase().includes(search.toLowerCase())||
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
                                    <th scope="col" hidden>
                                        ID
                                    </th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Father Name</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Mobile Number</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Accepted Date</th>
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
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchUser;



// import React, { useState, useEffect } from "react";
// import { verify } from "../constants/adminRoutes";
// import { Link } from "react-router-dom";
// import { usePendingKycList } from "../customHooks/hooks";
// import { getUserActivateList } from '../redux/actions/userAction';
// import { useDispatch } from 'react-redux';

// const SearchUser = () => {

//     const handleView = (id) => {
//         window.localStorage.setItem("userId", JSON.stringify(id));
//     };

//     const [rest, setRest] = useState([]);
//     const [filteredRest, setFilteredRest] = useState([]); // New filtered state
//     const [search, setSearch] = useState('');

//     const dispatch = useDispatch();

//     const adminToken = JSON.parse(window.localStorage.getItem("adminToken"));
//     const { listData } = usePendingKycList();

//     const data = { access_token: adminToken };

//     useEffect(() => {
//         dispatch(getUserActivateList(data)).then((res) => {
//             console.log('hrshittt', res.data);
//             setRest(res.data);
//             setFilteredRest(res.data); // Initialize filtered list with all data
//         });
//     }, []);

//     useEffect(() => {
//         // Apply filtering logic whenever search input changes
//         const filteredData = rest.filter(item => (
//             item.cust_name.toLowerCase().includes(search.toLowerCase()) ||
//             item.father_name.toLowerCase().includes(search.toLowerCase())
//         ));
//         setFilteredRest(filteredData);
//     }, [search, rest]);

//     return (
//         <>
//             <div className="container">
//                 <input
//                     className="form-control me-2 search-user"
//                     type="search"
//                     value={search}
//                     placeholder="Search User.."
//                     aria-label="Search"
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </div>

//             <div className="container admin-dashboard-tabs main-bg mt-5 mb-5">
//                 <div className="container ">
//                     <h2 className="my-4 adminHead"> Approved KYC List</h2>
//                     <div style={{ minHeight: "80vh" }}>
//                         <table className="table table-bordered table-striped">
//                             <thead>
//                                 <tr>
//                                     <th scope="col" hidden>
//                                         ID
//                                     </th>
//                                     <th scope="col">Customer Name</th>
//                                     <th scope="col">Father Name</th>
//                                     <th scope="col">DOB</th>
//                                     <th scope="col">Mobile Number</th>
//                                     <th scope="col">Email Id</th>
//                                     <th scope="col">Accepted Date</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {filteredRest.length > 0 &&
//                                     filteredRest.map((item, index) => {
//                                         return (
//                                             <tr key={item.nuserid}>
//                                                 <th scope="row" hidden>
//                                                     {item.nuserid}
//                                                 </th>
//                                                 <td>{item.cust_name}</td>
//                                                 <td>{item.father_name}</td>
//                                                 <td>{item.dob}</td>
//                                                 <td>{item.mobile_no}</td>
//                                                 <td>{item.email_id}</td>
//                                                 <td>{item.modify_at.toString().split(" ")[0]}</td>
//                                             </tr>
//                                         );
//                                     })}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SearchUser;
