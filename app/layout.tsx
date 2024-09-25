import React from 'react';
import { MantineProvider } from '@mantine/core';
import Header from './components/Sidebar';
import Footer from './components/Footer';
import './assets/css/main.css';
import Logo from './components/Logo';

// core styles are required for all packages
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

export const metadata = {
  title: 'Timothy Carson Jr',
  description: 'My name is Timothy Carson. I\'m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I\'m most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
		<title>Timothy Carson Jr</title>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	  </head>
      <body>
        <MantineProvider>
          <Header />
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}