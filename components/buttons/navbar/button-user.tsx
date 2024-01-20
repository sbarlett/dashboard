import React from "react";
import styles from "../styles/button-user.module.css";
import ArrowTop from "../../assets/arrow-top";

const ButtonUser = () => {
  return (
    <div className={styles.userContainer}>
      <div>
        <p className={styles.textUser}>Santiago Barletta</p>
      </div>
      <ArrowTop />
    </div>
  );
};

export default ButtonUser;
