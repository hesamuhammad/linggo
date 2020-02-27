import React, { Component } from "react";
import axios from "axios";
import { Card, CardDeck } from "react-bootstrap";
import { Icon } from "antd";
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
                <div
                    style={{
                        paddingLeft: "20%",
                        paddingRight: "20%",
                        textAlign: "center"
                    }}
                >
                    <CardDeck>
                        <Card style={{ borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src={item1.avatar_url}
                                style={{
                                    borderRadius: "50%"
                                }}
                            />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold" }}>
                                    {item1.name}
                                </Card.Title>
                                <Card.Text
                                    style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: "2vh"
                                    }}
                                >
                                    Full Stack Developer
                                </Card.Text>
                                <div>
                                    <Icon
                                        type="facebook"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="twitter-square"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="instagram"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="mail"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src={item2.avatar_url}
                                style={{
                                    borderRadius: "50%"
                                }}
                            />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold" }}>
                                    Hesa Muhammad
                                </Card.Title>
                                <Card.Text
                                    style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: "2vh"
                                    }}
                                >
                                    Front End Developer
                                </Card.Text>
                                <div>
                                    <Icon
                                        type="facebook"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="twitter-square"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="instagram"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="mail"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                        {/* </CardDeck>
                    <CardDeck> */}
                        <Card style={{ borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src={item3.avatar_url}
                                style={{
                                    borderRadius: "50%"
                                }}
                            />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold" }}>
                                    {item3.name}
                                </Card.Title>
                                <Card.Text
                                    style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: "2vh"
                                    }}
                                >
                                    Front End Developer
                                </Card.Text>
                                <div>
                                    <Icon
                                        type="facebook"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="twitter-square"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="instagram"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="mail"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ borderStyle: "none" }}>
                            <Card.Img
                                variant="top"
                                src={item4.avatar_url}
                                style={{
                                    borderRadius: "50%"
                                }}
                            />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold" }}>
                                    {item4.name}
                                </Card.Title>
                                <Card.Text
                                    style={{
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: "2vh"
                                    }}
                                >
                                    Front End Developer
                                </Card.Text>
                                <div>
                                    <Icon
                                        type="facebook"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="twitter-square"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="instagram"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                    <Icon
                                        type="mail"
                                        theme="filled"
                                        style={{
                                            fontSize: "3vh",
                                            padding: "0 2%"
                                        }}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        );
    }
}
