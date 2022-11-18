import React, {useEffect, useState} from 'react';
import axios from "axios";

function Post (props) {

   const [postId, setPost] = useState(props.postId)

    useEffect(()=> {
           axios.get(`https://staging.usatukirill96.com/api/post/${postId}`)
           .then(response => {
                setPost( response.data) 
            })
    }, true)


    return(
        <div className='app'> 
            <section className="page" key={postId}>
                    <div className="column">
                        <p>post</p>
                    </div>
            </section>  
        </div>
    )  
}

export default Post