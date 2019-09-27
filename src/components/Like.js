import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Like extends Component {
    state = {
        likes: 0,
        name: "shadowmask",
        color: "dark",
        // like: 0

    }
    hello = () => (
        alert("Money has cometha")
    )
    increaselikes = () => {
        this.setState((prevState, prevProp) => {
            return {
                likes: prevState.likes + 1,

            }
        })
    }
    reducelikes = () => {
        this.setState((prevState, prevProp) => {
            return {
                // likes: prevState.likes - 1,
                likes: prevState.likes > 0? prevState.likes-1 : prevState.likes=0
                // like: prevState.likes === 0 ? alert('reduce'): prevState.likes = 0  
            }
        })
    }
    resetlikes = () => {
        this.setState((prevState, prevProp) => {
            return {
                likes: prevState.likes = 0,
                

            }
        })
    }
    // like = () => {

    //     this.setState((prevState, prevProp) => {
    //         return {
    //             // likes: prevState.likes + 1,
    //             likes: prevState.likes < 5 ? prevState.likes+1 : prevState.likes = 5
    //         }
    //     })
    //     console.log(this.state.like)
    // }

    render() {
        return (
            <div>
                {/* <NavLink to="/">Home</NavLink> */}
                <h1>this is my likes app</h1>
                <h3>likes:{this.state.likes}</h3>
                <h3>name:{this.state.name}</h3>
                <h3>color:{this.state.color}</h3>

                <button onClick={this.increaselikes}>likes</button>
                <button onClick={this.reducelikes}>Unlikes</button>
                <button onClick={this.resetlikes}>Rest</button>
                {/* <button onClick={this.like}>like</button> */}

            </div>
        )
    }
}
export default Like;