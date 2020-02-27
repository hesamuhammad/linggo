import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete
} from "antd";

import { register } from "../../actions";

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
};

const SignUp = props => (
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
                console.log("INI VALUES", values);
                props.signup(values, props.history);
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
                <Form {...formItemLayout} onSubmit={handleSubmit}>
                    <Form.Item
                        label={
                            <span>
                                Username &nbsp;
                                <Tooltip title="What is your username?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                    >
                        <Input
                            type="text"
                            name="userName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.userName}
                        />
                        {errors.userName && touched.userName && errors.userName}
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
                        {errors.password && touched.password && errors.password}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        signup: (values, history) => {
            dispatch(register(values, history));
        }
    };
};

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
