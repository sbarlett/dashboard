import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import WrapperContainer from "@/components/layout/layout";
import ReglasAcumulacion from "@/components/reglas-acumulacion/reglas-acumulacion";

export default function DesktopWrapper() {
  return (
    <React.Fragment>
      <CssBaseline />
      <WrapperContainer>
        <ReglasAcumulacion />
      </WrapperContainer>
    </React.Fragment>
  );
}
