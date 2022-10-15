import React from "react"
import Style from "./style.css"
import Logo from "./image/logo.png"
import Picture01 from "./image/picture01.png"
import Picture02 from "./image/picture02.png"
import Picture03 from "./image/picture030.png"
import PostList from "./components/PostList"

class  App extends React.Component {
   render() {
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

          <section className="page_django page" >
            <div className="column_django column">
              <div className="django_bodu">
                <a href="https://ru.usatukirill96.com/post/6" className="header_link">
                  <h3 className="django_header header">Наследование шаблонов в Django</h3>
                </a>
                <div className="django_image ">
                  <img src={Picture01} className="image image_01" alt="Наследование шаблонов в Django"  />
                </div>
              </div>
            </div>
          </section>

          <section className="page_include page">
            <div className="column_include column">
              <div className="include_bodu">
                <a href="https://ru.usatukirill96.com/post/5" className="header_link">
                    <h3 className="cinclude_header header">Встраиваем шаблоны через Include</h3>
                </a>
                <div className="include_image image">
                  <img src={Picture02} className="image image_02" alt="Встраиваем шаблоны через Include" />
                </div>
              </div>
           </div>
          </section>

          <section className="page_pythons_exception page">
            <div className="column_pythons_exception column">
              <div className="pythons_exception_bodu">
                <a href="https://ru.usatukirill96.com/post/1" className="header_link">
                  <h3 className="pythons_exception_header header">Работа с исключитениями в Python</h3>
                </a>
                <div className="pythons_exception_image image">
                  <img src={Picture03} className="image image_03" alt="Работа с исключитениями в Python" />
                </div>
              </div>
            </div>
          </section>

        </main>

        <PostList />

        <footer className="footer">
          <div className="column_footer">
            <a href="https://github.com/USATUKirill96" className="footer_link" target="_blank">GitHub</a>
            |<a href="https://www.linkedin.com/in/usatukirill96/" className="footer_link" target="_blank">Linkedin</a>
          </div>
        </footer>

      </div>
    )
   }
}

export default App;
