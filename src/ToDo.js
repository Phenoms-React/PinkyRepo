import { useState } from "react";
import React from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";

function ToDo() {
  const [todos, settodos] = useState([]);
  return (
    <div>
      <Form todos={todos} settodos={settodos}></Form>
      <ToDoList todos={todos} settodos={settodos}></ToDoList>
      {console.log(todos)}
    </div>
  );
}

export default ToDo;
