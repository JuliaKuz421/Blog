import React, { Component } from "react";
import Axios, { AxiosHeaders } from "axios";

class PostList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [ ]
        }
    }

    componentDidMount() {
        // Axios.get('https://api.github.com/users/hadley/orgs')
        Axios.get('https://ru.usatukirill96.com/api/posts')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return( <div className="App">
            P
        </div>
        )
    }
}

export default PostList