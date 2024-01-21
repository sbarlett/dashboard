import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardComponent from "@/components/dashboard/dashboard";
import WrapperContainer from "@/components/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { DashboardProvider } from "@/store/global";
import Head from "next/head";
import Script from "next/script";

export default function DesktopWrapper() {
  const queryClient = new QueryClient();

  // const GTM_ID = "GTM-PDVW229L";
  const GTM_ID = "G-Q8GD0FQS88";

  return (
    <>
      <Head>
        <title>Challenge Puntospoint</title>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTM_ID}', {
          page_path: window.location.pathname,
          });
        `}
        </Script>
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
function useReportWebVitals(arg0: (metric: any) => void) {
  throw new Error("Function not implemented.");
}
