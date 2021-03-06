import React, { Component } from "react";
import { Drawer, Icon } from "antd";
import TestimonialsDrawer from "./TestimonialsDrawer";
import Socialmedia from "../Socialmedia";

class DrawerButton extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        return (
            <div>
                <Icon
                    type="export"
                    onClick={this.showDrawer}
                    style={{ fontSize: "4vh" }}
                />
                <Drawer
                    // title="OUR CONTACT"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div style={{ textAlign: "center", marginTop: "15%" }}>
                        <div>
                            <p style={{ fontSize: "3vh", fontWeight: "bold" }}>
                                OUR CONTACT
                            </p>
                        </div>
                        <TestimonialsDrawer />
                        <div>
                            <p style={{ marginTop: "40%" }}>
                                Jl. Kemang Raya No.10, Bangka, Kec. Mampang
                                Prapatan
                            </p>
                            <p>___</p>
                            <p>+62 (878) 0010 8080</p>
                        </div>
                        <div
                            style={{
                                marginTop: "30%",
                                backgroundColor: "black",
                                padding: "4% 0",
                                borderRadius: "20px"
                            }}
                        >
                            <Socialmedia />
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default DrawerButton;
