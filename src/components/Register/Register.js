import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import img from '../../images/Mask Group 1.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Register.css'
import Footer from '../Home/Footer/Footer';
import BookAppointment from './BookAppointment/BookAppointment';
import BookingForm from './BookingForm/BookingForm';

const Register = () => {
    const BookingData = [{
        id: 0,
        name: "Teeth Orthodontics",
        time: "8.00AM - 9.00AM",
        spaces: "10 SPACES AVAILABLE"
    },
        {
        id: 1,
        name: "Cosmetic Dentistry",
        time: "10.00AM - 12.00AM",
        spaces: "10 SPACES AVAILABLE"
    },
        {
        id: 2,
        name: "Teeth Cleaning",
        time: "5.00AM - 7.00AM",
        spaces: "10 SPACES AVAILABLE"
    },
        {
        id: 3,
        name: "Cavity Protection",
        time: "7.00AM - 9.00AM",
        spaces: "10 SPACES AVAILABLE"
    },
        {
        id: 4,
        name: "Teeth Orthodontics",
        time: "8.00AM - 9.00AM",
        spaces: "10 SPACES AVAILABLE"
    },
        {
        id: 5,
        name: "Teeth Orthodontics",
        time: "8.00AM - 9.00AM",
        spaces: "10 SPACES AVAILABLE"
    }]

    const options = {  day: 'numeric', month: 'long',year: 'numeric' };
    const [date, setDate] = useState(new Date())
    const onChange = (newDate) => {
        setDate(newDate);
    }
    return (
        <Container className="background-img">
            <Header></Header>
            <Container>
                <Row className="pt-5">
                    <Col lg={6}>
                        <div className="info-container justify-content-center">
                            <h2 className="p-3">Appointment</h2>
                            <div>
                                <Calendar
                                    minDate={new Date()}
                                    onChange={onChange}
                                    value={date}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="pt-5">
                            <Image src={img} height="300" alt="..." fluid ></Image>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="mt-3">
                    <div className=" d-flex justify-content-center">
                        <div className="text p-5">
                            <h3>Appointment Available On {(date.toLocaleDateString(undefined, options))}</h3>
                        </div>
                    </div>
                </div>
                <Row>
                    {
                        BookingData.map(book => <BookAppointment key={book.id} 
                            book={book} 
                            date={date}
                            ></BookAppointment>)
                    }
                </Row>
            </Container>
            <BookingForm></BookingForm>
            <Footer></Footer>
        </Container>
    );
};

export default Register;