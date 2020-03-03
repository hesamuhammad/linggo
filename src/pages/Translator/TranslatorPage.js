import React, { Component } from "react";
import TranslatorMenuBar from "../../components/Translator/TranslatorMenuBar";
import TranslatorWhy from "../../components/Translator/TranslatorWhy";
import TranslatorHow from "../../components/Translator/TranslatorHow";
import OurTranslator from "../../components/Translator/OurTranslator";
import TranslatorLooking from "../../components/Translator/TranslatorLooking";
import BannerTranslator from "../../components/Translator/BannerTranslator";

export default class TranslatorPage extends Component {
    render() {
        return (
            <div>
                <BannerTranslator />
                <TranslatorMenuBar />
                <TranslatorWhy />
                <TranslatorLooking />
                <TranslatorHow />
                <OurTranslator />
            </div>
        );
    }
}
