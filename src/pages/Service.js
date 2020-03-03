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
import BreadServices from "../components/BreadServices";

export default function Service() {
<<<<<<< HEAD
    return (
        <div style={{ marginBottom: "2%" }}>
            <BreadServices />
            <Row
                id="service1"
                name="service1"
                style={{ backgroundColor: "white", paddingTop: "2%" }}
            >
                <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                    <Row gutter={16} style={{ padding: "30px 0" }}>
                        <Col span={12}>
                            <img
                                src={Service1}
                                alt=""
                                className="serviceImages"
                                width="400"
                                height="200"
                            />
                        </Col>
                        <Col span={12}>
                            <ServiceGeneral />
                        </Col>
                    </Row>
                </Col>
            </Row>
=======
  return (
    <div>
      <BreadServices/>
      <Row id="service1" name="service1" style={{ backgroundColor: "#f5f5f5" }}>
        <Col xs={{span: 22, offset: 1}} sm={{span: 20, offset: 2}} md={{span: 16, offset: 4}} lg={{span: 16, offset: 4}} xl={{span: 16, offset: 4}}>
          <Row gutter={16} style={{ padding: "30px 0" }}>
            <Col span={12}>
              <img
                src={Service1}
                alt=""
                className="serviceImages"
                width="400"
                height="200"
              />
            </Col>
            <Col span={12}>
              <ServiceGeneral />
            </Col>
          </Row>
        </Col>
      </Row>
>>>>>>> 31bf3ea20851efd6160b40a2065eaaefa357aef0

            <Row
                id="service2"
                name="service2"
                style={{ backgroundColor: "white" }}
            >
                <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                    <Row
                        gutter={16}
                        style={{
                            padding: "30px 0",
                            backgroundColor: "#ACBFAD"
                        }}
                    >
                        <Col order={1} span={12}>
                            <ServiceLocalization />
                        </Col>
                        <Col span={12}>
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
            </Row>

            <Row
                id="service3"
                name="service3"
                style={{ backgroundColor: "white" }}
            >
                <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                    <Row gutter={16} style={{ padding: "30px 0" }}>
                        <Col span={12}>
                            <img
                                src={Service3}
                                alt=""
                                className="serviceImages"
                                width="400"
                                height="200"
                            />
                        </Col>
                        <Col span={12}>
                            <ServiceSubtitling />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row
                name="service4"
                id="service4"
                style={{ backgroundColor: "white" }}
            >
                <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                    <Row
                        gutter={16}
                        style={{
                            padding: "30px 0",
                            backgroundColor: "#ACBFAD"
                        }}
                    >
                        <Col order={1} span={12}>
                            <ServiceNaati />
                        </Col>
                        <Col order={2} span={12}>
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
            </Row>
        </div>
    );
}
