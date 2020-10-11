import React from 'react';
import Tooth from '../../../images/tooth.png'
import Tooth1 from '../../../images/tooth (1).png'
import Dental from '../../../images/001-dental.png'
import { Col, Image, Row } from 'react-bootstrap';


const Services = () => {
    return (
        <div className="mt-3">
                <div className=" d-flex justify-content-center">
                    <div className="text">
                        <h3>Our Services</h3>
                        <h2>Services We Provide</h2>
                    </div>
                </div>
                <Row className="m-3">
                    <Col md={4}>
                        <div className="p-3 m-1">
                            <div className="pr-3 d-flex justify-content-center">
                                <Image height="75" src={Dental} alt="" />
                            </div>
                            <div className=" d-flex justify-content-center">
                                <div className="text p-3">
                                    <h4>Flouride Treatment</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo voluptatibus corporis, modi accusamus illum architecto iste</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className=" p-3 m-1">
                            <div className="pr-3 d-flex justify-content-center">
                                <img height="75" src={Tooth1} alt="" />
                            </div>
                            <div className=" d-flex justify-content-center">
                                <div className="text p-3">
                                    <h4>Cavity Filling</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo voluptatibus corporis, modi accusamus illum architecto iste</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-3 m-1">
                            <div className="pr-3 d-flex justify-content-center">
                                <img height="75" src={Tooth} alt="" />
                            </div>
                            <div className=" d-flex justify-content-center">
                                <div className="text p-3">
                                    <h4>Teeth Whitening </h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quo voluptatibus corporis, modi accusamus illum architecto iste</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
    );
};

export default Services;