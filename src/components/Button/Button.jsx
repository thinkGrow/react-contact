import React from "react";
import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = (props) => {
  console.log(props);
  return (
    <button className={styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
