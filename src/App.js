import React from "react"
import { 
  Route, 
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Style from "./components/style.css"
import Posts from "./components/posts.jsx"
import Post from './components/post.js';
import Layoute from "./components/layout.jsx";


function App () {
  return(
    <>
      <Routes>
          <Route path="/" element={<Layoute/>}>
              <Route  index element={<Posts style={Style}/>}/>
              <Route  path="/post/:id" element={<Post postId={1}/>}/>   
          </Route>
          
      </Routes>
    </>
  )
}

export default App;