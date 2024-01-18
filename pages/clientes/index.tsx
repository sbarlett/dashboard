import CustomersComponent from "@/components/customers/customers";
import WrapperContainer from "@/components/layout/layout";
import { CssBaseline } from "@mui/material";
import React from "react";

const Clientes = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <WrapperContainer>
        <CustomersComponent />
      </WrapperContainer>
    </React.Fragment>
  );
};

export default Clientes;
