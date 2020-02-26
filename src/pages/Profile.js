import React, { useEffect } from "react";
import { Row, Col, Button } from "antd";
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
console.log(props)
  return (
    <div className="paddingPage">
      <Row style={{ padding: "10px" }}>
        <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
        <Col xs={24} sm={20} md={16} lg={16} xl={16}>
          <h1 className="titleFont">Hello {props.firstName}!</h1>
          {/* ISI */}
          <div className="medFont desFont">
          <p>Detail Profile</p>
          <p>
          First Name: {props.firstName}<br/>
          Last Name: {props.lastName}<br/>
          Email: {props.email}<br/>
          Password: {props.password}</p>
          <Button size="small" type="primary" className="smallFont">Edit Profile</Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
