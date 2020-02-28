import React, { Component } from "react";
import BreadContact from "../components/BreadContact";
import FormContact from "../components/FormContact";

export default class Contactus extends Component {
    render() {
        return (
            <div>
                <BreadContact />
                <FormContact />
            </div>
        );
    }
}
