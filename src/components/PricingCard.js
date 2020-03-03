import React from "react";
import { Card, Divider } from "antd";
import { Col, Row } from "react-bootstrap";
import "../App.css";

export default function PricingCard() {
<<<<<<< HEAD
    return (
        <div
            style={{
                textAlign: "center",
                marginLeft: "14%",
                marginRight: "14%",
                marginBottom: "2%",
                paddingRight: "3%",
                paddingLeft: "3%"
            }}
        >
            <Row
                align="middle"
                justify="space-around"
                gutter={[16, 16]}
                style={{
                    paddingLeft: "3%",
                    paddingRight: "3%",
                    backgroundColor: "#ACBFAD",
                    paddingTop: "5%",
                    paddingBottom: "5%"
                }}
            >
                <Col xs={12} md={4}>
                    <Card
                        hoverable
                        bordered={false}
                        style={{
                            minHeight: "350px",
                            maxWidth: "300px",
                            marginTop: "2%"
                        }}
                    >
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "2.5vh"
                            }}
                        >
                            General
                        </p>
                        <Divider />
                        {/* <hr style={{ opacity: "30%" }} /> */}
                        <h3 className="medFont titleFont">
                            $ 0.11
                            <br />
                            per word
                        </h3>
                        <hr style={{ opacity: "30%" }} />
                        <p className="desFont" style={{ fontSize: "2vh" }}>
                            Good for internal use:
                            <br />
                            Social Media Post
                            <br />
                            User Generated Content
                            <br />
                            Articles
                            <br />
                            Letters
                            <br />
                            Brochures
                            <br />
                            CVs
                            <br />
                        </p>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card
                        hoverable
                        bordered={false}
                        style={{
                            minHeight: "410px",
                            maxWidth: "300px",
                            marginTop: "2%"
                        }}
                    >
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "2.5vh"
                            }}
                        >
                            Specialized
                        </p>
                        <Divider />
                        <h3 className="medFont titleFont">
                            $ 0.14
                            <br />
                            per word
                        </h3>
                        <p className="desFont" style={{ fontSize: "2vh" }}>
                            <hr style={{ opacity: "30%" }} />
                            Best for professional content:
                            <br />
                            Training manuals
                            <br />
                            Clinical trials
                            <br />
                            RFPs
                            <br />
                            User Interface & string
                            <br />
                        </p>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card
                        hoverable
                        bordered={false}
                        style={{
                            minHeight: "410px",
                            maxWidth: "300px",
                            marginTop: "2%"
                        }}
                    >
                        <p
                            style={{
                                fontWeight: "bold",
                                fontSize: "2.5vh"
                            }}
                        >
                            NAATI Certified
                        </p>
                        <Divider />
                        <h3 className="medFont titleFont">
                            $ 0.17
                            <br />
                            per word
                        </h3>
                        <hr style={{ opacity: "30%" }} />
                        <p className="desFont" style={{ fontSize: "2vh" }}>
                            For your legal and immigration translation needs.
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    );
=======
  return (
    <div>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Row justify="space-around" gutter={[16, 16]}>
          <Col xs={{span: 20, offset: 2}} sm={{span: 8, offset: 0}} md={{span: 8, offset: 0}} lg={{span: 8, offset: 0}}>
            <Card hoverable bordered={false} style={{ height: "330px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "2.5vh"
                }}
              >
                General
              </p>
              <Divider />
              {/* <hr style={{ opacity: "30%" }} /> */}
              <h3 className="medFont titleFont">
                $ 0.11
                <br />
                per word
              </h3>
              <hr style={{ opacity: "30%" }} />
              <p className="medFont desFont">
                Good for internal use:
                <br />
                Social Media Post
                <br />
                User Generated Content
                <br />
                Articles
                <br />
                Letters
                <br />
                Brochures
                <br />
                CVs
                <br />
              </p>
            </Card>
          </Col>
          <Col xs={{span: 20, offset: 2}} sm={{span: 8, offset: 0}} md={{span: 8, offset: 0}} lg={{span: 8, offset: 0}}>
            <Card hoverable bordered={false} style={{ height: "330px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "2.5vh"
                }}
              >
                Specialized
              </p>
              <Divider />
              <h3 className="medFont titleFont">
                $ 0.14
                <br />
                per word
              </h3>
              <p className="medFont desFont">
                <hr style={{ opacity: "30%" }} />
                Best for professional content:
                <br />
                Training manuals
                <br />
                Clinical trials
                <br />
                RFPs
                <br />
                User Interface & string
                <br />
              </p>
            </Card>
          </Col>
          <Col xs={{span: 20, offset: 2}} sm={{span: 8, offset: 0}} md={{span: 8, offset: 0}} lg={{span: 8, offset: 0}}>
            <Card hoverable bordered={false} style={{ height: "330px" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "2.5vh"
                }}
              >
                NAATI Certified
              </p>
              <Divider />
              <h3 className="medFont titleFont">
                $ 0.17
                <br />
                per word
              </h3>
              <hr style={{ opacity: "30%" }} />
              <p className="medFont desFont">
                For your legal and immigration translation needs.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
>>>>>>> 31bf3ea20851efd6160b40a2065eaaefa357aef0
}
