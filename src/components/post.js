import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'; 


function Post (props) {

   const {id} = useParams();
   const [post, setPost] = useState(7)

   
    useEffect(()=> {
           fetch(`https://staging.usatukirill96.com/api/post/${id}`)
           .then(res => res.json())  
           .then(data => setPost(data))
           console.log(post)
    }, [id])

    

    return(
        <div className="column">   
            <h3 className="header">{post.title}</h3>
            <p>{post.text}</p>
            <img className="image" src={post.image}/> 
        </div>
    )  
}

export default Post