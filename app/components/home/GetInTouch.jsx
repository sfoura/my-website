import React from "react";
import { getInTouch } from "../../editable-stuff/config";
import { Title, Text, Grid, TextInput, Textarea, Button, Stack, Group, Paper, SimpleGrid } from '@mantine/core';
import classes from '../../assets/css/modules/GetInTouch.module.css';
import { ContactIconsList } from "./ContactIcons";
const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
    <Title order={2}>Get In Touch</Title><br />
    <Text>{getInTouch.message}</Text>
      <Paper shadow="md" radius="lg" p="xl">
        <div className={classes.wrapper}>
        <div className={classes.contacts} style={{backgroundColor: '#3292E5'}}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>
          <ContactIconsList />
        </div>
        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="hello@thankyou.com" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form> 
        </div>
      </Paper>
    </>
  );
};

export default GetInTouch;
