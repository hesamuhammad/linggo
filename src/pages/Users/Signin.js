import React, { Fragment } from "react";
import { Form, Icon, Input, Button } from "antd";
import { Row, Col } from "react-bootstrap";

import { login } from "../../actions";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Swal from "sweetalert2";

function SignIn(props) {
    return (
        <div style={{ backgroundColor: "#eeeeee" }}>
            <Row style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                <Col xs={3} md={4}></Col>
                <Col
                    xs={6}
                    md={4}
                    style={{
                        backgroundColor: "#ACBFAD",
                        borderRadius: "20px",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        paddingTop: "5%",
                        paddingBottom: "4%"
                    }}
                >
                    <div>
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "4.5vh",
                                fontWeight: "bold",
                                marginBottom: "3%"
                            }}
                        >
                            SIGN IN
                        </p>
                        <Formik
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = "Email Required";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        values.email
                                    )
                                ) {
                                    errors.email = "Invalid email address";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "info",
                                        title: "Loading",
                                        showConfirmButton: false,
                                        timerProgressBar: true,
                                        timer: 1000
                                    });
                                    props.login(values, props.history);
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                                /* and other goodies */
                            }) => (
                                <Form
                                    className="login-form"
                                    onSubmit={handleSubmit}
                                >
                                    <Form.Item>
                                        <Input
                                            prefix={
                                                <Icon
                                                    type="lock"
                                                    style={{
                                                        color: "rgba(0,0,0,.25)"
                                                    }}
                                                />
                                            }
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Input
                                            prefix={
                                                <Icon
                                                    type="lock"
                                                    style={{
                                                        color: "rgba(0,0,0,.25)"
                                                    }}
                                                />
                                            }
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                    </Form.Item>
                                    <div>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="login-form-button"
                                            disabled={isSubmitting}
                                            size="lg"
                                            style={{
                                                display: "flex",
                                                backgroundColor: "#283e2e",
                                                borderColor: "#283e2e",
                                                fontSize: "bold",
                                                justifyContent: "center"
                                            }}
                                        >
                                            Submit
                                        </Button>
                                        {/* <br /> */}

                                        <Link
                                            to="/signup"
                                            style={{
                                                marginTop: "5px",
                                                fontSize: "bold",
                                                justifyContent: "center"
                                            }}
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Col>
                <Col xs={3} md={4}></Col>
            </Row>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data, history) => dispatch(login(data, history))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
