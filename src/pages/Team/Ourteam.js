import React, { Component } from "react";
import axios from "axios";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

export default class Ourteam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            item1: [],
            item2: [],
            item3: [],
            item4: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const data1 = await axios.get("https://api.github.com/users/rhfauzi");
        const data2 = await axios.get(
            "https://api.github.com/users/hesamuhammad"
        );
        const data3 = await axios.get("https://api.github.com/users/inanuriy");
        const data4 = await axios.get("https://api.github.com/users/pirman-ss");

        this.setState({ item1: data1.data });
        this.setState({ item2: data2.data });
        this.setState({ item3: data3.data });
        this.setState({ item4: data4.data });
    };
    render() {
        const { item1, item2, item3, item4 } = this.state;
        console.log(item1, item2, item3, item4);
        return (
            <div>
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "3%",
                        paddingLeft: "20%",
                        paddingRight: "20%"
                    }}
                >
                    <p style={{ fontWeight: "bold", fontSize: "5vh" }}>
                        About us
                    </p>
                    <p style={{ fontSize: "2.5vh" }}>
                        At Linggo, our vision is for everyone to read and
                        publish <br />
                        across languages, with one click.
                    </p>
                    <p
                        style={{
                            fontWeight: "bold",
                            marginTop: "10%",
                            fontSize: "5vh"
                        }}
                    >
                        Our Team
                    </p>
                </div>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingLeft: "10%",
                        paddingRight: "10%"
                    }}
                >
                    <Col span={4}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item1.avatar_url} />}
                        >
                            <Meta
                                title={item1.name}
                                description="Back End Developer"
                            />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item2.avatar_url} />}
                        >
                            <Meta
                                title={item2.name}
                                description="Front End Developer"
                            />
                        </Card>
                    </Col>

                    <Col span={4}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item3.avatar_url} />}
                        >
                            <Meta
                                title={item3.name}
                                description="Front End Developer"
                            />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item4.avatar_url} />}
                        >
                            <Meta
                                title={item4.name}
                                description="Front End Developer"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
