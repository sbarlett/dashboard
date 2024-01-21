import React from "react";
import styles from "../styles/targets-sidebar.module.css";

const TargetsSideBarComponent = ({ data }) => {
  function formatearNumero(numero: number) {
    return numero.toLocaleString("es-ES");
  }

  const calcularCashBack = () => {
    return data.acumulado.montoTotal * 0.3;
  };
  
  const renderInfoTarget = (titulo, valor) => (
    <div className={styles.clientDatos}>
      <p>{titulo}</p>
      <p>{valor}</p>
    </div>
  );

  return (
    <div className={styles.targetContainer}>
      <div className={styles.cardContainer}>
        <p className={styles.textMonth}>{data.mes}</p>

        {renderInfoTarget("Clientes", data.acumulado.clientesTotal)}
        {renderInfoTarget("Ventas totales", data.acumulado.ventasTotales)}
        {renderInfoTarget(
          "Monto total",
          `$${formatearNumero(data.acumulado.montoTotal)}M`
        )}

        <p className={styles.textCashback}>Cashback</p>
        {renderInfoTarget(
          "Acumulado",
          `$${formatearNumero(calcularCashBack())}`
        )}

        {data.facturacion.map((item, index) => (
          <div className={styles.clientDatos} key={index}>
            {renderInfoTarget(`Facturado ${item.fecha}`, `$${item.ventas}`)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetsSideBarComponent;
