import React, { FC } from "react";
import styles from "../styles/sidebar-buttons.module.css";

import GraphicVioleta from "@/components/assets/graphic-violet";
import StartViolet from "@/components/assets/star-violet";
import GraphicWhite from "@/components/assets/graphic-white";
import StarWhite from "@/components/assets/star-white";
import { SideBarButtonsProps } from "@/utils/types";

const SideBarButtons: FC<SideBarButtonsProps> = ({
  onClick,
  isFocus,
  text,
}) => {
  return (
    <div
      className={isFocus ? styles.buttonFocus : styles.buttonNotFocus}
      onClick={onClick}
    >
      {text === "Gráfico" && !isFocus && <GraphicVioleta />}
      {text === "Gráfico" && isFocus && <GraphicWhite />}
      {text === "Pulso" && !isFocus && <StartViolet />}
      {text === "Pulso" && isFocus && <StarWhite />}
      <p className={isFocus ? styles.textButton : styles.textButtonNotFocus}>
        {text}
      </p>
    </div>
  );
};

export default SideBarButtons;
