import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StylePost from './stylePost.css'

function Post(props) {
  const { id } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/api/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [id]);

  function createMarkup() {
    return { __html: post.text }
  }

  return (
    <div className="containerPost" style={StylePost}>
      <h1 className="mainTitle" key={post.id}>{post.title}</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

export default Post