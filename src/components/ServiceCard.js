import React, { Component } from "react";
import { Card } from "antd";
import { Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

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
          <HashLink className="hashHover" to="/service#service1" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}
              >
              <Card
                bordered={false}
                style={{
                  maxWidth: 250,
                  minHeight: "300px",
                  marginTop: "8%"
                }}
                hoverable
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "3vh"
                  }}
                >
                  General <br />
                  Translation{" "}
                </p>
                <hr style={{ opacity: "70%" }} />
                <p style={{ fontSize: "2vh" }}>
                  We have over 25,000 certified translation professionals
                  working in more than 120 languages to handle any project you
                  have.
                </p>
              </Card>
            </HashLink>
          </Col>
          <Col xs={12} md={3}>
          <HashLink className="hashHover" to="/service#service2" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}
              >
            <Card
              bordered={false}
              style={{
                maxWidth: 250,
                minHeight: "300px",
                marginTop: "8%"
              }}
              hoverable
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "3vh"
                }}
              >
                Localization & Transcreation
              </p>
              <hr style={{ opacity: "70%" }} />
              <p style={{ fontSize: "2vh" }}>
                It for those clients who want to add English language to their
                business/corporate w but are not excited by the idea of a
                literal translation.
              </p>
            </Card>
            </HashLink>
          </Col>
          <Col xs={12} md={3}>
          <HashLink className="hashHover" to="/service#service3" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}
              >
            <Card
              bordered={false}
              style={{
                maxWidth: 250,
                minHeight: "300px",
                marginTop: "8%"
              }}
              hoverable
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "3vh"
                }}
              >
                Subtitling & Transtitling
              </p>
              <hr style={{ opacity: "70%" }} />
              <p style={{ fontSize: "2vh" }}>
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
          <Col xs={12} md={3}>
          <HashLink className="hashHover" to="/service#service1" scroll={el => { el.scrollIntoView(true); window.scrollBy({top: 0 -50, behavior: 'smooth'})}}
              >
            <Card
              bordered={false}
              style={{
                maxWidth: 250,
                minHeight: "300px",
                marginTop: "8%"
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
              <p style={{ fontSize: "2vh" }}>
                Identity Documents
                <br />
                Educational Transcripts <br />
                Affidavits & Sworn Testimonies
                <br />
                Judicial Decisions
              </p>
            </Card>
            </HashLink>
          </Col>
        </Row>
      </div>
    );
  }
}
