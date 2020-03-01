import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

export default function Project() {
  return (
    <div>
      <Steps size="small" current={0}>
        <Step title="Waiting" />
        <Step title="In Progress" />
        <Step title="Finished" />
      </Steps>
    </div>
  );
}
