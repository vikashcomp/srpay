import React from 'react';
import AdminHeader from './AdminHeader';
import AdminNav from './AdminNav';

const AdminDashboard = () => {
    return (
        <>
            <AdminHeader />
            <AdminNav />
            <div className='container p-5'>
            <div className='main-bg d-flex justify-content-center align-items-center' style={{height:'400px'}}>
                <div className='heading'>
                    <h1><i>Welcome To SR Pay</i></h1>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default AdminDashboard;



