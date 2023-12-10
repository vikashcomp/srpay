

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import moment from 'moment';
// import { getfundaddList } from '../redux/actions/addFundOtp';

// const AdminLedger = () => {
//     const dispatch = useDispatch();
//     const [search, setSearch] = useState('');
//     const [filterData, setFilterData] = useState([]);

//     // Fetching data from Redux store
//     const { addListData } = useSelector((state) => state.addList);
//     console.log('add list data',addListData)

//     // Token from localStorage
//     const token = JSON.parse(window.localStorage.getItem('adminToken'));

//     // Fetching data on component mount
//     useEffect(() => {
//         dispatch(getfundaddList({ access_token: token }));
//     }, [dispatch, token]);

//     // Filtering data based on search input
//     useEffect(() => {
//         if (search) {
//             let filteredData = addListData?.data?.filter((item) => {
//                 return String(item?.ac_no).toLowerCase().includes(search.toLowerCase());
//             });
//             setFilterData(filteredData);
//         } else {
//             setFilterData(addListData?.data);
//         }
//     }, [search, addListData]);

//     return (
//         <>
//             <div className='container mt-3'>
//                 <h2 style={{ color: 'red' }}>
//                     Agent <span style={{ color: 'blue' }}> Ledger</span>
//                 </h2>
//                 <div className='row main-bg'>
//                     <div className='col-4 d-flex '>
//                         <ul>
//                             <li style={{ color: '#e21d24', listStyle: 'none' }}>
//                                 <b>Search</b>
//                             </li>
//                             <input
//                                 type='text'
//                                 placeholder='Search'
//                                 onChange={(e) => setSearch(e.target.value)}
//                                 style={{ padding: '5px', border: '2px solid black', borderRadius: '5px' }}
//                             />
//                         </ul>
//                     </div>
//                     <div>
//                         <table className='table table-striped table-bordered'>
//                             <thead>
//                                 <tr>
//                                     <th scope='col' hidden>
//                                         Fund ID
//                                     </th>
//                                     <th scope='col'>Bank A/C Number</th>
//                                     <th scope='col'>Trans No</th>
//                                     <th scope='col'>Trans Date</th>
//                                     <th scope='col'>Trans Amount</th>
//                                     <th scope='col'>Remarks</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {filterData?.length > 0 &&
//                                     filterData?.map((item) => (
//                                         <tr key={item.nfundid}>
//                                             <th scope='row' hidden>
//                                                 {item.nfundid}
//                                             </th>
//                                             <td>{item.ac_no}</td>
//                                             <td>{item.trans_id}</td>
//                                             <td>{moment(item.trans_date).format('YYYY-MM-DD')}</td>
//                                             <td>{item.trans_amt}</td>
//                                             <td>{item.remarks}</td>
//                                         </tr>
//                                     ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AdminLedger;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getFundAddList } from '../redux/actions/addFundOtp';

const AdminLedger = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [filterData, setFilterData] = useState([]);

    // Assuming your Redux state has a reducer named 'addList'
    const { addListData } = useSelector((state) => state.addList);
    console.log("addListData", addListData)

    const token = JSON.parse(window.localStorage.getItem('adminToken'));

    useEffect(() => {
        dispatch(getFundAddList({ access_token: token }));
    }, []);


    return (
        <>
            <div className="container mt-3">
                <h2 style={{ color: 'red' }}>
                    Admin <span style={{ color: 'blue' }}> Ledger</span>
                </h2>

                <div className="row main-bg">
                    <div className="col-4 d-flex ">
                        <ul>
                            <li style={{ color: '#e21d24', listStyle: 'none' }}>
                                <b>Search</b>
                            </li>
                            <input
                                type="text"
                                placeholder="Search"
                                onChange={(e) => setSearch(e.target.value)}
                                style={{ padding: '5px', border: '2px solid black', borderRadius: '5px' }}
                            />
                        </ul>
                    </div>
                    <div>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Bank A/C Number</th>
                                    <th scope="col">Trans No</th>
                                    <th scope="col">Trans Date</th>
                                    <th scope="col">Trans Amount</th>
                                    <th scope="col">Credit</th>
                                    <th scope="col">Debit</th>
                                    <th scope="col">Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    addListData?.length > 0 &&
                                    addListData?.map((item) => {
                                        return (
                                            <tr key={item.nfundid}>
                                                <td>{item.ac_no}</td>
                                                <td>{item.trans_id}</td>
                                                <td>{moment(item.trans_date).format('YYYY-MM-DD')}</td>
                                                <td>{item.trans_amt}</td>
                                                <td>{item.is_dr === false ? 'Credit' : '-'}</td>
                                                <td>{item.is_dr === true ? 'Debit' : null}</td>
                                                <td>{item.remarks}</td>
                                            </tr>

                                        )
                                    })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLedger;






