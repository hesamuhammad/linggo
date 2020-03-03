import React, { Component } from "react";
import TranslatorHow2 from "./TranslatorHow2";

export default class TranslatorHow extends Component {
    render() {
        return (
            <div>
                <p
                    style={{
                        fontWeight: "bold",
                        fontSize: "4vh",
                        textAlign: "center"
                        // paddingBottom: "1%"
                    }}
                >
                    How does Gengo work?
                </p>
                <img
                    src="https://gengo.com/wp-content/uploads/2017/07/how-gengo-works.jpg"
                    style={{ width: "100%" }}
                    alt="linggo"
                />
                <TranslatorHow2 />
            </div>
        );
    }
}
