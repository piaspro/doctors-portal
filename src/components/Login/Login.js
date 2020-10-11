import React from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import './Login.css'
import image from '../../images/Group 140.png'

const Login = () => {

    return (
        <Row className=" d-flex align-items-center">
            <Col className=" d-flex justify-content-center">
                <div className="login-form p-3">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Col>
            <Col className=" d-flex justify-content-end">
                <Image src={image} height="600" alt="..." ></Image>
            </Col>
        </Row>
    );
};

export default Login;