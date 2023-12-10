import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Container } from 'react-bootstrap';

const PayBillModel = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <li variant="success" onClick={handleShow} >
                <a href=''>
                    view Bills
                </a>
            </li>

            <Modal show={show} onHide={handleClose} animation={false}  >
                <Modal.Header closeButton >
                    <Modal.Title>Gas Bill Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col >
                        <div className='row  p-3'>
                            <div className='col-lg-6'>
                                <h6><b>Name</b></h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6>Chiranji Lal</h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6><b>Service Provider</b></h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6>Indane Gas, Jaipur</h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6><b>Bill Number</b></h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6>7656565575757</h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6><b>Bill Amount</b></h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6>₹ 5000</h6>
                            </div>
                            {/* <div className='col-lg-6'>
                                <h6><b>Bill Date</b></h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6>25-5-2023</h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6><b>Bill Due Date</b></h6>
                            </div>
                            <div className='col-lg-6'>
                                <h6>25-5-2023</h6>
                            </div> */}

                        </div>
                    </Col>
                    <Container>
                        <div className="d-grid">
                            <Button variant="danger" size="md">
                                Pay Now
                            </Button>
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PayBillModel;
