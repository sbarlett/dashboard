import { axisClasses } from "@mui/x-charts";
import { validateDate } from "../../../utils/functions";
import {
  filterAndAccumulateByYear,
  getValueAllData,
  getValueCustomers,
  getValueTransaccion,
} from "./functions";

export const getChartContainerConfig = (
  xAxisConfig,
  yAxisConfig,
  seriesConfig
) => ({
  xAxis: [xAxisConfig],
  yAxis: yAxisConfig,
  series: seriesConfig,
  height: 400,
  margin: { left: 70, right: 70 },
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-25px, 0)",
    },
    [`.${axisClasses.right} .${axisClasses.label}`]: {
      transform: "translate(30px, 0)",
    },
  },
});

export const generateChartConfig = (
  selectedGrafic,
  selectedClient,
  data,
  selectedDate,
  selectedDay
) => {
  const xAxisConfig = {
    scaleType: "band",
    data:
      selectedDate === "7D" && selectedDay !== "Todo"
        ? [selectedDay]
        : selectedDate === "YTD/YTG"
        ? ["YTD/YTG"]
        : validateDate(selectedDate),
    id: "customersBuyByDay",
    label:
      selectedGrafic === "Gráfico"
        ? "Clientes"
        : selectedGrafic === "Clientes"
        ? "Clientes"
        : "Dates",
  };

  const yAxisConfig =
    selectedClient === "Clientes" || selectedClient === "Dinero"
      ? [{ id: "totalAmountTransactions" }, { id: "customersBuyByDay" }]
      : [
          { id: "totalAmountTransactions" },
          { id: "customersBuyByDay", position: "right" },
        ];

  const seriesConfig =
    selectedGrafic === "Gráfico"
      ? selectedClient === "Transacciones" || selectedClient === "Dinero"
        ? [
            {
              type: "line",
              id: "totalAmountTransactions",
              yAxisKey: "totalAmountTransactions",
              data: getValueTransaccion(data, selectedDate, selectedDay),
              color: "transparent",
            },
            {
              type: "bar",
              id: "totalAmountTransactions",
              yAxisKey: "totalAmountTransactions",
              data: getValueTransaccion(data, selectedDate, selectedDay),
              color: "#358DEB",
            },
          ]
        : selectedDate === "YTD/YTG"
        ? [
            {
              type: "bar",
              data: getValueAllData(data, selectedDate).map((dato: any) => {
                const operationDate = new Date(dato?.date).getFullYear();
                return Number(
                  filterAndAccumulateByYear(data, operationDate).toLocaleString(
                    "eu"
                  )
                );
              }),
              color: "#EB3535",
            },
            {
              type: "bar",
              data: getValueAllData(data, selectedDate).map((dato: any) => {
                const operationDate = new Date(dato?.date).getFullYear() + 1;
                return Number(
                  filterAndAccumulateByYear(data, operationDate).toLocaleString(
                    "eu"
                  )
                );
              }),
              color: "#7A35EB",
            },
          ]
        : [
            {
              type: "line",
              id: "totalAmountTransactions",
              yAxisKey: "totalAmountTransactions",
              data: getValueTransaccion(data, selectedDate, selectedDay),
              color: "transparent",
            },
            {
              type: "line",
              id: "customersBuyByDay",
              yAxisKey: "customersBuyByDay",
              data: getValueCustomers(data, selectedDate, selectedDay),
              color: "transparent",
            },
            {
              type: "bar",
              id: "totalAmountTransactions",
              yAxisKey: "totalAmountTransactions",
              data: getValueTransaccion(data, selectedDate, selectedDay),
              color: "#358DEB",
            },
            {
              type: "bar",
              id: "customersBuyByDay",
              yAxisKey: "customersBuyByDay",
              data: getValueCustomers(data, selectedDate, selectedDay),
              color: "#EB7635",
            },
          ]
      : [
          {
            type: "line",
            id: "totalAmountTransactions",
            yAxisKey: "totalAmountTransactions",
            data: getValueTransaccion(data, selectedDate, selectedDay),
            color: "#7A35EB",
            area: true,
            curve: "linear",
          },
          {
            type: "line",
            id: "customersBuyByDay",
            yAxisKey: "customersBuyByDay",
            data: getValueCustomers(data, selectedDate, selectedDay),
            color: "#EB3535",
            area: true,
            curve: "linear",
          },
          {
            type: "bar",
            id: "totalAmountTransactions",
            yAxisKey: "totalAmountTransactions",
            data: getValueTransaccion(data, selectedDate, selectedDay),
            color: "#358DEB",
          },
          {
            type: "bar",
            id: "customersBuyByDay",
            yAxisKey: "customersBuyByDay",
            data: getValueCustomers(data, selectedDate, selectedDay),
            color: "#2DCF5A",
          },
        ];

  return { xAxisConfig, yAxisConfig, seriesConfig };
};
