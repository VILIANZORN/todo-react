import React from "react";
import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";

import "./app.css";

const todoData = [
  { label: " Completed task", class: "completed", id: 1 },
  { label: "Editing text", class: "editing", id: 2 },
  { label: "Active task", class: "", id: 3},
];

const App = () => {
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList todos={todoData} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
