import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import img from '../../images/Mask Group 1.png'
import location from '../../images/location.png'
import clock from '../../images/clock.png'
import telephone from '../../images/telephone.png'
import Header from '../Header/Header';
import './Home.css'
import { Link } from 'react-router-dom';
import Services from './Services/Services';
import DentalServices from './Dental services/DentalServices';
import Testimonials from './Testimonials/Testimonials';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Doctors from './Doctors/Doctors';

const Home = () => {
    return (
        <Container className="back-img">
            <Header></Header>
                <Row className="pt-5 d-flex align-items-center">
                    <Col lg={6} className=" d-flex justify-content-center">
                        <div className="info-container ">
                            <h1>Your New Smile <br/> Starts here</h1> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo voluptatibus corporis, modi accusamus illum architecto iste</p>
                            <Link to='/register'><button className="btn">Get Appointment</button></Link>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="p-3">
                            <Image src={img} alt="..." fluid ></Image>
                        </div>
                    </Col>
                </Row>
                <div className=" d-flex justify-content-center">
                <Row className="w-75 mt-3">
                    <Col lg={4}>
                        <div className="back-color p-2 m-1 d-flex justify-content-center align-items-center">
                            <div className="p-3">
                                <Image height="50" src={clock} alt="" />
                            </div>
                            <div>
                                <h6>Opening Hours</h6>
                                <small className="text-white">9:00am to 10:00pm</small>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="color p-2 m-1 d-flex justify-content-center align-items-center">
                            <div className="p-3">
                                <img height="50" src={location} alt="" />
                            </div>
                            <div>
                                <h6>Visit Our location</h6>
                                <small className="text-white"> Dhaka, Bangladesh</small>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="back-color p-2 m-1 d-flex justify-content-center align-items-center">
                            <div className="p-3">
                                <img height="50" src={telephone} alt="" />
                            </div>
                            <div>
                                <h6>Contact Us Now</h6>
                                <small className="text-white">+008801882489272</small>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
        <Services></Services>
        <DentalServices></DentalServices>
        <Testimonials></Testimonials>
        <Blogs></Blogs>
        <Doctors></Doctors>
        <Contact></Contact>
        <Footer></Footer>
        </Container>
            
    );
};

export default Home;