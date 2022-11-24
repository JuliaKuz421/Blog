import React, {useEffect, useState} from 'react';
import axios from "axios";
import { 
        BrowserRouter as Router,
        Link
} from 'react-router-dom';


function Posts () {

    const [posts, setPosts] = useState([])
    const [lastPost, setLastPost ] = useState(99999)
    const [fetching, setFetching] = useState(true)
 
    useEffect(()=> {
     if (fetching) {
        axios.get(`https://staging.usatukirill96.com/api/posts?shift=${lastPost}`)
        .then(response => {
            setPosts([...posts , ...response.data])
        })
        .finally(() => setFetching(false))
        }
    }, [fetching]);


    function clickButton () {
        setLastPost(() => {
            const number = posts.length -1
            return(posts[number].id)
        }) 
    }

    return( 
        <div className={'app'}> 
            {posts.map(element => { 
                return(  
                <section className="page" key={element.id}>
                    <div className="column" key={element.id}>
                        <div>
                
                            <Link to={`/post/${element.id}`} className="header_link"  target="_blank"  key={element.id}>
                                    <h3 className="header" key={element.id}>{element.title}</h3>
                            </Link>

                            <div className="_image ">
                                <img src={element.image} key={element.id} className="image" alt={element.title}/>
                            </div>
                            
                        </div> 
                    </div>
                </section>
            )})}
            <div className="column">
                <button onClick={clickButton} className="buttonPost">
                    <p>
                        Показать еще
                    </p>
                </button>
            </div>
        </div>
    )   
}

export default Posts