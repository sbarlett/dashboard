import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import { DashboardProvider } from "../store/global";
import WrapperContainer from "../components/layout/layout";
import DashboardComponent from "../components/dashboard/dashboard";
import { pageviewGTM } from "../components/gtm/functions/gtm-function";
import GtmScript from "../components/gtm/GtmScript";

export default function DesktopWrapper() {
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageviewGTM(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Challenge Puntospoint</title>
      </Head>
      <GtmScript />
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
