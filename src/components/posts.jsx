import React, {useEffect, useState, Component} from 'react';
import axios from "axios";
import { 
        Route, 
        BrowserRouter as Router,
        Switch,
        Link
    } from 'react-router-dom';
import Post from './post.js';


function Posts () {

    const [state, setState] = useState([])
    const [currentPage, setCurrentPage ] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(2)
 
    useEffect(()=> {
     if (fetching) {
        axios.get(`https://staging.usatukirill96.com/api/posts?_limit=3&_page=${currentPage}`)
        .then(response => {
            setState([...state , ...response.data])
            setCurrentPage(prevState => prevState + 1)
            setTotalCount(response.headers['x-total-count'])
        })
        .finally(() => setFetching(false))
        }
    }, [fetching]);



    useEffect(()=> {
        document.addEventListener("scroll", scrollHandler)
        return function() {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, []);

    

    const scrollHandler = () => {
        if(document.documentElement.scrollHeight - (window.pageYOffset + window.innerHeight) < 100 && state.length < totalCount) {
            setFetching(true)
        } 
    }

    
    return(
        
        <div className={'app'}>
            
            {state.map(element => { return(
                <>
                <Switch>
                  
                    <Route exact path="/post">
                        <Post postID={element.id}/>
                    </Route>
                       

                    <section className="page" key={element.id}>
                        <div className="column" key={element.id}>
                            <div>
                 
                                <Link to="/post" className="header_link" >
                                        <h3 className="header" key={element.id}>{element.title}</h3>
                                </Link>
                            
                                <div className="_image ">
                                    <img src={element.image} key={element.id} className="image" alt={element.title}/>
                                </div>
                               
                            </div>
                        </div>
                    </section>
                </Switch>
                </>
            )})}
            
        </div>
       
    )   
}

export default Posts