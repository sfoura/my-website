"use client";

import React from 'react';
import MainBody from './components/home/MainBody';
import AboutMe from './components/home/AboutMe';
import Project from './components/home/Project';
import Skills from './components/home/Skills';
import GetInTouch from './components/home/GetInTouch';
import Leadership from './components/home/Leadership';
import Experience from './components/home/Experience';
import { mainBody, about, repos, skills, leadership, getInTouch, experiences } from './editable-stuff/config';

export default function Home() {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {experiences.show && (
        <Experience experiences={experiences} />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      {getInTouch.show && (
        <GetInTouch
          heading={getInTouch.heading}
          message={getInTouch.message}
          email={getInTouch.email}
        />
      )}
    </>
  );
}