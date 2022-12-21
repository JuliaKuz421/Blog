import { BrowserRouter as Router, Outlet } from 'react-router-dom'
import React from 'react'
import Logo from './image/logo.png'
import Style from './style.css'

function layoute() {
  const gitHubLink = 'https://github.com/USATUKirill96'
  const linkedinLink = 'https://www.linkedin.com/in/usatukirill96'

  return (
    <div className="main_body" style={Style}>
      <header className="column_header">
        <div className="header_container">
          <div>
            <img src={Logo} className="logo_img" alt="logo" />
          </div>
          <h1 className="logo_text">USATUKirill96</h1>
        </div>
      </header>

      <div className="posts_footer_body">
        <main className="container">
          <Outlet />
        </main>

        <footer className="footer">
          <div className="column_footer">
            <a href={gitHubLink} className="footer_link" rel="noopener noreferrer" target="_blank">GitHub</a>
            |
            <a href={linkedinLink} className="footer_link" rel="noopener noreferrer" target="_blank">Linkedin</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default layoute;