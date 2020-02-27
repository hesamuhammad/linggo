import React, { Component } from "react";
import { Drawer, Button, Icon } from "antd";

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
                    title="OUR CONTACT"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}

export default DrawerButton;
