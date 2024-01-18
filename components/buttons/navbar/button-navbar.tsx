import React, { FC } from "react";
import styles from "../styles/button-navbar.module.css";
import { ButtonNavBarProps } from "@/utils/types";

const ButtonNavBar: FC<ButtonNavBarProps> = ({
  textButton,
  isFocused,
  onClick,
}) => {
  return (
    <div
      className={isFocused ? styles.containerButton : styles.notFocus}
      onClick={onClick}
    >
      <div className={styles.textContainer}>
        <p
          className={isFocused ? styles.textButton : styles.textButtonNotFocus}
        >
          {textButton}
        </p>
      </div>
    </div>
  );
};

export default ButtonNavBar;
