import { getDaysActuallyMonth } from "@/components/charts/utils/functions";
import { transsaction } from "./mock";
import { RenderedInfo, Transaction } from "./types";

export const listButtonsSideBar = [
  {
    title: "Gráfico",
    tag: "",
  },
  {
    title: "Pulso",
    tag: "",
  },
];

export const listButtons = [
  {
    title: "Dashboard",
    route: "/home",
    tag: "",
  },
  {
    title: "Clientes",
    route: "/clientes",
    tag: "",
  },
  {
    title: "Reglas de acumulación",
    route: "/reglas",
    tag: "",
  },
];

export const filterListButtons = [
  {
    title: "HOY",
    tag: "",
  },
  {
    title: "7D",
    tag: "",
  },
  {
    title: "Este mes",
    tag: "",
  },
  {
    title: "6 M",
    tag: "",
  },
  {
    title: "YTD/YTG",
    tag: "",
  },
  {
    title: "1A",
    tag: "",
  },
  {
    title: "MAX",
    tag: "",
  },
  {
    title: "Personalizado",
    tag: "",
  },
];
export const buttonsDateMobile = [
  {
    title: "HOY",
    tag: "",
  },
  {
    title: "7D",
    tag: "",
  },
  {
    title: "Este mes",
    tag: "",
  },
  {
    title: "6 M",
    tag: "",
  },
  {
    title: "MAX",
    tag: "",
  },
];
export const list7DiasButton = [
  {
    title: "Todo",
    tag: "",
  },
  {
    title: "Lunes",
    tag: "",
  },
  {
    title: "Martes",
    tag: "",
  },
  {
    title: "Miercoles",
    tag: "",
  },
  {
    title: "Jueves",
    tag: "",
  },
  {
    title: "Viernes",
    tag: "",
  },
  {
    title: "Sabado",
    tag: "",
  },
  {
    title: "Domingo",
    tag: "",
  },
];

export const listButtonClient1 = [
  {
    button1: "Clientes",
    tag: "",
  },
  {
    button1: "Transacciones",
    tag: "",
  },
];
export const listButtonClient2 = [
  {
    button2: "Dinero",
    tag: "",
  },
  {
    button2: "Cashback",
    tag: "",
  },
];

export const hours: string[] = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];
export const today: string = new Date().toISOString().split("T")[0];
export const weekDays: string[] = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
export const months: string[] = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
export const hoursDay = [
  "00:00 - 04:00",
  "04:00 - 08:00",
  "08:00 - 12:00",
  "12:00 - 16:00",
  "16:00 - 20:00",
  "20:00 - 00:00",
];

export const normalizeFilterDates = (date: string) => {
  const map = new Map();
  const fallBack = "hoy";
  map.set("HOY", "hoy");
  map.set("Este mes", "EsteMes");
  map.set("7D", "7D");
  map.set("6 M", "6M");
  map.set("1A", "1A");
  map.set("MAX", "MAX");
  map.set(null, fallBack);
  map.set(undefined, fallBack);
  return map.get(date);
};

export const normalizeDate = (fullDate: string): string => {
  const map = new Map();
  map.set("Enero", "01");
  map.set("Febrero", "02");
  map.set("Marzo", "03");
  map.set("Abril", "04");
  map.set("Mayo", "05");
  map.set("Junio", "06");
  map.set("Julio", "07");
  map.set("Agosto", "08");
  map.set("Septiembre", "09");
  map.set("Octubre", "10");
  map.set("Noviembre", "11");
  map.set("Diciembre", "12");

  const [dia, nombreMes] = fullDate.split(" de ");
  const mesFormateado = map.get(nombreMes) || "";
  return `${dia}/${mesFormateado}`;
};

export const normalizeTable = (date: string) => {
  const map = new Map();
  const fallBack = "hoy";
  map.set("7D", "Semana");
  map.set("hoy", "Horas");
  map.set(null, fallBack);
  map.set(undefined, fallBack);
  return map.get(date);
};

export const validateDate = (type: string) => {
  switch (type) {
    case "hoy":
      return hours;
    case "7D":
      return weekDays;
    case "EsteMes":
      return getDaysActuallyMonth();
    case "6M":
      return months;
    case "1A":
      return months;
    case "MAX":
      return months;
    default:
      return [{}];
  }
};

// Obtener operaciones de los proximos 3 meses Cards del SideBar
export function operacionesProximosTresMeses(data: Array<Transaction>) {
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

  return obtenerInformacionRenderizada(operacionesProximosTresMeses);
}

// Ordenar y acumular datos para las Cards del Sidebar
function obtenerInformacionRenderizada(
  data: Array<Transaction>
): RenderedInfo[] {
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
      facturacion: [], // Inicializar el array factu como un array vacío
    };

    const fechasUnicas = new Set(); // Utilizar un Set para rastrear fechas únicas

    // Filtrar transacciones correspondientes al mes actual
    const transaccionesMes = data?.filter(
      (transaccion) => transaccion.monthOperation === mes
    );

    // Iterar sobre las transacciones del mes y actualizar la información
    transaccionesMes.forEach((transaccion) => {
      infoMes.acumulado.clientesTotal += transaccion.customersBuyByDay;
      infoMes.acumulado.ventasTotales += transaccion.totalAmountTransactions;
      infoMes.acumulado.montoTotal += transaccion.totalAmountTransactions;

      if (transaccion.totalAmountTransactions > 0) {
        // Obtener la fecha formateada
        const fechaFormateada = normalizeDate(transaccion.dayOperation);

        // Verificar si la fecha ya está en el conjunto de fechas únicas
        if (
          !fechasUnicas.has(fechaFormateada) &&
          infoMes.facturacion.length < 3
        ) {
          // Crear un objeto con la fecha actual
          const factuItem = {
            fecha: fechaFormateada,
            ventas: transaccion.totalAmountTransactions,
          };
          // Agregar el objeto al array factu y al conjunto de fechas únicas
          infoMes.facturacion.push(factuItem);
          fechasUnicas.add(fechaFormateada);
        }
      }
    });

    informacionRenderizada.push(infoMes);
  });

  return informacionRenderizada;
}
