import React, { Component } from "react";
import axios from "axios";

class PostList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: {}
        }
    }

    render() {
        return( 
            <div className="App">
                list of post
                {console.log(this.state.page)}
                {this.state.page.posts !== undefined? 
                    this.state.page.posts.map(element => <p>{element.title}</p>)
                : <p>not</p>}
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://ru.usatukirill96.com/api/posts')
        .then(response => {
            // console.log(response.data)
            this.setState({page: response.data})
            // console.log(this.state)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default PostList