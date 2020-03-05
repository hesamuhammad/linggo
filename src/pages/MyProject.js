import React from "react";
import { Row, Col } from "antd";
import UsersProject from "../components/UsersProject";

export default function MyProject() {
  return (
    <div className="paddingPage">
      <Row style={{ padding: "10px" }}>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 16, offset: 4 }}
        >
          <UsersProject />
        </Col>
      </Row>
    </div>
  );
}
