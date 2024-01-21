import React, { FC } from "react";
import styles from "../styles/sidebar-buttons.module.css";
import { SideBarButtonsProps } from '../../../utils/types';
import GraphicVioleta from '../../assets/graphic-violet';
import GraphicWhite from '../../assets/graphic-white';
import StartViolet from '../../assets/star-violet';
import StarWhite from '../../assets/star-white';

const SideBarButtons: FC<SideBarButtonsProps> = ({
  onClick,
  isFocus,
  text,
  onKeyPress,
  tabIndex
}) => {
  return (
    <div
      className={isFocus ? styles.buttonFocus : styles.buttonNotFocus}
      onClick={onClick}
      onKeyPress={onKeyPress}
      tabIndex={tabIndex}
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
