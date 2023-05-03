// @mui
import { styled } from "@mui/material/styles";
// layouts
import { useTheme } from "@mui/material";

import Layout from "@/layouts";
// components
import Page from "@/components/Page";
import Spline from "@splinetool/react-spline";
import logo from "../../assets/img/logo_bg.png";
import Image from "next/image";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));
// ----------------------------------------------------------------------

Dashboard.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <Page title="Home Page">
      <RootStyle>
        <ContentStyle>
          <div
            style={{
              borderRadius: "20px",
              height: "400px",
              width: "700px",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              src={logo}
              width={130}
              height={100}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />

            {/* <Spline scene="https://prod.spline.design/qaIECqWBuV4q-TGA/scene.splinecode" /> */}
          </div>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
