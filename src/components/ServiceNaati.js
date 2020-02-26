import React from 'react'
import "../App.css";
import Service1 from "../assets/images/service1.jpg";
import Service2 from "../assets/images/service2.jpg";
import Service3 from "../assets/images/service3.jpg";
import Service4 from "../assets/images/service4.jpg";

export default function ServiceNaati() {
    return (
        <div>
            <h3 className="medFont" style={{ paddingBottom: "12px", textAlign: "center" }}>
                NAATI Certified & Sworn Translations
              </h3>
              <hr style={{ opacity: "30%" }} />
              <hr style={{ opacity: "30%" }} />
              <p className="smallFont desFont">
                NAATI certified translations are highly regarded throughout the
                world. NAATI certified translations are usually required for
                foreign government departments, immigration and other legal
                functionaries, for which may include:
                <br />
                Identity Documents (Birth Certificates, Marriage Certificates,
                National ID Cards etc.)
                <br />
                Educational Transcripts
                <br />
                Affidavits & Sworn Testimonies
                <br />
                Notarized Deeds
                <br />
                Judicial Decisions
              </p>
        </div>
    )
}
