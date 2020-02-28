import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Form, Input, Button, Row } from "antd";
import { postContact } from "../actions";

function Contact(props) {
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
    
    return (
        <div>
            <h1>Send a Message</h1>
            <Row>
            <Formik
                initialValues={{ name: "", email: "", brand: "" }}
                onSubmit={values => {
                    props.postContact(values);
                }}
            >
                {props => {
                    return (
                        <Form {...formItemLayout} onSubmit={props.handleSubmit}>
                            <Form.Item label="Name">
                                <Input
                                    name="name"
                                    onChange={props.handleChange}
                                    value={props.values.name}
                                />
                            </Form.Item>
                            <Form.Item label="Email">
                                <Input
                                    name="email"
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                />
                            </Form.Item>
                            <Form.Item label="Phone">
                                <Input
                                    name="phone"
                                    onChange={props.handleChange}
                                    value={props.values.phone}
                                />
                            </Form.Item>
                            <Form.Item label="Message">
                                <Input
                                    name="message"
                                    onChange={props.handleChange}
                                    value={props.values.message}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    );
                }}
            </Formik>
            </Row>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        postContact: values => {
            dispatch(postContact(values));
        }
    };
};

export default connect(null, mapDispatchToProps)(Contact);