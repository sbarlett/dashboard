import React from "react";
import Export from "../../assets/export";
import styles from "../styles/button-export.module.css";

const ExportButton = () => {
  return (
    <div className={styles.verDetallesContainer}>
      <Export />
      <p className={styles.textVerDetalles}>Exportar tabla</p>
    </div>
  );
};

export default ExportButton;
