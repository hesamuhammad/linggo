import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { login } from "../../actions";

import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

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
                onSubmit={(values, actions) => {
                    props.login(values, props.history);
                }}
            >
                {props => (
                    <Form className="login-form" onSubmit={props.handleSubmit}>
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
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
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
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                            />
                        </Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            disabled={props.isSubmitting}
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
        login: (values, history) => {
            dispatch(login(values, history));
        }
    };
};

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
