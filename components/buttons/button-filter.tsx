import React from "react";
import styles from "./styles/button-filter.module.css";
import Tilde from "../icons/tilde";
import Calendario from "../icons/calendario";
import { ButtonProps } from "@/utils/types";

const ButtonFilter: React.FC<ButtonProps> = ({
  title,
  onClick,
  isFocused,
  isClientButton,
}: ButtonProps) => {
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
          {isFocused && (title === "Clientes" || title === "Transacciones") && (
            <Tilde />
          )}
          {title === "Personalizado" && <Calendario />}
          <p className={styles.textButton}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonFilter;
