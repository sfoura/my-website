import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Progress, Text, Space } from "@mantine/core";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <Text size="lg" className="mb-1 mt-2">{skill}</Text>
      <Progress
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        value={value}
      />
            <Space h="md" />
    </div>
  );
}

export default SkillsBar;
