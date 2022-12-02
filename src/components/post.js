import React, {useEffect, useState} from 'react';
import StylePost from './stylePost.css'
import { useParams } from 'react-router-dom'; 

function Post (props) {

   const {id} = useParams();
   const [post, setPost] = useState([])

   
    useEffect(()=> {
           fetch(`https://staging.usatukirill96.com/api/post/${id}`)
           .then(res => res.json())  
           .then(data => setPost(data))
    }, [id])


    function createMarkup() {
        return {__html: post.text};
    }

   

    return(
        <div className="containerPost" style={StylePost}>  
            <h1  key={post.id}>{post.title}</h1>
            <div dangerouslySetInnerHTML={createMarkup()}/>
        </div>
    )  
}

export default Post