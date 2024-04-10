import { useState } from "react";
import React from "react";
import styles from "./Form.module.css";

function Form({ todos, settodos }) {
  const [todo, settodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.moderninput}
          type="text"
          value={todo.name}
          onChange={(e) => settodo({ name: e.target.value, done: false })}
          placeholder="Enter todo item"
        ></input>
        <button
          className={styles.modernbutton}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
