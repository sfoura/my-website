import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
  Row,
} from "react-bootstrap";
import { SimpleGrid, Container } from '@mantine/core';

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
        <SimpleGrid className="row" id="experience">
          <Row>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </SimpleGrid>
      </Container>
    </section>
  );
}

export default Experience;