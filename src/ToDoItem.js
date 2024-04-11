import React from "react";
import styles from "./Todoitem.module.css";
function ToDoItem({ item, todos, settodos }) {
  function handleDelete(item) {
    console.log("item deleted" + item);

    settodos(todos.filter((todo) => todo != item));
  }
  function handleClick(item) {
    console.log("item clicked" + item);
    const newArray = todos.map((todo) =>
      todo.name === item ? { ...todo, done: !todo.done } : { todo }
    );
    settodos(newArray);
    console.log(todos);
  }
  const classNameDone = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div classname={styles.itemname}>
        <span className={classNameDone} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span className={styles.deleteButton}>
          <button onClick={() => handleDelete(item)}>x</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
export default ToDoItem;
