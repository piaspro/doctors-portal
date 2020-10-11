import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import BookingForm from '../BookingForm/BookingForm';

const BookAppointment = ({book, date}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
            <Col lg={4} className="p-3">
                <div className="background p-3 m-1 d-flex justify-content-center">
                    <div className="text">
                        <h3>{book.name}</h3>
                        <h5>{book.time}</h5>
                        <p>{book.spaces}</p>
                        <button onClick={handleShow} className="btn">Book Appointment</button>
                        <BookingForm
                        handleClose={handleClose}
                        show={show}
                        name={book.name}
                        date={date}
                            ></BookingForm>
                    </div>
                </div>
            </Col>
    );
};

export default BookAppointment;