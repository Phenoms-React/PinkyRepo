import React from "react";
//import Hello from "./Hello.css";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header1}>
      My To Do Lists<br></br>
    </div>
  );
  //return <div className="header1">My To Do Lists</div>;
}

export default Header;
