import React from 'react';
import './scss/custom.scss';

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
      <body>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="/">Timothy Carson Jr</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#aboutme">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
                <a href="https://timcarsonjr.com/support" className="btn btn-danger ms-auto">Get Support</a>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-auto py-5 text-center" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="container">
            Created <i className="fas fa-code" /> with <a href="https://nextjs.org/" target='_blank'>Next.JS</a><i className="fas fa-heart" /> by{" "}
            <a
              rel="noopener"
              href="https://github.com/sfoura"
              aria-label="My GitHub"
            >
              <span className="badge bg-dark">
                Timothy Carson
              </span>
            </a>{" "}
            using <i className="fab fa-react" /> Visual Studio Code
            <p>
              <small className="text-muted">
                Copyright 2024 Timothy Carson Jr
              </small>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}