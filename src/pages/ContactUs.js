import React from "react";
import Gmap from "../components/Gmap";
import FormContact from "../components/FormContact";
import BreadContact from "../components/BreadContact";

export default function ContactUs() {
    return (
        <div>
            <BreadContact />
            <Gmap />
            <FormContact />
        </div>
    );
}
