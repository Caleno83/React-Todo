import React from "react";

class TodoForm extends React.Component {
  //do Constructor with state
  constructor() {
    super();
    this.state = {
      list: "",
    };
  }

  handleChange = (e) => {
    // will update state with each typing
    this.setState({ list: e.target.value });
  };

  //class property to submit form
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addList(this.state.list);
    this.setState({ list: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="list"
          value={this.state.list}
          onChange={this.handleChange}
        />
        <button>Add List</button>
        <button onClick={this.props.clear}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
