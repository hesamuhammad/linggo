import React, { useState } from "react";
import { connect } from "react-redux";
// import {
// //   countGeneral,
// //   countSpecialized,
// //   countNaati,
// countWord
// } from "../actions/countWord";
import { Row, Col, Input, Form, Button, Divider } from "antd";

const {TextArea} = Input;

export default function CountWord() {
  const [totalWord, setTotalWord] = useState("");
  const [result, setResult] = useState({
    resultGeneral: 0,
    resultSpecialized: 0,
    resultNaati: 0
  });

  const wordCount = (totalWord) => {
    setTotalWord(totalWord.split(" ").length)
  }

  const handleSubmit = event => {
    event.preventDefault();
    const priceGeneral = wordCount * 0.11;
    const priceSpecialized = wordCount * 0.14;
    const priceNaati = wordCount * 0.17;
    setResult({
      resultGeneral: priceGeneral.toFixed(2),
      resultSpecialized: priceSpecialized.toFixed(2),
      resultNaati: priceNaati.toFixed(2)
    });
  };
  // const handleChange = event => {
  // setTotalWord(event.target.value)
  // }
  const onChange = value => {
    setTotalWord(value);
  };
  

  return (
    <div>
      <Row gutter={[16, 16]}>
     
        <Col
          xs={{ span: 8, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 6, offset: 4 }}
          lg={{ span: 6, offset: 4 }}
          xl={{ span: 6, offset: 4 }}
        >
             <Form onSubmit={handleSubmit} className="desFont">
            <Form.Item label="Copy paste your text here:">
              <TextArea
                onChange={onChange}
                value={totalWord}
                size="large"
                autoSize={{ minRows: 4, maxRows: 10 }}
              />
            </Form.Item>
            <Button htmlType="submit" size="small">
              Check price
            </Button>
            </Form>
        </Col>
        <Col
          xs={{ span: 12, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 6, offset: 4 }}
          lg={{ span: 6, offset: 4 }}
          xl={{ span: 6, offset: 4 }}
        >
          <Col span={10}>
            <p className="desFont medFont">
              General
              <Divider />
              Specialized
              <Divider />
              NAATI
            </p>
          </Col>
          <Col span={14}>
            <p className="desFont medFont">
              : ${result.resultGeneral}
              <Divider />: ${result.resultSpecialized}
              <Divider />: ${result.resultNaati}
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     totalWords: state.countWord.totalWords,
//     priceGeneral: state.countWord.priceGeneral,
//     priceSpecialized: state.countWord.priceSpecialized,
//     priceNaati: state.countWord.priceNaati
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
// countGeneral: () => dispatch(countGeneral()),
// countSpecialized: () => dispatch(countSpecialized()),
// countNaati: () => dispatch(countNaati())
//     countWord: () => dispatch(countWord())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CountWord);
