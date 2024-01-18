import React from "react";
import styles from "../styles/targets-sidebar.module.css";

const TargetsSideBarComponent = ({ data }) => {
  function formatearNumero(numero: number) {
    return numero.toLocaleString("es-ES"); // 'es-ES' es la configuración para español en España
  }

  const cashBack = data.acumulado.montoTotal * 0.3;

  return (
    <div className={styles.targetContainer}>
      <div className={styles.cardContainer}>
        <p className={styles.textMonth}>{data.mes}</p>
        <div className={styles.clientDatos}>
          <p>Clientes</p>
          <p>{data.acumulado.clientesTotal}</p>
        </div>
        <div className={styles.clientDatos}>
          <p>Ventas totales</p>
          <p>{data.acumulado.ventasTotales}</p>
        </div>
        <div className={styles.clientDatos}>
          <p>Monto total</p>
          <p>{`$${formatearNumero(data.acumulado.montoTotal)}M`}</p>
        </div>
        <p className={styles.textCashback}>Cashback</p>
        <div className={styles.clientDatos}>
          <p>Acumulado</p>
          <p>{`$${formatearNumero(cashBack)}`}</p>
        </div>
        {data.facturacion.map((item, index) => (
          <div className={styles.clientDatos} key={index}>
            <p>Facturado {item.fecha}</p>
            <p>{`$${item.ventas}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetsSideBarComponent;
