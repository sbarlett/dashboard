import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardComponent from "@/components/dashboard/dashboard";
import WrapperContainer from "@/components/layout/layout";
import axios from "axios";

export default function DesktopWrapper() {
  const [data, setData] = React.useState<null>(null);

  const vercelTpken = "KHhdKV1QLvk8mCWnkGmTwuF1";
  const apiKey =
    "https://api-serveless-vercel-nrtq2ff7h-sbaletta23.vercel.app/api/data";

  const headers = {
    method: "GET",
    "Content-Type": "application/json",
    Authorization: `Bearer ${vercelTpken}`,
    "Access-Control-Allow-Origin": "*",
  };

  const connectVercelServeless = async () => {
    await axios
      .get(apiKey, { headers })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    connectVercelServeless();
  }, []);
  console.log(data);

  return (
    <React.Fragment>
      <CssBaseline />
      <WrapperContainer>
        <DashboardComponent />
      </WrapperContainer>
    </React.Fragment>
  );
}
