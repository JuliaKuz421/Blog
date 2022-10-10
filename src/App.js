import React from "react"
import Style from "./style.css"
import Picture01 from "./image/picture01.png"
import Picture02 from "./image/picture02.png"
import Picture03 from "./image/picture03.png"

class  App extends React.Component {
   render() {
    return(
      <div className="container" style={Style}>

         <header className="header">
           <h1 className="logotip">USATUKirill96</h1>
         </header>

         <div className="column">
          <div className="column_bodu">
            <h1 className="column_header">Наследование шаблонов в Django</h1>
            <img src={Picture01} className="column_image"/>
          </div>
         </div>

         <div className="column">
          <div className="column_bodu">
            <h1 className="column_header">Встраиваем шаблоны через Include</h1>
            <img src={Picture02} className="column_image"/>
          </div>
         </div>

         <div className="column">
          <div className="column_bodu">
            <h1 className="column_header">Работа с исключитениями в Python</h1>
            <img src={Picture03} className="column_image"/>
          </div>
         </div>

         <footer className="footer">
          <div className="column_footer">
            <a href="https://github.com/USATUKirill96" className="footer_link">GitHub</a>
            <a href="https://www.linkedin.com/in/usatukirill96/" className="footer_link">Linkedin</a>
          </div>
         </footer>
      </div>
    )
   }
}

export default App;
