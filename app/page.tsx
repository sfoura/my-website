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

export default function Home() {
  return (
    <>
      <div id = "main">
        {/* One */}
        <section id="one">
		<header class="major">
							<h2>{about.heading}</h2>
						</header>
						<p>{about.message}</p>
						<ul class="actions">
							<li><a href={about.resume} class="button" target="_blank">Check Out My Resume</a></li>
						</ul>
        </section>

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