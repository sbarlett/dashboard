import { RenderedInfo, Transaction } from "../../../utils/types";
import { normalizeDate } from "../../../utils/functions";

export function getOperationsNextMonths(data: Array<Transaction>) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const proximosTresMeses = Array.from(
    { length: 3 },
    (_, index) => (currentMonth + index) % 12
  );
  const operacionesProximosTresMeses = data?.filter((operation) => {
    const mesOperacion = new Date(operation.date).getMonth();
    return proximosTresMeses.includes(mesOperacion);
  });

  return getDataCardsSideBar(operacionesProximosTresMeses);
}

function getDataCardsSideBar(data: Array<Transaction>): RenderedInfo[] {
  const informacionRenderizada: RenderedInfo[] = [];

  const mesesUnicos: string[] = Array.from(
    new Set(data?.map((transaccion) => transaccion.monthOperation))
  );

  mesesUnicos.forEach((mes) => {
    const infoMes: any = {
      mes,
      acumulado: {
        clientesTotal: 0,
        ventasTotales: 0,
        montoTotal: 0,
      },
      facturacion: [],
    };
    const fechasUnicas = new Set();

    const transaccionesMes = data?.filter(
      (transaccion) => transaccion.monthOperation === mes
    );

    transaccionesMes.forEach((transaccion) => {
      infoMes.acumulado.clientesTotal += transaccion.customersBuyByDay;
      infoMes.acumulado.ventasTotales += transaccion.totalAmountTransactions;
      infoMes.acumulado.montoTotal += transaccion.totalAmountTransactions;

      if (transaccion.totalAmountTransactions > 0) {
        const fechaFormateada = normalizeDate(transaccion.dayOperation);

        if (
          !fechasUnicas.has(fechaFormateada) &&
          infoMes.facturacion.length < 3
        ) {
          const factuItem = {
            fecha: fechaFormateada,
            ventas: transaccion.totalAmountTransactions,
          };
          infoMes.facturacion.push(factuItem);
          fechasUnicas.add(fechaFormateada);
        }
      }
    });

    informacionRenderizada.push(infoMes);
  });

  return informacionRenderizada;
}
