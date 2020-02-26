import React from "react";
// import ServiceCard from "../components/ServiceCard";
import { Row, Col } from "antd";
import Service1 from "../assets/images/service1.jpg";
import ServiceGeneral from "../components/ServiceGeneral";
import ServiceLocalization from "../components/ServiceLocalization";
import ServiceNaati from "../components/ServiceNaati";
import ServiceSubtitling from "../components/ServiceSubtitling";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Service() {
  return (
    <div className="paddingPage container-fluid">
      <Row>
        <Col xs={{span: 10}} sm={{span: 8}}>
          <img src={Service1} alt="" className="serviceImages" width="400" height="200"/>
        </Col>
        <Col xs={{span: 14}} sm={{span: 16}}>
          <ServiceGeneral />
        </Col>
      </Row>

      <ServiceLocalization />
      <ServiceSubtitling />
      <ServiceNaati />
    </div>
  );
}
