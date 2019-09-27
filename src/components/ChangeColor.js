import React, { Component } from 'react';
import Navbar from './Navbar';
import './Navbar.css';

class ChangeColor extends Component {
    state = {
        color: ["#555"]
    }

    handleChange = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState((prevState) =>{
            return{
                color: [prevState.color]
            }
        })
    }
    render() {
        return (
            <div className="pit">
            <Navbar />
            <center> 

            <form onSubmit={this.handleSubmit} className>
                <h1>Amazing Color Change</h1>
               
                <div className="show"  style={{backgroundColor: this.state.color, height: 250, width: 250}} ></div>
                <input className="input" onChange={this.handleChange} value={this.state.newcolor} type="text" placeholder="enter any color" />
                {/* <button >clicktochange </button> */}
            </form>

            </center>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <p> This is the bottom page</p>
            </div>
        )
    }
}
export default ChangeColor;