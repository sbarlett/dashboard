import React from "react";
import { axisClasses } from "@mui/x-charts";
import { validateDate } from "@/utils/functions";
import { useDashboardContext } from "@/store/global";
import Box from "@mui/material/Box";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { LinePlot } from "@mui/x-charts/LineChart";
import { BarPlot } from "@mui/x-charts/BarChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import {
  getValueAllData,
  getValueCustomers,
  getValueTransaccion,
} from "./utils/functions";
import { DataOperationProps } from "@/utils/types";
import { Grid } from "@mui/material";
import useIsMobile from "@/hooks/useMobile";

const ChartComponent: React.FC<DataOperationProps> = ({
  data,
}: DataOperationProps) => {
  const { selectedDate, selectedClient, selectedGrafic, selectedDay } =
    useDashboardContext();
  const isMobile = useIsMobile();

  return (
    <Grid item xs={12} lg={12}>
      {selectedGrafic === "Gráfico" ? (
        <>
          {selectedClient === "Transacciones" || selectedClient === "Dinero" ? (
            <Box sx={{ width: "100%", maxWidth: 1042 }}>
              <ResponsiveChartContainer
                xAxis={[
                  {
                    scaleType: "band",
                    data:
                      selectedDate === "7D" && selectedDay !== "Todo"
                        ? [selectedDay]
                        : validateDate(selectedDate),
                    id: "customersBuyByDay",
                    label: "Clientes",
                  },
                ]}
                yAxis={[
                  { id: "totalAmountTransactions" },
                  { id: "customersBuyByDay" },
                ]}
                dataset={getValueAllData(data, selectedDate, selectedDay)}
                series={[
                  {
                    type: "line",
                    id: "totalAmountTransactions",
                    yAxisKey: "totalAmountTransactions",
                    data: getValueTransaccion(data, selectedDate, selectedDay),
                    color: "trasparent",
                  },

                  {
                    type: "bar",
                    id: "totalAmountTransactions",
                    yAxisKey: "totalAmountTransactions",
                    data: getValueTransaccion(data, selectedDate, selectedDay),
                    color: "#358DEB",
                  },
                ]}
                height={400}
                margin={{ left: 70, right: 70 }}
                sx={{
                  [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: "translate(-25px, 0)",
                  },
                  [`.${axisClasses.right} .${axisClasses.label}`]: {
                    transform: "translate(30px, 0)",
                  },
                }}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis axisId="customersBuyByDay" label="" />
                <ChartsYAxis
                  axisId="totalAmountTransactions"
                  label="Transacciones"
                />
              </ResponsiveChartContainer>
            </Box>
          ) : (
            <Box sx={{ width: "100%", maxWidth: 1042 }}>
              <ResponsiveChartContainer
                xAxis={[
                  {
                    scaleType: "band",
                    data:
                      selectedDate === "7D" && selectedDay !== "Todo"
                        ? [selectedDay]
                        : validateDate(selectedDate),
                    id: "customersBuyByDay",
                    label: "Clientes",
                  },
                ]}
                yAxis={[
                  { id: "totalAmountTransactions" },
                  { id: "customersBuyByDay" },
                ]}
                dataset={getValueAllData(data, selectedDate, selectedDay)}
                series={[
                  {
                    type: "line",
                    id: "totalAmountTransactions",
                    yAxisKey: "totalAmountTransactions",
                    data: getValueTransaccion(data, selectedDate, selectedDay),
                    color: "trasparent",
                  },
                  {
                    type: "line",
                    id: "customersBuyByDay",
                    yAxisKey: "customersBuyByDay",
                    data: getValueCustomers(data, selectedDate, selectedDay),
                    color: "trasparent",
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
                ]}
                height={400}
                margin={{ left: 70, right: 70 }}
                sx={{
                  [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: "translate(-25px, 0)",
                  },
                  [`.${axisClasses.right} .${axisClasses.label}`]: {
                    transform: "translate(30px, 0)",
                  },
                }}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis axisId="customersBuyByDay" label="" />
                <ChartsYAxis axisId="totalAmountTransactions" label="" />
              </ResponsiveChartContainer>
            </Box>
          )}
        </>
      ) : (
        <>
          {selectedClient === "Clientes" || selectedClient === "Dinero" ? (
            <Box sx={{ width: "100%", maxWidth: 1042 }}>
              <ResponsiveChartContainer
                xAxis={[
                  {
                    scaleType: "band",
                    data:
                      selectedDate === "7D" && selectedDay !== "Todo"
                        ? [selectedDay]
                        : validateDate(selectedDate),
                    id: "customersBuyByDay",
                    label: "Clientes",
                  },
                ]}
                yAxis={[
                  { id: "totalAmountTransactions" },
                  { id: "customersBuyByDay" },
                ]}
                dataset={getValueAllData(data, selectedDate, selectedDay)}
                series={[
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
                ]}
                height={400}
                margin={{ left: 70, right: 70 }}
                sx={{
                  [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: "translate(-25px, 0)",
                  },
                  [`.${axisClasses.right} .${axisClasses.label}`]: {
                    transform: "translate(30px, 0)",
                  },
                }}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis axisId="customersBuyByDay" label="" />
                <ChartsYAxis axisId="totalAmountTransactions" label="" />
                <ChartsYAxis
                  axisId="totalAmountTransactions"
                  position="right"
                  label=""
                />
              </ResponsiveChartContainer>
            </Box>
          ) : (
            <Box sx={{ width: "100%", maxWidth: 1042 }}>
              <ResponsiveChartContainer
                xAxis={[
                  {
                    scaleType: "band",
                    data:
                      selectedDate === "7D" &&
                      selectedDay !== "Todo" &&
                      !isMobile
                        ? [selectedDay]
                        : validateDate(selectedDate),
                    id: "customersBuyByDay",
                    label: "Dates",
                  },
                ]}
                yAxis={[{ id: "totalAmountTransactions" }]}
                dataset={getValueAllData(data, selectedDate, selectedDay)}
                series={[
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
                    type: "bar",
                    id: "totalAmountTransactions",
                    yAxisKey: "totalAmountTransactions",
                    data: getValueTransaccion(data, selectedDate, selectedDay),
                    color: "#358DEB",
                  },
                ]}
                height={400}
                margin={{ left: 70, right: 70 }}
                sx={{
                  [`.${axisClasses.left} .${axisClasses.label}`]: {
                    transform: "translate(-25px, 0)",
                  },
                  [`.${axisClasses.right} .${axisClasses.label}`]: {
                    transform: "translate(30px, 0)",
                  },
                }}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis axisId="customersBuyByDay" label="" />
                <ChartsYAxis axisId="totalAmountTransactions" label="" />
                <ChartsYAxis
                  axisId="totalAmountTransactions"
                  position="right"
                  label="Monto"
                />
              </ResponsiveChartContainer>
            </Box>
          )}
        </>
      )}
    </Grid>
  );
};

export default ChartComponent;
