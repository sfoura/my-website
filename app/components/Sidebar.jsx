import React from 'react';
import {mainBody, about} from '../editable-stuff/config';
import { Group, Text, Title } from '@mantine/core';
import Logo from './Logo';
const Header = () => {
  return (
    <div id="sidebar">
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <Logo />
          </a>
            <Title order={2}><strong>{mainBody.firstName} {mainBody.middleName} {mainBody.lastName}</strong><br /><br /></Title>
            <i>{mainBody.message}</i>
        </div>
        <div className="inner">
          <ul className="icons">
            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
            <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
            <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
          </ul>
          <Group>
              <Text size="sm">&copy; 2024 Timothy Carson Jr</Text>
              <Text size="sm">|</Text>
              <Text size="sm">Created using Next.JS</Text>
          </Group>
        </div>
      </header>
    </div>
  );
};

export default Header;
