import axios from "axios";
import { 
        BrowserRouter as Router,
        Link
} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

function Posts () {

    const [posts, setPosts] = useState([])
    const [lastPost, setLastPost ] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [button, setButton] = useState(true)
    
    useEffect(() => {
        if(fetching) {
            axios.get(`${process.env.REACT_APP_BACKEND}/api/posts`) 
            .then(response => {
                setPosts([...response.data])
                setFetching(false)
            })
        }
    })


    useEffect(()=> {
        if(!fetching) {
            const params = new URLSearchParams([['shift', lastPost]])
            axios.get(`${process.env.REACT_APP_BACKEND}/api/posts`, { params })
            .then(response => {
                setPosts([...posts , ...response.data]) 
                if(response.data.length < 10) {setButton(false)}
            }) 
        }
    }, [lastPost]);
 
   
    function clickButton () {
        setLastPost(posts.reverse()[0].id)
        posts.reverse()
    }

    

    return( 
        <div className={'app'}> 
            {posts.map(post => { 
                return(  
                <section className="page" key={post.id}>
                    <div className="column" key={post.id}>
                        <div>
                            <Link to={`/post/${post.id}`} className="header_link"  target="_blank"  key={post.id}>
                                    <h3 className="header" key={post.id}>{post.title}</h3>
                            </Link>

                            <div className="_image ">
                                <img src={post.image} key={post.id} className="image" alt={post.title}/>
                            </div>
                            
                        </div> 
                    </div>
                </section>
            )})}
            <div id='button'  className="column button"> 
              {button && (<button onClick={clickButton} className="buttonPost">
                    <p>
                        Показать еще
                    </p>
                </button>)}
            </div>
        </div>
    )   
}

export default Posts