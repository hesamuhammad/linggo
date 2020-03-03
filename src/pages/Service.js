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
    return (
      <div>
        <div>
          <BreadServices />
        </div>
        <div className="paddingPage">
            <Row
                id="service1"
                name="service1"
                style={{ backgroundColor: "#f5f5f5" }}
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

            <Row id="service2" name="service2">
                <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                    <Row gutter={16} style={{ padding: "30px 0" }}>
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
                style={{ backgroundColor: "#f5f5f5" }}
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

            <Row name="service4" id="service4">
                <Col
                    xs={{ span: 22, offset: 1 }}
                    sm={{ span: 20, offset: 2 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                    <Row gutter={16} style={{ padding: "30px 0" }}>
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
      </div>
    );
}
