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
      {/* {props.users !== undefined &&
        props.users.map((item, key) => {
          console.log(item);
          return ( */}
            <Row style={{ padding: "10px"}}>
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 20, offset: 2 }}
                md={{ span: 16, offset: 4 }} 
                lg={{ span: 16, offset: 4 }}
                xl={{ span: 16, offset: 4 }}
              >
                <div
                  className="medFont desFont"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center"  }}
                >
                  <h1 className="titleFont">Hello
                   {/* {item.firstName} */}
                   !</h1>

                  <Button size="small" type="ghost" className="smallFont">
                    Edit Profile
                  </Button>
                </div>
                <div>
                  <Row justify="center" className="smallFont desFont">
                    <Col span={5}>
                      <Avatar
                        className="serviceImage"
                        width="200"
                        height="200"
                        shape="square"
                        size={96}
                        icon="user"
                      />
                    </Col>
                    <Col span={5} offset={1}>
                      <p>
                        First Name <br />
                        Last Name <br />
                        Email <br />
                        Password
                      </p>
                    </Col>
                    <Col span={10}>
                      <p>
                        {/* : {item.firstName}
                        <br />: {item.lastName}
                        <br />: {item.email}
                        <br />: {item.password} */}
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          {/* );
        })} */}
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
