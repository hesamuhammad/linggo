import React from "react";
import { Form, Input, Tooltip, Icon, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: []
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue("password")) {
            callback("Two passwords that you enter is inconsistent!");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

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

        return (
            <div style={{ display: "flex" }}>
                <div style={{ width: 400, maxWidth: 300, margin: "auto" }}>
                    <h2 style={{ textAlign: "center" }}>Register</h2>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
                            {getFieldDecorator("nickname", {
                                rules: [
                                    {
                                        required: true,
                                        message:
                                            "Please input your first name!",
                                        whitespace: true
                                    }
                                ]
                            })(<Input />)}
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
                            {getFieldDecorator("nickname", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your last name!",
                                        whitespace: true
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="E-mail">
                            {getFieldDecorator("email", {
                                rules: [
                                    {
                                        type: "email",
                                        message:
                                            "The input is not valid E-mail!"
                                    },
                                    {
                                        required: true,
                                        message: "Please input your E-mail!"
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator("password", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your password!"
                                    },
                                    {
                                        validator: this.validateToNextPassword
                                    }
                                ]
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            {getFieldDecorator("agreement", {
                                valuePropName: "checked"
                            })(
                                <Checkbox>
                                    I have read the{" "}
                                    <Link
                                        to="/terms-of-service/privacy-policy/"
                                        target="_blank"
                                    >
                                        Privacy Policy
                                    </Link>
                                </Checkbox>
                            )}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const signup = Form.create({ name: "register" })(RegistrationForm);

export default signup;
