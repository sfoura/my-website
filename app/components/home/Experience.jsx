import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
  Row,
} from "react-bootstrap";
import { SimpleGrid, Container, Group, Title, Stack } from '@mantine/core';

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Stack>
          <Title order={2}>{experiences.heading}</Title>
          <Group className="row" id="experience" grow>
          {experiences.data.map((data, index) => (
            <ExperienceCard key={index} data={data} />
          ))}
        </Group>
        </Stack>
      </Container>
    </section>
  );
}

export default Experience;