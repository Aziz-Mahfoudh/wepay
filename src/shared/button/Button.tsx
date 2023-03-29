import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary";
}

const Button = ({ children, color = "primary" }: Props) => {
  return (
    <button className={[styles.btn, styles["btn-" + color]].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
