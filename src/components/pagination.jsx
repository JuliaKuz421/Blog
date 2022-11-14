import React, {useEffect, useState} from 'react';
import axios from "axios";


function Pagination () {

    const [state, setState] = useState([])
    const [currentPage, setCurrentPage ] = useState(1)
    const [fetching, setFetching] = useState(true)

    useEffect(()=> {
     if (fetching) {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
        .then(response => {
            setState([...state , ...response.data])
            console.log(response.data)
            setCurrentPage(prevState => prevState + 1)
            console.log(currentPage)
        })
        .finally(() => setFetching(false))
        }
    }, []);

    useEffect(()=> {
        document.addEventListener("scroll", scrollHalder)
        return function() {
            document.removeEventListener("scroll", scrollHalder)
        }
    }, []);

    const scrollHalder = (event) => {

        if(document.documentElement.scrollHeight - (window.pageYOffset + window.innerHeight) < 100) {
            setFetching(true)
        } 
    }

    
    return(
        <div className={'app'}>
            {state.map(photo => { return(
                <div className="photo" key={photo.id}>
                    <div className="title">{photo.id} {photo.title}</div>
                    <img src={photo.thumbnailUrl} alt="p"/>
                </div>)
            })}       
        </div>
    )   
}

export default Pagination