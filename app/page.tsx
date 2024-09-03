"use client";

import React from 'react';
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
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
      <div>
      <Container className="text-center">
          <h1 className="display-1">
            {mainBody.firstName} {mainBody.lastName}
          </h1>
          <Typist>
            <div className="lead typist">
              {mainBody.message}
            </div>
          </Typist>
          <div className="p-5">
            {mainBody.icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </div>
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