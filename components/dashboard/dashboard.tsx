import React from "react";
import { Container, Grid } from "@mui/material";
import styles from "./styles/dashboard.module.css";
import { DashboardProvider } from "@/store/global";
import ChartComponent from "../charts/charts";
import ButtonsWrapper from "./buttons-wrapper/buttons-wrapper";
import SideBarComponent from "../sidebar/sidebar";
import { transsaction } from "@/utils/mock";
import ExportComponent from "../buttons/filter-buttons/button-export";
import useIsMobile from "@/hooks/useMobile";
import ClientTable from "../table/table";
import IndicadoresDash from "./indicadores-dash/indicadores-dash";

const DashboardComponent = () => {
  const isMobile = useIsMobile();
  return (
    <DashboardProvider>
      <Container
        maxWidth="xl"
        className={!isMobile ? styles.dashboardContainer : styles.dashMobile}
      >
        <div className={styles.backgroundContainer}>
          <Grid container spacing={2}>
            <Grid
              item
              lg={9}
              xs={12}
              display={"flex"}
              flexDirection={"column"}
              padding={0}
            >
              <ButtonsWrapper />
              <Grid item display={"flex"} flexDirection={'column'} marginTop={!isMobile && "30px"}>
                <ChartComponent data={transsaction} />
                <IndicadoresDash/>
              </Grid>
              <Grid item display={"flex"} justifyContent={"flex-end"}>
                <ExportComponent />
              </Grid>
              <Grid item display={"flex"} marginTop={"30px"} marginBottom={"30px"}>
                <ClientTable />
              </Grid>
            </Grid>
            <Grid item lg={3} xs={12}>
              <SideBarComponent />
            </Grid>
          </Grid>
        </div>
      </Container>
    </DashboardProvider>
  );
};

export default DashboardComponent;
0