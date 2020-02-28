import React from "react";
import PricingDetail from "../components/PricingDetail";
import PricingCard from "../components/PricingCard";
import { Row, Col } from "antd";


export default function Pricing() {
  return (
    <div className="paddingPage">
      <Row style={{padding: "10px" }}>
        <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
        <Col xs={24} sm={20} md={16} lg={16} xl={16}>
          <PricingDetail />
        </Col>
        <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
        </Row>

        <Row style={{ background: "#ECECEC", padding: "15px 0" }}>
          <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
          <Col xs={24} sm={20} md={16} lg={16} xl={16}>
            <PricingCard />
        </Col>
        <Col xs={0} sm={2} md={4} lg={4} xl={4}></Col>
      </Row>
    </div>
  );
}
