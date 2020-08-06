import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todoList.map((list) => (
        <Todo key={list.id} list={list} toggleList={props.toggleList} />
      ))}
    </div>
  );
};

export default TodoList;
