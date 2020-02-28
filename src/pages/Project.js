import React from "react";
import { Row, Col } from "antd";
import UsersProject from "../components/UsersProject"

export default function Project() {
  return (
    <div className="paddingPage">
      <Row style={{ padding: "10px" }}>
        <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
        <Col xs={24} sm={20} md={16} lg={16} xl={16}>
          <UsersProject/>
        </Col>
        <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
      </Row>
    </div>
  );
}
