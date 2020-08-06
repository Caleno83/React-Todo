import React from "react";
import "./components/Todo.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todoList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      todoList, //same as todoList : todoList
    };
  }

  //to update state

  toggleList = (listId) => {
    console.log(listId);

    this.setState({
      todoList: this.state.todoList.map((list) => {
        if (listId === list.id) {
          return {
            ...list,
            completed: !list.completed,
          };
        }
        return list;
      }),
    });
  };

  //To add a list item

  addList = (list) => {
    const newList = {
      task: list,
      id: Date.now(),
      complete: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newList],
    });
  };

  //to clear list
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter((list) => !list.completed),
    });
  };

  render() {
    return (
      <>
        <div>
          <h2>Jorge's To Do List</h2>
        </div>
        <div>
          <TodoList
            todoList={this.state.todoList}
            toggleList={this.toggleList}
          />
        </div>
        <div>
          <TodoForm addList={this.addList} clear={this.clearCompleted} />
        </div>
      </>
    );
  }
}

export default App;
