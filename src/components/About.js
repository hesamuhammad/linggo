import React, { Component } from 'react';
import { Row, Col } from "antd";
import Translate from "../assets/images/trans.jpg";

export default class About extends Component {
    render() {
        return (
            <div style={{ paddingBottom: "4%" }}>
                <Row>
                    <Col span={12}>
                        <img src={Translate} style={{ display: "inline", justifyContent: "left", width: "100%" }} alt="translate"/>
                    </Col>
                    <Col span={14} className="about-right">
                            <p>LINGGO translation, the only dedicated Indonesian / English boutique translation studio who are not only translators but pride ourselves on being effective communicators.</p>
                            <p>As an independent, in-house translation studio we only work with languages in which we ourselves communicate.  Outsourcing is a not a term that we are familiar with.</p>
                            <p>We ONLY offer you the highest quality translations in the following language pairs:</p>
                            <ul>
                                <li>Indonesian - English</li>
                                <li>Malaysian - English</li>
                            </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}
