import React, { Component } from "react";
import ServiceCard from "../components/ServiceCard";
// import { Row, Col } from "antd";

export default class Home extends Component {
  render() {
    return (
      <div className="paddingPage">
            <h1>INI HOME</h1>
            <ServiceCard />
      </div>
    );
  }
}
