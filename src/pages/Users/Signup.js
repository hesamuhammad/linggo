import React from "react";
import { Form, Input, Tooltip, Icon, Button } from "antd";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { register } from "../../actions/users";

function SignUp(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h1>Register</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Required";
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
                        <Form.Item
                            label={
                                <span>
                                    First Name &nbsp;
                                    <Tooltip title="What is your first name?">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            }
                        >
                            <Input
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                            {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                        </Form.Item>
                        <Form.Item
                            label={
                                <span>
                                    Last Name &nbsp;
                                    <Tooltip title="What is your last name?">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            }
                        >
                            <Input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                            {errors.lastName &&
                                touched.lastName &&
                                errors.lastName}
                        </Form.Item>
                        <Form.Item label="E-mail">
                            <Input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback>
                            <Input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password &&
                                touched.password &&
                                errors.password}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        register: data => dispatch(register(data))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
