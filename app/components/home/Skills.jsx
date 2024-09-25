import React, { useState, useRef } from "react";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Paper, Tabs, Space } from "@mantine/core";

const Skills = ({ heading, hardSkills, softSkills }) => {
  const skillsTabRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("hard-skills");

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  return (
    <Paper ref={skillsTabRef} shadow="md" className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          onTabChange={setActiveTab}
          className="skills-tabs"
          id="skills-tabs"
          defaultValue="hard-skills"
        >
          <Tabs.List grow>
            <Tabs.Tab value="hard-skills" className="skills-tab lead">
              Technical Skills
            </Tabs.Tab>
            <Tabs.Tab value="soft-skills" className="skills-tab lead">
              Soft Skills
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="hard-skills">
            <Row className="pt-3 px-1">
            <Space h="md" />
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tabs.Panel>

          <Tabs.Panel value="soft-skills">
            <Row className="pt-3 px-1">
            <Space h="md" />
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Paper>
  );
};

export default Skills;