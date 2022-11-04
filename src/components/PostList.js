import React from "react";
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
                {this.state.page.posts !== undefined? 
                    this.state.page.posts.map(element =>
                        

                        <section className="page" key={element.id}>
                            <div className="column">
                                <div>
                                    <a href="https://ru.usatukirill96.com/api/posts" className="header_link">
                                         <h3 className="header">{element.title}</h3>
                                    </a>
                                    <div className="_image ">
                                        <img src={element.image} className="image" alt={element.title}  />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : null
                }
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://ru.usatukirill96.com/api/posts')
        .then(response => {
            this.setState({page: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default PostList

