import React, { Component } from "react";
import { Icon } from "antd";
export default class Socialmedia extends Component {
    render() {
        return (
            <div>
                <div>
                    <Icon
                        type="facebook"
                        theme="filled"
                        style={{ fontSize: "4vh", padding: "0 2%" }}
                    />
                    <Icon
                        type="twitter-square"
                        theme="filled"
                        style={{ fontSize: "4vh", padding: "0 2%" }}
                    />
                    <Icon
                        type="instagram"
                        theme="filled"
                        style={{ fontSize: "4vh", padding: "0 2%" }}
                    />
                    <Icon
                        type="mail"
                        theme="filled"
                        style={{ fontSize: "4vh", padding: "0 2%" }}
                    />
                </div>
            </div>
        );
    }
}
