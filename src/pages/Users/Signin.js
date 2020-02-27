import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { Formik } from "formik";

const Basic = () => (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}
    >
        <h1 style={{ textAlign: "center" }}>Sign In</h1>
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
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
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
                <Form onSubmit={handleSubmit} className="login-form">
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
                        {errors.email && touched.email && errors.email}
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
                        {errors.password && touched.password && errors.password}
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={isSubmitting}
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Basic;
