import React from "react";
import styles from "./Todoitem.module.css";
function ToDoItem({ item, todos, settodos }) {
  function handleDelete(item) {
    console.log("item deleted" + item);

    settodos(todos.filter((todo) => todo != item));
  }
  return (
    <div className={styles.item}>
      <div classname={styles.itemname}>
        {item.name}{" "}
        <span className={styles.deleteButton}>
          <button onClick={() => handleDelete(item)}>x</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
export default ToDoItem;
