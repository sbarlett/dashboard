import React from "react";
import styles from "../styles/button-export.module.css";
import IconExport from "@/components/icons/export";

const ExportComponent = () => {
  return (
    <div className={styles.verDetallesContainer}>
      <IconExport />
      <p className={styles.textVerDetalles}>Exportar tabla</p>
    </div>
  );
};

export default ExportComponent;
