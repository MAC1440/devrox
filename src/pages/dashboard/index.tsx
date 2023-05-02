// @mui
import { styled } from "@mui/material/styles";
// layouts
import { useTheme } from "@mui/material";

import Layout from "@/layouts";
// components
import Page from "@/components/Page";
import Spline from "@splinetool/react-spline";
import { TitleWithBreadcrumbs } from "@/components/PageBreadcrumbs";

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
        {/* <TitleWithBreadcrumbs activeLast title="Home Page" /> */}

        <ContentStyle>
          <div
            style={{
              border: "1px solid tomato",
              height: "500px",
              width: "75%",
              margin: "auto",
            }}
          >
            <Spline scene="https://prod.spline.design/qaIECqWBuV4q-TGA/scene.splinecode" />
          </div>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
