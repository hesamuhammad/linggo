import React, { useEffect } from "react";
import { Row, Col, Button, Avatar } from "antd";
import { connect } from "react-redux";
import { getProfileById } from "../actions";
import { withRouter } from "react-router-dom";

function Profile(props) {
  const {
    match: {
      params: { id }
    }
  } = props;
  useEffect(() => {
    props.getProfileById(id);
  }, []);
  console.log(props);
  return (
    <div className="paddingPage">
      <Row style={{ padding: "10px" }}>
        <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
        <Col xs={24} sm={20} md={16} lg={16} xl={16}>
          <div
            className="medFont desFont"
            style={{ display: "flex", justifyContent: "space-between"}}
          >
            <h1 className="titleFont">Hello {props.firstName}!</h1>
            {/* ISI */}

            <Button size="small" type="ghost" className="smallFont">
              Edit Profile
            </Button>
          </div>
          <div>
            <Row justify="center" className="smallFont desFont">
              <Col span={4}>
              <Avatar shape="square" size={96} icon="user" /></Col>
              <Col span={4} offset={1}>
                <p>
                  First Name <br />
                  Last Name <br />
                  Email <br />
                  Password
                </p>
              </Col>
              <Col span={10}>
                <p>
                  : namadepan{props.firstName}
                  <br />
                  : namabelakang{props.lastName}
                  <br />
                  : email{props.email}
                  <br />
                  : password{props.password}
                </p>
              </Col>
            </Row>
          </div>
          {/* END OF ISI */}
        </Col>
        <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    profile: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileById: () => {
      dispatch(getProfileById());
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
