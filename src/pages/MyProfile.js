import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { getProfileById } from "../actions";
import { withRouter } from "react-router-dom";

{
    /* <Avatar size={64} icon={<UserOutlined />} />; */
}

function MyProfile(props) {
    const {
        match: {
            params: { id }
        }
    } = props;

    useEffect(() => {
        props.getProfileById(id);
    }, []);
    console.log(props, "props");

    return (
        <div style={{ backgroundColor: "#ACBFAD" }}>
            {props.profile !== undefined &&
                props.profile.map((item, key) => {
                    return (
                        <Row style={{ paddingTop: "5%" }}>
                            <Col xs={0} md={1}></Col>
                            <Col
                                xs={12}
                                md={3}
                                style={{
                                    backgroundColor: "white",
                                    marginBottom: "5%",
                                    height: "100%"
                                    // borderRadius: "25px"
                                }}
                            >
                                <div
                                    className="medFont desFont"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: "15%"
                                    }}
                                >
                                    <Avatar
                                        className="serviceImage"
                                        width="200"
                                        height="200"
                                        shape="round"
                                        size={96}
                                        icon="user"
                                    />
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "2.5vh",
                                            marginBottom: 0
                                        }}
                                    >
                                        Hello, {item.firstName}!
                                    </p>
                                    <p
                                        style={{
                                            color: "#797687",
                                            marginBottom: "1%"
                                        }}
                                    >
                                        {item.email}
                                    </p>
                                    <Button
                                        size="small"
                                        type="ghost"
                                        className="medFont"
                                        style={{ marginBottom: "7%" }}
                                    >
                                        Edit Profile
                                    </Button>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <p>
                                        First Name: : {item.firstName} <br />
                                        Last Name : {item.lastName} <br />
                                        Password : *******
                                    </p>
                                </div>
                            </Col>
                            <Col
                                xs={12}
                                md={7}
                                style={{
                                    backgroundColor: "white",
                                    marginBottom: "5%"
                                }}
                            >
                                <div style={{ paddingTop: "5%" }}>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "2.5vh"
                                        }}
                                    >
                                        Overview
                                    </p>
                                </div>
                            </Col>
                            <Col xs={0} md={1}></Col>
                        </Row>
                    );
                })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProfileById: id => {
            dispatch(getProfileById(id));
        }
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MyProfile)
);
