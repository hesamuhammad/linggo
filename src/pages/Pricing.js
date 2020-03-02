import React from "react";
import PricingDetail from "../components/PricingDetail";
import PricingCard from "../components/PricingCard";
import { Row, Col } from "antd";

export default function Pricing() {
<<<<<<< HEAD
    return (
        <div className="paddingPage">
            <Row style={{ padding: "1%" }}>
                <Col xs={0} sm={2} md={5} lg={5} xl={5}></Col>
                <Col xs={24} sm={20} md={14} lg={14} xl={14}>
                    <PricingDetail />
                </Col>
                <Col xs={0} sm={2} md={5} lg={5} xl={5}></Col>
            </Row>

            <Row style={{ background: "#ECECEC", padding: "15px 0" }}>
                <Col xs={2} sm={4} md={4} lg={4} xl={4}></Col>
                <Col xs={20} sm={16} md={16} lg={16} xl={16}>
                    <PricingCard />
                </Col>
                <Col xs={2} sm={4} md={4} lg={4} xl={4}></Col>
            </Row>
        </div>
    );
=======
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
          <PricingDetail />
        </Col>
      </Row>

      <Row style={{ background: "#ECECEC", padding: "15px 0" }}>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 16, offset: 4 }}
        >
          <PricingCard />
        </Col>
      </Row>
    </div>
  );
>>>>>>> dd87772556134d0f7c076e60e2540ed8f5942790
}
