import React from "react";
import styles from "../styles/button-user.module.css";
import ArrowTop from "../../icons/arrow-top";

const ButtonUser = () => {
  return (
    <div className={styles.userContainer}>
      <div>
        <p className={styles.textUser}>Santiago Barletta</p>
      </div>
      <ArrowTop onClick={() => {}} />
    </div>
  );
};

export default ButtonUser;
