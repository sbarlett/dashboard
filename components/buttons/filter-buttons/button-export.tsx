import React from "react";
import styles from "../styles/button-export.module.css";
import Export from '../../assets/export';


const ExportButton = () => {
  return (
    <div className={styles.verDetallesContainer}>
      <Export />
      <p className={styles.textVerDetalles}>Exportar tabla</p>
    </div>
  );
};

export default ExportButton;
