import React from "react";
import { axisClasses } from "@mui/x-charts";
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
import { Grid } from "@mui/material";
import { DataOperationProps } from "../../utils/types";
import { useDashboardContext } from "../../store/global";
import useIsMobile from "../../hooks/useMobile";
import { validateDate } from "../../utils/functions";
import { filterAndAccumulateByYear } from "./utils/functions";

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
              {selectedDate === "YTD/YTG" ? (
                <>
                  <Box sx={{ display: "flex" }}>
                    {!isMobile && (
                      <ResponsiveChartContainer
                        xAxis={[
                          {
                            scaleType: "band",
                            data: ["YTD/YTG"],
                            id: "customersBuyByDay",
                            label: "Clientes",
                          },
                        ]}
                        yAxis={[{ id: "totalAmountTransactions" }]}
                        series={[
                          {
                            type: "bar",
                            data: getValueAllData(data, selectedDate).map(
                              (dato: any) => {
                                const operationDate = new Date(
                                  dato?.date
                                ).getFullYear();

                                return Number(
                                  filterAndAccumulateByYear(
                                    data,
                                    operationDate
                                  ).toLocaleString("eu")
                                );
                              }
                            ),

                            color: "#EB3535",
                          },
                          {
                            type: "bar",
                            data: getValueAllData(data, selectedDate).map(
                              (dato: any) => {
                                const operationDate =
                                  new Date(dato?.date).getFullYear() + 1;

                                return Number(
                                  filterAndAccumulateByYear(
                                    data,
                                    operationDate
                                  ).toLocaleString("eu")
                                );
                              }
                            ),
                            color: "#7A35EB",
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
                        <ChartsXAxis
                          axisId="customersBuyByDay"
                          label=""
                          disableLine={true}
                        />
                        <ChartsYAxis
                          axisId="totalAmountTransactions"
                          label=""
                          disableLine={true}
                        />
                      </ResponsiveChartContainer>
                    )}
                    <ResponsiveChartContainer
                      xAxis={[
                        {
                          scaleType: "band",
                          data: ["YTD/YTG"],
                          id: "customersBuyByDay",
                          label: "Clientes",
                        },
                      ]}
                      yAxis={[{ id: "totalAmountTransactions" }]}
                      series={[
                        {
                          type: "bar",
                          data: getValueAllData(data, selectedDate).map(
                            (dato: any) => {
                              const operationDate = new Date(
                                dato?.date
                              ).getFullYear();

                              return Number(
                                filterAndAccumulateByYear(
                                  data,
                                  operationDate
                                ).toLocaleString("eu")
                              );
                            }
                          ),

                          color: "#EB3535",
                        },
                        {
                          type: "bar",
                          data: getValueAllData(data, selectedDate).map(
                            (dato: any) => {
                              const operationDate =
                                new Date(dato?.date).getFullYear() + 1;

                              return Number(
                                filterAndAccumulateByYear(
                                  data,
                                  operationDate
                                ).toLocaleString("eu")
                              );
                            }
                          ),
                          color: "#7A35EB",
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
                      <ChartsXAxis
                        axisId="customersBuyByDay"
                        label=""
                        disableLine={true}
                      />
                      <ChartsYAxis
                        axisId="totalAmountTransactions"
                        label=""
                        disableLine={true}
                      />
                    </ResponsiveChartContainer>
                  </Box>
                </>
              ) : (
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
                  series={[
                    {
                      type: "line",
                      id: "totalAmountTransactions",
                      yAxisKey: "totalAmountTransactions",
                      data: getValueTransaccion(
                        data,
                        selectedDate,
                        selectedDay
                      ),
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
                      data: getValueTransaccion(
                        data,
                        selectedDate,
                        selectedDay
                      ),
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
              )}
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
                        : selectedDate === "YTD/YTG"
                        ? ["YTD/YTG"]
                        : validateDate(selectedDate),
                    id: "customersBuyByDay",
                    label: "Dates",
                  },
                ]}
                yAxis={[{ id: "totalAmountTransactions" }]}
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
