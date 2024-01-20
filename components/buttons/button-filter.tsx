import React from "react";
import styles from "./styles/button-filter.module.css";
import Tilde from "../assets/tilde";
import Calendario from "../assets/calendario";
import { ButtonProps } from "../../utils/types";

const ButtonFilter: React.FC<ButtonProps> = ({
  title,
  onClick,
  isFocused,
  isClientButton,
}: ButtonProps) => {
  const buttons = ["Clientes", "Transacciones", "Dinero", "Cashback"];
  return (
    <div className={styles.container} onClick={onClick}>
      <div
        className={
          isFocused
            ? styles.secontContainer
            : isClientButton && !isFocused
            ? styles.clientContainerNotFocus
            : styles.secontContainerNotFocus
        }
      >
        <div className={styles.thirdContainer}>
          {isFocused && buttons.includes(title) && <Tilde />}
          {title === "Personalizado" && <Calendario />}
          <p className={styles.textButton}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonFilter;
