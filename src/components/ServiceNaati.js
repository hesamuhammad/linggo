import React from "react";
import "../App.css";

export default function ServiceNaati() {
    return (
        <div>
            <h3
                className="bigFont titleFont"
                style={{
                    paddingBottom: "12px",
                    textAlign: "right",
                    fontWeight: "bold",
                    fontSize: "2.5vh"
                }}
            >
                NAATI Certified & Sworn Translations
            </h3>
            <p
                className="desFont"
                style={{ fontSize: "2vh", textAlign: "right" }}
            >
                NAATI certified translations are highly regarded throughout the
                world. NAATI certified translations are usually required for
                foreign government departments, immigration and other legal
                functionaries, for which may{" "}
                <span style={{ fontWeight: "bold" }}>INCLUDE:</span> Identity
                Documents (Birth Certificates, Marriage Certificates, National
                ID Cards etc.), Educational Transcripts , Affidavits, Sworn
                Testimonies, Notarized Deeds, Judicial Decisions
            </p>
        </div>
    );
}
