import React from "react";
// import ServiceCard from "../components/ServiceCard";
import { Row, Col } from "antd";
import Service1 from "../assets/images/service1.jpg";
import Service2 from "../assets/images/service2.jpg";
import Service3 from "../assets/images/service3.jpg";
import Service4 from "../assets/images/service4.jpg";
import ServiceGeneral from "../components/ServiceGeneral";
import ServiceLocalization from "../components/ServiceLocalization";
import ServiceNaati from "../components/ServiceNaati";
import ServiceSubtitling from "../components/ServiceSubtitling";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Service() {
  return (
    <div className="paddingPage">
      <Row style={{ backgroundColor: "#f5f5f5" }}>
        <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
        <Col xs={22} sm={20} md={16} lg={16} xl={16}>
          <Row gutter={16} style={{ padding: "30px 0" }}>
            <Col xs={{ span: 10 }} sm={{ span: 8 }}>
              <img
                src={Service1}
                alt=""
                className="serviceImages"
                width="400"
                height="200"
              />
            </Col>
            <Col xs={{ span: 14 }} sm={{ span: 16 }}>
              <ServiceGeneral />
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
        </Row>

        <Row>
          <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
          <Col xs={22} sm={20} md={16} lg={16} xl={16}>
            <Row gutter={16} style={{ padding: "30px 0" }}>
              <Col order={1} xs={{ span: 14 }} sm={{ span: 16 }}>
                <ServiceLocalization />
              </Col>
              <Col order={2} xs={{ span: 10 }} sm={{ span: 8 }}>
                <img
                  src={Service2}
                  alt=""
                  className="serviceImages"
                  width="400"
                  height="200"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
        </Row>

        <Row style={{ backgroundColor: "#f5f5f5" }}>
          <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
          <Col xs={22} sm={20} md={16} lg={16} xl={16}>
            <Row gutter={16} style={{ padding: "30px 0" }}>
              <Col xs={{ span: 10 }} sm={{ span: 8 }}>
                <img
                  src={Service3}
                  alt=""
                  className="serviceImages"
                  width="400"
                  height="200"
                />
              </Col>
              <Col xs={{ span: 14 }} sm={{ span: 16 }}>
                <ServiceSubtitling />
              </Col>
            </Row>
          </Col>
          <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
        </Row>

        <Row>
          <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
          <Col xs={22} sm={20} md={16} lg={16} xl={16}>
            <Row gutter={16} style={{ padding: "30px 0" }}>
              <Col order={1} xs={{ span: 14 }} sm={{ span: 16 }}>
                <ServiceNaati />
              </Col>
              <Col order={2} xs={{ span: 10 }} sm={{ span: 8 }}>
                <img
                  src={Service4}
                  alt=""
                  className="serviceImages"
                  width="400"
                  height="200"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
        </Row>
    </div>
  );
}
