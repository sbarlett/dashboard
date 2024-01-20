import React from "react";
import styles from "../styles/button-export.module.css";
import Export from "@/components/assets/export";

const ExportComponent = () => {
  return (
    <div className={styles.verDetallesContainer}>
      <Export />
      <p className={styles.textVerDetalles}>Exportar tabla</p>
    </div>
  );
};

export default ExportComponent;
