import React from 'react';

import {
  Paper,
  Text,
  Title,
} from "@mantine/core";

const ExperienceCard = ({ data }) => {
  return (
    <Paper shadow="xs" p="md">
     <Title order={3}>{data.role}</Title>
      <Text><p>{data.date}</p></Text>
    </Paper>
  );
}

export default ExperienceCard;