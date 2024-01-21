import React from "react";
import { Grid } from "@mui/material";
import ChartComponent from "../charts/charts";
import ButtonsWrapper from "./buttons-wrapper/buttons-wrapper";
import SideBarComponent from "../sidebar/sidebar";
import ExportButton from "../buttons/filter-buttons/button-export";
import ClientTable from "../table/table";
import Spinner from "../spinner/spinner";
import Indicators from "./indicadores-dash/indicadores-dash";
import useIsMobile from "../../hooks/useMobile";
import { useFetchApiCall } from "../../hooks/useFetchApiCall";
import styles from "./styles/dashboard.module.css";

const DashboardComponent = () => {
  const isMobile = useIsMobile();
  const { data, isLoading } = useFetchApiCall();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Grid
        maxWidth="xl"
        className={!isMobile ? styles.dashboardContainer : styles.dashMobile}
      >
        <Grid className={styles.backgroundContainer}>
          <Grid container spacing={2}>
            <Grid
              item
              lg={9}
              md={8}
              xs={12}
              display={"flex"}
              flexDirection={"column"}
              padding={0}
            >
              <ButtonsWrapper />
              <Grid
                item
                display={"flex"}
                flexDirection={"column"}
                marginTop={!isMobile && "30px"}
              >
                <ChartComponent data={data?.data} />
                <Indicators />
              </Grid>
              <Grid item display={"flex"} justifyContent={"flex-end"}>
                <ExportButton />
              </Grid>
              <Grid item display={"flex"} marginTop={"30px"}>
                <ClientTable />
              </Grid>
            </Grid>
            <Grid item lg={3} xs={12} md={3}>
              <SideBarComponent data={data?.data} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardComponent;
0;
