import { useState } from "react";
import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./Todolist.module.css";

function ToDoList({ todos, settodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <ToDoItem
          key={item.name}
          item={item}
          todos={todos}
          settodos={settodos}
        ></ToDoItem>
      ))}
      {console.log(todos)}
    </div>
  );
}

export default ToDoList;
