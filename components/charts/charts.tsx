import React from "react";
import Box from "@mui/material/Box";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { LinePlot, BarPlot } from "@mui/x-charts";
import { ChartsXAxis, ChartsYAxis } from "@mui/x-charts";
import { Grid } from "@mui/material";
import { DataOperationProps } from "../../utils/types";
import { useDashboardContext } from "../../store/global";
import useIsMobile from "../../hooks/useMobile";
import {
  generateChartConfig,
  getChartContainerConfig,
} from "./utils/config-chart";

const ChartComponent: React.FC<DataOperationProps> = ({
  data,
}: DataOperationProps) => {
  const { selectedDate, selectedClient, selectedGrafic, selectedDay } =
    useDashboardContext();
  const isMobile = useIsMobile();

  const { xAxisConfig, yAxisConfig, seriesConfig } = generateChartConfig(
    selectedGrafic,
    selectedClient,
    data,
    selectedDate,
    selectedDay
  );

  return (
    <Grid item xs={12} lg={12}>
      {selectedGrafic === "Gráfico" ? (
        <>
          {selectedClient === "Transacciones" || selectedClient === "Dinero" ? (
            <Box sx={{ width: "100%", maxWidth: 1042 }}>
              <ResponsiveChartContainer
                {...getChartContainerConfig(
                  xAxisConfig,
                  yAxisConfig,
                  seriesConfig
                )}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis axisId="customersBuyByDay" label="" />
                <ChartsYAxis axisId="totalAmountTransactions" label="" />
              </ResponsiveChartContainer>
            </Box>
          ) : (
            <Box sx={{ width: "100%", maxWidth: 1042 }}>
              {selectedDate === "YTD/YTG" ? (
                <>
                  <Box sx={{ display: "flex" }}>
                    {!isMobile && (
                      <ResponsiveChartContainer
                        {...getChartContainerConfig(
                          xAxisConfig,
                          yAxisConfig,
                          seriesConfig
                        )}
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
                      {...getChartContainerConfig(
                        xAxisConfig,
                        yAxisConfig,
                        seriesConfig
                      )}
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
                        position="right"
                        label=""
                        disableLine={true}
                      />
                    </ResponsiveChartContainer>
                  </Box>
                </>
              ) : (
                <ResponsiveChartContainer
                  {...getChartContainerConfig(
                    xAxisConfig,
                    yAxisConfig,
                    seriesConfig
                  )}
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
                {...getChartContainerConfig(
                  xAxisConfig,
                  yAxisConfig,
                  seriesConfig
                )}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis axisId="customersBuyByDay" label="" />
                <ChartsYAxis axisId="totalAmountTransactions" label="" />
                {selectedClient === "Clientes" && (
                  <ChartsYAxis
                    axisId="totalAmountTransactions"
                    position="right"
                    label=""
                  />
                )}
              </ResponsiveChartContainer>
            </Box>
          ) : (
            <Box sx={{ width: "100%", maxWidth: 1042 }}>
              <ResponsiveChartContainer
                {...getChartContainerConfig(
                  xAxisConfig,
                  yAxisConfig,
                  seriesConfig
                )}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis axisId="customersBuyByDay" label="" />
                <ChartsYAxis axisId="totalAmountTransactions" label="" />
                {selectedClient === "Clientes" && (
                  <ChartsYAxis
                    axisId="totalAmountTransactions"
                    position="right"
                    label="Monto"
                  />
                )}
              </ResponsiveChartContainer>
            </Box>
          )}
        </>
      )}
    </Grid>
  );
};

export default ChartComponent;
