import React, { Component } from "react";
import Header from "./Header";
import TodoItems from "./TodoItems";
import './Todo.css';
import {NavLink} from 'react-router-dom'


class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ""
  };
  handleRemoveOneItem = individualItem => {
    this.setState(prevState => {
      return {
        todoItems: prevState.todoItems.filter(item => item !== individualItem)
      };
    });
  };

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      if (prevState.todoItems.includes(prevState.newTodo)) {
      } else {
        return {
          todoItems: [...prevState.todoItems, this.state.newTodo],
          newTodo: ""
        };
      }
    });
  };
  
  handleClearAll = ()=>{
    this.setState({
      todoItems:[]
    })
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.todoItems.length !== this.state.todoItems.length) {
        const jsonState = JSON.stringify(this.state.todoItems);
        localStorage.setItem("todoItems", jsonState)
        ;
      }
    }

    componentDidMount() {
      const itemsFromLocalStorage = localStorage.getItem("todoItems");
      const todoItems = JSON.parse(itemsFromLocalStorage);

      if(todoItems){
        this.setState(()=>({
          todoItems
        }));
      }
    }

  render() {
    return (
      <div>
        {/* <NavLink to="/like">like page</NavLink> */}
        <Header title="MY TODO-APP" />
        <center>

        <h1> welcome to my todo App</h1>

        <form onSubmit={this.handleSubmit}>
        
          <label htmlFor="">Todo Items</label>
          <input
          className="drive"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button className="obed">Submit</button>
        </form>
        </center>

        <center>
        {this.state.todoItems.map(item => (
          <TodoItems individualItem={item} handleRemoveOneItem={this.handleRemoveOneItem}
          />
        ))}
        <button className="butt" onClick={this.handleClearAll}>Clear All</button>
        </center>
      </div>
    );
  }
}
export default Todo;
