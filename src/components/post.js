import React, {useEffect, useState} from 'react';
import axios from "axios";

function Post (props) {

   const [postId, setPost] = useState(props.postId)
   const [postText, setPostText] = useState()
   const [postImg, setPostImg] = useState()
   
    useEffect(()=> {
           axios.get(`https://staging.usatukirill96.com/api/post/2`)
           .then(response => {
                console.log(response.data)
                setPostText(response.data.text)
                setPostImg(response.data.image)
            })
            .finally(console.log("warning get"))
    }, true)


    return(
        <div className="column">           
            <p>{postText}</p>
            <p>{postId}</p>
            <img src={postImg}/>
        </div>
    )  
}

export default Post