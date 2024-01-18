import React from "react";
import styles from "./styles/indicadores-dash.module.css";
import useIsMobile from "@/hooks/useMobile";

const IndicadoresDash = () => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.indicatorContainer}>
          <div className={styles.indicadtorRed}></div>
          <p className={styles.textIndicator}>Clientes totales</p>
        </div>
      )}
      <div className={styles.indicatorContainer}>
        <div className={styles.indicadtorOrange}></div>
        <div>Clientes nuevos</div>
      </div>
      <div className={styles.indicatorContainer}>
        <div className={styles.indicadtorViolet}></div>
        <div>Compraron</div>
      </div>

      {!isMobile && (
        <div className={styles.indicatorContainer}>
          <div className={styles.indicatorGreen}></div>
          <div className={styles.textIndicator}>No compraron</div>
        </div>
      )}
    </div>
  );
};

export default IndicadoresDash;
