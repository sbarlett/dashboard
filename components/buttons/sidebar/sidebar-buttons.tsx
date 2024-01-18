import React, { FC } from "react";
import styles from "../styles/sidebar-buttons.module.css";

import IconGraficoVioleta from "@/components/icons/grafico-violet";
import IconPulsoVioleta from "@/components/icons/star-violet";
import IconGraficoWhite from "@/components/icons/grafico-white";
import IconStarWhite from "@/components/icons/star-white";
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
      {text === "Gráfico" && !isFocus && <IconGraficoVioleta />}
      {text === "Gráfico" && isFocus && <IconGraficoWhite />}
      {text === "Pulso" && !isFocus && <IconPulsoVioleta />}
      {text === "Pulso" && isFocus && <IconStarWhite />}
      <p className={isFocus ? styles.textButton : styles.textButtonNotFocus}>
        {text}
      </p>
    </div>
  );
};

export default SideBarButtons;
