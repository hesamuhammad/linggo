import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { login } from "../../actions";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Swal from "sweetalert2";

function SignIn(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <p style={{ textAlign: "center" }}>Sign In</p>
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
                        props.login(values);
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
                    <Form className="login-form" onSubmit={handleSubmit}>
                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: "rgba(0,0,0,.25)" }}
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
                                        style={{ color: "rgba(0,0,0,.25)" }}
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
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            disabled={isSubmitting}
                        >
                            Submit
                        </Button>
                        <Link to="/signup">Sign Up</Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(login(data))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
