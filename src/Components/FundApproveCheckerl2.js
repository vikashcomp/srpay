
import React, { useEffect, useRef ,useState} from 'react'
import { useDownloadExcel } from "react-export-table-to-excel";
import {  getFundAcceptSecond, getFundListSecond } from '../redux/actions/fundRequestAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import Pagination from "react-js-pagination";
import html2canvas from 'html2canvas';
import moment from 'moment';

const initialState={
    from:"",
    to:"",
}

const FundApproveCheckerl2 = () => {
    const [iState,updateState]=useState(initialState);
    const {from,to}=iState;
    const [activePage, updateActivePage] = useState(1);
    const [serialNo, updateSerialNo] = useState(10);
    const dispatch = useDispatch();
    const tableRef=useRef()
  
    const { fundRequestListSecond } = useSelector((state) => state.fundRequestForm);
    console.log("fundRequestListSecond",fundRequestListSecond)

    const token = JSON.parse(window.localStorage.getItem('adminToken'))
    
    useEffect(() => {
        dispatch(getFundListSecond({ access_token: token }))
    }, [])
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        updateState({...iState,[name]:value})
    }

    const handlePageChange = (pageNumber) => {
        let ser = pageNumber * 10;
        updateSerialNo(ser);
        updateActivePage(pageNumber);
        //  dispatch(getCategoryList({ pageNumber: pageNumber }));
      };

  

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "Users table",
        sheet: "Users",
      });
      const exportToPDF = () => {
        const doc = new jsPDF();
    
        // Find the table element
        const table = document.querySelector('table');
    
        // Use html2canvas to convert the table to an image
        html2canvas(table).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = 190;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
          // Add the image to the PDF
          doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    
          // Save the PDF
          doc.save('table.pdf');
        });
    }

    const handleAcceptReject = (item,type) => {
        if(type===true){
            const data = { access_token: token, is_approved:'true', nreq_id:item.nreq_id }
            dispatch(getFundAcceptSecond(data)).then((res) => {
                if (res.success == true) {
                    dispatch(getFundListSecond({ access_token: token }))
                    toast.success("Request Accepted successfully!", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
                } else {
                    toast.error('Something Went Wrong')
                }
            }) 
        }
        else {
            const data = { access_token: token, is_approved:false, nreq_id:item.nreq_id }
            dispatch(getFundAcceptSecond(data)).then((res) => {
                if (res.success == true) {
                    dispatch(getFundListSecond({ access_token: token }))
                    toast.success("Request Rejected successfully!", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1000,
                    });
                } else {
                    toast.error('Something Went Wrong')
                }
            })
        }
      
    }

    const handleApply = () => {
        if (!from && !to ) {
          toast.error("Please select the date", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
        }
        if (from && !to) {
          toast.error("Please Select To Date", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
        }
        if (!from && to) {
            toast.error("Please Select To Date", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
          }
        if (from && to) {
          if (to < from) {
            toast.error("To Date can't be less than From Date", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 1000,
            });
            updateState({...iState,endDate:""})
          }
        }
    
        if (
          (from && to && from < to)
        ) {
          let data = {from,to,access_token: token};
          dispatch(getFundListSecond(data)).then((res) => {
            if (res.status === true) {
              toast.success("Data Found Successfully", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
              });
              updateState({
                ...iState,
              });
            } else {
              toast.error("No Data Found", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
              });
            }
          });
        }
      };

    const handleRefresh = () => {
        updateState(initialState);
        dispatch(getFundListSecond({ access_token: token }))
        updateActivePage(1);
        updateSerialNo(10);
      };

    return (
        <>
            <div className='container fundRequestHistory mt-3'>
                <h2 style={{ color: "#e21d24" }}>Fund <span style={{ color: "#2e26c6" }}>Request History</span></h2>
                <div className='row'>
                    <div className='col-12 main-bg mt-3 mb-3 '>
                        <div className='col-4 d-flex'>
                        <ul>
                                <li style={{ color: "#e21d24" }}><b>From</b></li>
                                <input type="date" name='from' value={from} max={new Date().toISOString().split("T")[0]} onChange={handleInputChange}></input>
                            </ul>
                            <ul>
                                <li style={{ color: "#2e26c6" }}><b>To</b></li>
                                <input type="date" name='to'  value={to} min={moment(from).format("YYYY-MM-DD")} onChange={handleInputChange}></input>
                            </ul>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-primary" type="submit" onClick={handleApply}>Search</button>
                            </div>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-primary" type="submit" onClick={handleRefresh}>Clear</button>
                            </div>


                        </div>
                        <div className='d-flex  mb-3 right-button'>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-primary" type="submit" onClick={onDownload}>Export To Excel</button>
                            </div>
                            <div className="ms-5 mt-3 search-button">
                                <button className="btn btn-danger" type="submit" onClick={exportToPDF}>Export To PDF</button>
                            </div>
                        </div>

                        <div className="container">
                            <table className="table table-bordered table-striped" ref={tableRef}>
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">FTR No</th>
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">FTR Date</th>
                                        <th scope="col">Transaction Id</th>
                                        <th scope="col">Mode</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        fundRequestListSecond?.length > 0 ?
                                        fundRequestListSecond?.map((x,i) => {
                                            return (
                                                <tr key={i}>
                                                    <th scope="row">{i+1+serialNo-10}</th>
                                                    <th scope="row">{x.ftr_ref_no}</th>
                                                    <td>{x.user_id}</td>
                                                    <td>{x.cust_name}</td>
                                                    <td>{x.amount}</td>

                                                    <td>{x.ftr_date.toString().split(" ")[0]}</td>
                                                    <td>{x.trans_id}</td>
                                                    <td>{x.mode_trans}</td>
                                                    <td>
                                                      {
                                                           x.is_l2_approved==false&& x.is_l2_rejected==false?
                                                           <button className="btn btn-success me-2" type="submit" onClick={()=>handleAcceptReject(x,true)} >Accept</button>
                                                           :
                                                           x.is_l2_approved==true &&x.is_l2_rejected==false ?
                                                           <h6 className='verified'>Accepted</h6>
                                                           :""
                                                      }
                                                      
                                                        {
                                                          x.is_l2_approved==false&&x.is_l2_rejected==false?
                                                          <button className="btn btn-danger" type="submit" onClick={()=>handleAcceptReject(x,false)}>Reject</button>:
                                                          x.is_l2_rejected==true && x.is_l2_approved==false?
                                                          <h6 className='rejected'>Rejected</h6>
                                                          :""
                                                        }
                                                      
                                                    </td>

                                                </tr>
                                            )
                                        }):  <tr>
                                        <td colSpan="10">
                                          <p>No Data found.</p>
                                        </td>
                                      </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="Pagination">
                    <ul>
                      {/* {couponList?.data?.total > 0 && ( */}
                        <Pagination
                          activePage={activePage}
                          itemsCountPerPage={10}
                        //   totalItemsCount={couponList?.data?.total}
                          pageRangeDisplayed={5}
                          onChange={handlePageChange}
                          itemClass="page-item"
                          linkClass="page-link"
                        />
                      {/* )} */}
                    </ul>
                  </div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default FundApproveCheckerl2;

