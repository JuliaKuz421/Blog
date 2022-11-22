import React from "react"
import Style from "./style.css"
import Logo from "./image/logo.png"
import { 
  BrowserRouter as Router,
  Outlet
} from 'react-router-dom';


function layoute () {
    
    return(
        <div className="main_body" style={Style}>
            <header className="column_header">
                <div className="header_container">
                    <div>
                        <img src={Logo} className="logo_img" alt="logo"  />
                    </div>
                    <h1 className="logo_text">USATUKirill96</h1>
                </div>
            </header>
    
            <main className="container">
    
            <Outlet/>
        
            </main>
            
            <footer className="footer">
                <div className="column_footer">
                    <a href="https://github.com/USATUKirill96" className="footer_link" rel="noopener noreferrer"  target="_blank">GitHub</a>
                    |<a href="https://www.linkedin.com/in/usatukirill96/" className="footer_link" rel="noopener noreferrer" target="_blank">Linkedin</a>
                </div>
            </footer>
        </div>
    )
}

export default layoute