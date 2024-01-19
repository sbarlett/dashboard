import React from "react";
import { Grid } from "@mui/material";
import styles from "./styles/dashboard.module.css";
import ChartComponent from "../charts/charts";
import ButtonsWrapper from "./buttons-wrapper/buttons-wrapper";
import SideBarComponent from "../sidebar/sidebar";
import ExportComponent from "../buttons/filter-buttons/button-export";
import useIsMobile from "@/hooks/useMobile";
import ClientTable from "../table/table";
import IndicadoresDash from "./indicadores-dash/indicadores-dash";
import { useFetchApiCall } from "@/hooks/useFetchApiCall";
import { transsaction } from "@/utils/mock";
import Spinner from "../spinner/spinner";

const DashboardComponent = () => {
  const isMobile = useIsMobile();
  const { data, isLoading } = useFetchApiCall();
  return (
    <>
      {!isLoading ? (
        <Grid
          maxWidth="xl"
          className={!isMobile ? styles.dashboardContainer : styles.dashMobile}
        >
          <div className={styles.backgroundContainer}>
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
                  <ChartComponent data={transsaction} />
                  <IndicadoresDash />
                </Grid>
                <Grid item display={"flex"} justifyContent={"flex-end"}>
                  <ExportComponent />
                </Grid>
                <Grid item display={"flex"} marginTop={"30px"}>
                  <ClientTable />
                </Grid>
              </Grid>
              <Grid item lg={3} xs={12} md={3}>
                <SideBarComponent />
              </Grid>
            </Grid>
          </div>
        </Grid>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default DashboardComponent;
0;
