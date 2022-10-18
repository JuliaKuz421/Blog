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
                {this.state.page.posts !== undefined? 
                    this.state.page.posts.map(element =>
                        

                        <section className="page" >
                            <div className="column">
                                <div>
                                    <a href="https://ru.usatukirill96.com/post/6" className="header_link">
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

{/* <img src="https://ru.usatukirill96.com/uploads/upload-472703852.png" class="image" alt="Наследование шаблонов в Django"> */}
{/* <img src="ru.usatukirill96.com/uploads/upload-1680535509.png" class="image" alt="Наследование шаблонов в Django"></img> */}