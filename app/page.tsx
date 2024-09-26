"use client";

import React from 'react';
import Header from './components/Sidebar';
import Footer from './components/Footer';
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import MainBody from './components/home/MainBody';
import AboutMe from './components/home/AboutMe';
import Project from './components/home/Project';
import Skills from './components/home/Skills';
import GetInTouch from './components/home/GetInTouch';
import Leadership from './components/home/Leadership';
import Experience from './components/home/Experience';
import ScrollButton from './components/ScrollButton';
import { mainBody, about, repos, skills, leadership, getInTouch, experiences } from './editable-stuff/config';
import { Button, Title, Text, Space, Group } from '@mantine/core';
export default function Home() {
  return (
    <>
      <div id = "main">
        {/* One */}
        <Group id="one" direction="column" spacing="md">
          <Title order={2}>{about.heading}</Title>
          <Text>{about.message}</Text>
          <Button component="a" href={about.resume} className="button" target="_blank" variant="default">
            Check Out My Resume
          </Button>
        </Group>

        {/* Two */}
        <section id="two">
			<Experience experiences={experiences} />
        </section>
		<section id="three">
			<Skills hardSkills={skills.hardSkills} softSkills={skills.softSkills} heading={skills.heading}/>
		</section>
        {/* Three */}
        <section id="four">
		<GetInTouch />
        </section>
      </div>
      
       {/* Scripts */}
       <script src="/js/jquery.min.js"></script>
      <script src="/js/jquery.poptrox.min.js"></script>
      <script src="/js/browser.min.js"></script>
      <script src="/js/breakpoints.min.js"></script>
      <script src="/js/util.js"></script>
      <script src="/js/main.js"></script>
    </>
  );
}