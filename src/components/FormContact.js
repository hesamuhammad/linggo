import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { connect } from "react-redux";
import { postContact } from "../actions/contact";

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };

    handleChange = e => {
        let name = e.target.name;
        let val = e.target.value;
        if (name === "name") {
            this.setState({ name: val });
        } else if (name === "email") {
            this.setState({ email: val });
        } else if (name === "subject") {
            this.setState({ phone: val });
        } else if (name === "message") {
            this.setState({ message: val });
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, email, phone, message } = this.state;
        this.props.sendContact({
            name: name,
            email: email,
            phone: phone,
            message: message
        });
    };

    render() {
        const { TextArea } = Input;

        return (
            <div>
                <Row>
                    <Col
                        xs={24}
                        md={24}
                        style={{ paddingLeft: "5%", paddingRight: "8%" }}
                    >
                        <p
                            style={{
                                textAlign: "left",
                                fontWeight: "bold",
                                fontSize: "5vh",
                                marginTop: "5%"
                            }}
                        >
                            Contacts{" "}
                        </p>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                            <Form.Item>
                                <Input
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder="Full Name"
                                    style={{
                                        borderStyle: "none",
                                        borderBottom: "1px solid"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    name="email"
                                    onChange={this.handleChange}
                                    placeholder="Email Address"
                                    style={{
                                        borderStyle: "none",
                                        borderBottom: "1px solid"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    name="phone"
                                    onChange={this.handleChange}
                                    placeholder="Phone Number"
                                    style={{
                                        borderStyle: "none",
                                        borderBottom: "1px solid"
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <TextArea
                                    name="message"
                                    onChange={this.handleChange}
                                    rows={4}
                                    placeholder="Your Message"
                                    style={{
                                        borderStyle: "none",
                                        borderBottom: "1px solid"
                                    }}
                                ></TextArea>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    size="large"
                                    style={{
                                        backgroundColor: "#283e2e",
                                        borderColor: "#283e2e",
                                        color: "white"
                                    }}
                                >
                                    SEND
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendContact: data => dispatch(postContact(data))
    };
};

export default connect(null, mapDispatchToProps)(Contact);
