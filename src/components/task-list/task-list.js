import React from "react";
import Task from "../task/task";
import "./task-list.css";

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    if (item.class === "completed") {
      return (
        <li className="completed" key={item.id}>
          <Task label={item.label} />
        </li>
      );
    } else if (item.class === "editing") {
      return (
        <li className="editing" key={item.id}>
          <Task label={item.label} />
          <input type="text" className="edit" defaultValue={item.label} />
        </li>
      );
    } else {
      return (
        <li key={item.id}>
          <Task label={item.label} />
        </li>
      );
    }
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
