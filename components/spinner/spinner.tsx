import React from "react";
import styles from "./styles/spinner.styles";

function Spinner(props: { inverse?: boolean; blue?: boolean; dark?: boolean }) {
  return (
    <div className={styles.fullScreen}>
      <svg
        className={styles.container}
        height={"32px"}
        role="img"
        viewBox="0 0 66 66"
        width={"32px"}
      >
        <title>Cargando</title>
        <circle
          className={styles.spinner}
          cx="33"
          cy="33"
          fill="none"
          r="30"
          role="presentation"
          stroke={
            props.inverse
              ? styles.inverse
              : props.blue
              ? styles.colorBlue
              : props.dark
              ? styles.dark
              : styles.color
          }
          strokeLinecap="square"
          strokeWidth="6"
        />
      </svg>
    </div>
  );
}

export default Spinner;
