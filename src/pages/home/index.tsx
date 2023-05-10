// @mui
import { styled } from "@mui/material/styles";
// layouts
import { Grid, useTheme } from "@mui/material";

import Layout from "@/layouts";
// components
import Page from "@/components/Page";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import background from "../../assets/parallax/background.png";
import foreground from "../../assets/parallax/foreground.png";
import boulder from "../../assets/parallax/boulder.png";
import Games from "../games";
import Services from "../services";
import ContactUs from "../contact-us";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "100%",
  padding: "none",
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
  const theme = useTheme();
  return (
    <Page title="Home Page">
      <RootStyle>
        <Parallax pages={4} style={{ height: "100vh", padding: "none" }}>
          <ParallaxLayer offset={0} speed={0.1} factor={2}></ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.7}>
            <Grid sx={styles.foreground} id="home"></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1.2}>
            <Grid sx={styles.boulder}></Grid>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.25}>
            <Grid id="games">
              <Games />
            </Grid>{" "}
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.25}>
            <Grid id="services">
              <Services />
            </Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.25}>
            <Grid id="contact-us">
              <ContactUs />
            </Grid>
          </ParallaxLayer>
        </Parallax>
      </RootStyle>
    </Page>
  );
}
const styles: any = {
  bgColor: (theme: any) => ({
    backgroundColor: theme.palette.background.default,
  }),
  // backgroundMain: {
  //   backgroundImage: `url(${background.src})`,
  //   backgroundSize: "auto 950px",
  //   backgroundRepeat: "repeat-x",
  //   width: "100%",
  //   height: "100vh",
  // },
  foreground: {
    backgroundImage: `url(${foreground.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
  boulder: {
    backgroundImage: `url(${boulder.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
};
