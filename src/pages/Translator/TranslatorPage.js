import React, { Component } from "react";
import TranslatorBanner1 from "../../components/Translator/TranslatorBanner1";
import TranslatorMenuBar from "../../components/Translator/TranslatorMenuBar";
import TranslatorWhy from "../../components/Translator/TranslatorWhy";
import TranslatorHow from "../../components/Translator/TranslatorHow";
import OurTranslator from "../../components/Translator/OurTranslator";
import TranslatorLooking from "../../components/Translator/TranslatorLooking";

export default class TranslatorPage extends Component {
    render() {
        return (
            <div>
                <TranslatorBanner1 />
                <TranslatorMenuBar />
                <TranslatorWhy />
                <TranslatorLooking />
                <TranslatorHow />
                <OurTranslator />
            </div>
        );
    }
}
