import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'; 
import StylePost from './stylePost.css'

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
        <div className="container" style={StylePost}> 
            <section className="page" key={post.id}>
                <div className="column" key={post.id}>   
                    <h1 className="header_name" key={post.id}>{post.title}</h1>
                    <div className='text' >
                        <div dangerouslySetInnerHTML={createMarkup()}/>
                    </div>
                </div>
            </section>
            
        </div>
    )  
}

export default Post