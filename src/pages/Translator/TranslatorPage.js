import React, { Component } from "react";
import TranslatorBanner1 from "../../components/Translator/TranslatorBanner1";
import TranslatorMenuBar from "../../components/Translator/TranslatorMenuBar";
import TranslatorWhy from "../../components/Translator/TranslatorWhy";
import TranslatorHow from "../../components/Translator/TranslatorHow";
import OurTranslator from "../../components/Translator/OurTranslator";

export default class TranslatorPage extends Component {
    render() {
        return (
            <div>
                <TranslatorBanner1 />
                <TranslatorMenuBar />
                <TranslatorWhy />
                <TranslatorHow />
                <OurTranslator />
            </div>
        );
    }
}
