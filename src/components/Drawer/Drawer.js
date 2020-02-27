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
                    <div style={{ textAlign: "center", marginTop: "35%" }}>
                        <div>
                            <p style={{ fontSize: "3vh", fontWeight: "bold" }}>
                                OUR CONTACT
                            </p>
                        </div>
                        <TestimonialsDrawer />
                        <div>
                            <p style={{ marginTop: "40%" }}>
                                523 Sylvan Ave, 5th Floor Mountain View, CA
                                94041 USA
                            </p>
                            <p>___</p>
                            <p>+1 (844) 123 456 78</p>
                        </div>
                        <div style={{ marginTop: "50%" }}>
                            <Socialmedia />
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default DrawerButton;
