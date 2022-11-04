import React, {useEffect, useState} from "react";
import axios from "axios";


class Pagination extends React.Component {

        const [state, setState] = useState([])

        useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response => setState(response.data)) 
        })

        usuEffect(()=> {
        document.addEventListener(scrollHalder)

        return function() {
        document.removeEventListener(scrollHalder)
        }
        })

        function scrollHalder (event){
            console.log('event')
        }

    render() {
        return(
        {state.map(photo => {
            <div className="photo" key={photo .id}>
                <div className="title">{photo .id} {photo .title}</div>
                <img src={photo .thumbnailUrl} alt="p"/>
            </div>
    })}
  )
}