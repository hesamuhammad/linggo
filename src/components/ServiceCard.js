<<<<<<< HEAD
import React, { Component } from "react";
import { Card } from "antd";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ServiceCard2 extends Component {
    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    marginLeft: "10%",
                    marginRight: "10%",
                    paddingRight: "4%",
                    paddingLeft: "4%"
                }}
            >
                <Row
                    align="middle"
                    justify="space-around"
                    gutter={[16, 16]}
                    style={{
                        paddingLeft: "5%",
                        paddingRight: "5%",
                        backgroundColor: "#ACBFAD",
                        paddingTop: "4%",
                        paddingBottom: "4%"
                    }}
                >
                    <Col xs={12} md={3}>
                        <Link to="/service#service4">
                            <Card
                                bordered={false}
                                style={{
                                    maxWidth: 250,
                                    minHeight: "300px",
                                    marginTop: "3%"
                                }}
                                hoverable
                            >
                                <p
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "2.5vh"
                                    }}
                                >
                                    General <br />
                                    Translation{" "}
                                </p>
                                <hr style={{ opacity: "70%" }} />
                                <p>
                                    We have over 25,000 certified translation
                                    professionals working in more than 120
                                    languages to handle any project you have.
                                </p>
                            </Card>
                        </Link>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card
                            bordered={false}
                            style={{
                                maxWidth: 250,
                                minHeight: "300px",
                                marginTop: "3%"
                            }}
                            hoverable
                        >
                            <p
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "2.5vh"
                                }}
                            >
                                Localization & Transcreation
                            </p>
                            <hr style={{ opacity: "70%" }} />
                            <p>
                                It for those clients who want to add English
                                language to their business/corporate w but are
                                not excited by the idea of a literal
                                translation.
                            </p>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card
                            bordered={false}
                            style={{
                                maxWidth: 250,
                                minHeight: "300px",
                                marginTop: "3%"
                            }}
                            hoverable
                        >
                            <p
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "2.5vh"
                                }}
                            >
                                Subtitling & Transtitling
                            </p>
                            <hr style={{ opacity: "70%" }} />
                            <p>
                                Movies
                                <br />
                                TV Shows
                                <br />
                                Conferences
                                <br />
                                Documentaries
                                <br />
                                Research
                                <br />
                                Interviews
                            </p>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card
                            bordered={false}
                            style={{
                                maxWidth: 250,
                                minHeight: "300px",
                                marginTop: "3%"
                            }}
                            hoverable
                        >
                            <p
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "2.5vh"
                                }}
                            >
                                NAATI Certified & Sworn Translations
                            </p>
                            <hr style={{ opacity: "70%" }} />
                            <p>
                                Identity Documents
                                <br />
                                Educational Transcripts <br />
                                Affidavits & Sworn Testimonies
                                <br />
                                Notarized Deeds
                                <br />
                                Judicial Decisions
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
=======
import React from "react";
import { HashLink } from "react-router-hash-link";
import { Card, Col, Row } from "antd";
import "../App.css";

export default function DetailPricing() {
  return (
    <div style={{ textAlign: "center" }}>
      <Row
        style={{
          backgroundColor: "#f5f5f5",
          paddingTop: "2%",
          paddingBottom: "2%"
        }}
      >
        <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
        <Col xs={22} sm={20} md={16} lg={16} xl={16}>
          <Row
            align="middle"
            justify="space-around"
            gutter={[16, 16]}
            style={{ margin: "0 auto", padding: "10px" }} type="flex" 
          >
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
            >
              {/* <HashLink className="hashHover" to="/service#service1" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}} > */}
                <Card hoverable bordered={false} height= "100%">
                  <p
                    style={{
                      fontSize: "2.5vh",
                      fontWeight: "bold"
                    }}
                  >
                    General Translation
                  </p>
                  <hr style={{ opacity: "70%" }} />
                  <p className="desFont"
                    style={{
                      fontSize: "1.2vh",
                      fontSize: "bold"
                    }}
                  >
                    We have over 25,000 certified translation professionals
                    working in more than 120 languages to handle any project you
                    have.
                  </p>
                </Card>
              {/* </HashLink> */}
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
            >
              <HashLink className="hashHover" to="/service#service2" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}>
                <Card hoverable bordered={false} height= "100%">
                  <p
                    style={{
                      fontSize: "2.5vh",
                      fontWeight: "bold"
                    }}
                  >
                    Localization & Transcreation
                  </p>
                  <hr style={{ opacity: "70%" }} />
                  <p className="desFont"
                    style={{
                      fontSize: "1.2vh",
                      fontSize: "bold"
                    }}
                  >
                    It for those clients who want to add English language to
                    their business/corporate w but are not excited by the idea
                    of a literal translation.
                  </p>
                </Card>
              </HashLink>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
            >
              <HashLink className="hashHover" to="/service#service3" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}>
                <Card hoverable bordered={false} height= "100%">
                  <p
                    style={{
                      fontSize: "2.5vh",
                      fontWeight: "bold"
                    }}
                  >
                    Subtitling & Transtitling
                  </p>
                  <hr style={{ opacity: "70%" }} />
                  <p className="desFont"
                    style={{
                      fontSize: "1.2vh",
                      fontSize: "bold"
                    }}
                  >
                    Movies
                    <br />
                    TV Shows
                    <br />
                    Conferences
                    <br />
                    Documentaries
                    <br />
                    Research
                    <br />
                    Interviews
                  </p>
                </Card>
              </HashLink>
            </Col>
            <Col
              xs={{ span: 12, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 0 }}
            >
              <HashLink className="hashHover" to="/service#service4" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}>
                <Card hoverable bordered={false} height= "100%">
                  <p
                    style={{
                      fontSize: "2.5vh",
                      fontWeight: "bold"
                    }}
                  >
                    NAATI Certified & Sworn Translations
                  </p>
                  <hr style={{ opacity: "70%" }} />
                  <p className="desFont"
                    style={{
                      fontSize: "1.2vh",
                      fontSize: "bold"
                    }}
                  >
                    Identity Documents
                    <br />
                    Educational Transcripts
                    <br />
                    Affidavits & Sworn Testimonies
                    <br />
                    Notarized Deeds
                    <br />
                    Judicial Decisions
                  </p>
                </Card>
              </HashLink>
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={2} md={4} lg={4} xl={4}></Col>
      </Row>
    </div>
  );
>>>>>>> 31bf3ea20851efd6160b40a2065eaaefa357aef0
}
