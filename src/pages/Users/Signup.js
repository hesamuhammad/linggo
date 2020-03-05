import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { register } from "../../actions/users";
import { withRouter } from "react-router";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Register(props) {
    return (
        <div className="myBg2 py-5">
            <Container>
                <Row>
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
                        <h3 className="text-center">Registration Form</h3>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
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
                                props.register(values);
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
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label for="exampleEmail">
                                            First Name
                                        </Form.Label>
                                        {errors.firstName &&
                                            touched.firstName &&
                                            errors.firstName}
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label for="exampleEmail">
                                            Last Name
                                        </Form.Label>
                                        {errors.lastName &&
                                            touched.lastName &&
                                            errors.lastName}
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label for="exampleEmail">
                                            Email
                                        </Form.Label>
                                        <br />
                                        {errors.email ? (
                                            <small style={{ color: "red" }}>
                                                {errors.email &&
                                                    touched.email &&
                                                    errors.email}
                                            </small>
                                        ) : (
                                            ""
                                        )}
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label for="exampleEmail">
                                            Password
                                        </Form.Label>
                                        {errors.password &&
                                            touched.password &&
                                            errors.password}
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                    </Form.Group>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        size="md"
                                        block
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                    <Col xs={3} md={4}></Col>
                </Row>
            </Container>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        register: data => dispatch(register(data))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Register));
