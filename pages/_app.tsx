import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardComponent from "@/components/dashboard/dashboard";
import WrapperContainer from "@/components/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { DashboardProvider } from "@/store/global";

export default function DesktopWrapper() {
  const queryClient = new QueryClient();

  return (
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
  );
}
