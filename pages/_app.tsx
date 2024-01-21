import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardComponent from "@/components/dashboard/dashboard";
import WrapperContainer from "@/components/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { DashboardProvider } from "@/store/global";
import Head from "next/head";

export default function DesktopWrapper() {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Challenge Puntospoint</title>
      </Head>
      <React.Fragment>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <DashboardProvider>
            <WrapperContainer>
              <DashboardComponent />
            </WrapperContainer>
          </DashboardProvider>
        </QueryClientProvider>
      </React.Fragment>
    </>
  );
}
