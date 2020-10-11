import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import doctor from '../../../images/doctor.png'
import teethRepair from '../../../images/Mask Group 3.png'
import mask from '../../../images/Mask Group 4.png'
import './DentalServices.css'

const DentalServices = () => {
    return (
        <Container>
                <Row>
                    <Col md={5}>
                        <div className="p-3">
                            <Image src={teethRepair} alt="..." fluid ></Image>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="pt-5 justify-content-center txt">
                            <h1>Exceptional Dental Care On Your Terms</h1>
                            <p className="pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo voluptatibus corporis, modi accusamus illum architecto iste.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo voluptatibus corporis, modi accusamus illum architecto iste.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo voluptatibus corporis, modi accusamus illum architecto iste </p>
                            <button className="btn">Learn More</button>
                        </div>
                    </Col>
                </Row>
            <div className="p-3">
                <Row style={{ backgroundImage: `url('${mask}')` }} className="setImage d-flex align-items-center">
                    <Col md={5}>
                        <div className="doctors-pic">
                            <img height="375" src={doctor} alt="" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="doctors-info pt-5 d-flex align-items-center">
                            <div>
                                <h3>Appointment</h3>
                                <h2>Your New Smile Starts here</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo voluptatibus corporis, modi accusamus illum architecto iste</p>
                                <button className="btn">Get Appointment</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </Container>
    );
};

export default DentalServices;