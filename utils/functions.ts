import axios from "axios";
import { getDaysActuallyMonth } from "../components/charts/utils/functions";

export const listButtonsSideBar = [
  {
    title: "Gráfico",
  },
  {
    title: "Pulso",
  },
];

export const listButtons = [
  {
    title: "Dashboard",
    route: "/",
  },
  {
    title: "Clientes",
    route: "/",
  },
  {
    title: "Reglas de acumulación",
    route: "/",
  },
];

export const filterListButtons = [
  {
    title: "HOY",
  },
  {
    title: "7D",
  },
  {
    title: "Este mes",
  },
  {
    title: "6 M",
  },
  {
    title: "YTD/YTG",
  },
  {
    title: "1A",
  },
  {
    title: "MAX",
  },
  {
    title: "Personalizado",
  },
];
export const buttonsDateMobile = [
  {
    title: "HOY",
  },
  {
    title: "7D",
  },
  {
    title: "Este mes",
  },
  {
    title: "6 M",
  },
  {
    title: "MAX",
  },
];
export const list7DiasButton = [
  {
    title: "Todo",
  },
  {
    title: "Lunes",
  },
  {
    title: "Martes",
  },
  {
    title: "Miercoles",
  },
  {
    title: "Jueves",
  },
  {
    title: "Viernes",
  },
  {
    title: "Sabado",
  },
  {
    title: "Domingo",
  },
];

export const listButtonClient1 = [
  {
    button1: "Clientes",
  },
  {
    button1: "Transacciones",
  },
];
export const listButtonClient2 = [
  {
    button2: "Dinero",
  },
  {
    button2: "Cashback",
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

export const normalizeFilterDates = (date: string) => {
  const map = new Map();
  const fallBack = "hoy";
  map.set("HOY", "hoy");
  map.set("Este mes", "EsteMes");
  map.set("7D", "7D");
  map.set("6 M", "6M");
  map.set("YTD/YTG", "YTD/YTG");
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

export const asyncFetchApi = async (path: string) => {
  return await axios(path)
    .then((res) => {
      return { error: null, data: res.data };
    })
    .catch((error) => {
      return { error: error, data: null };
    });
};
