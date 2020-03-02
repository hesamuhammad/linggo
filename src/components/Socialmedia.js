import React, { Component } from "react";
import { Icon } from "antd";
export default class Socialmedia extends Component {
    render() {
        return (
            <div>
                <a
                    href="https://www.google.com"
                    target="_blank"
                    style={{ color: "white" }}
                    rel="noopener noreferrer"
                >
                    <Icon
                        type="facebook"
                        theme="filled"
                        style={{ fontSize: "4vh", padding: "0 2%" }}
                    />
                </a>
                <a
                    href="https://www.google.com"
                    target="_blank"
                    style={{ color: "white" }}
                    rel="noopener noreferrer"
                >
                    <Icon
                        type="twitter-square"
                        theme="filled"
                        style={{ fontSize: "4vh", padding: "0 2%" }}
                    />
                </a>
                <a
                    href="https://www.google.com"
                    target="_blank"
                    style={{ color: "white" }}
                    rel="noopener noreferrer"
                >
                    <Icon
                        type="instagram"
                        theme="filled"
                        style={{ fontSize: "4vh", padding: "0 2%" }}
                    />
                </a>
                <a
                    href="https://www.google.com"
                    target="_blank"
                    style={{ color: "white" }}
                    rel="noopener noreferrer"
                >
                    <Icon
                        type="mail"
                        theme="filled"
                        style={{ fontSize: "4vh", padding: "0 2%" }}
                    />
                </a>
            </div>
        );
    }
}
