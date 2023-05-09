// @mui
import { styled } from "@mui/material/styles";
// layouts
import { Grid, useTheme } from "@mui/material";

import Layout from "@/layouts";
// components
import Page from "@/components/Page";
import Spline from "@splinetool/react-spline";
import logo from "../../assets/img/logo_bg.png";
import image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import background from "../../assets/parallax/background.png";
import jungle1 from "../../assets/parallax/jungle1.png";
import jungle2 from "../../assets/parallax/jungle2.png";
import jungle3 from "../../assets/parallax/jungle3.png";
import jungle4 from "../../assets/parallax/jungle4.png";
import jungle5 from "../../assets/parallax/jungle5.png";
import logoLand from "../../assets/parallax/logo_land.png";
import man from "../../assets/parallax/man_on_mountain.png";
import mountains from "../../assets/parallax/mountains.png";
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
          <ParallaxLayer offset={0} speed={0.25}>
            <Grid sx={styles.mainBg}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.27}>
            <Grid sx={styles.secondaryBg}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.1}>
            <Grid sx={styles.bgColor(theme)}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <Grid sx={styles.jungle1}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <Grid sx={styles.jungle2}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <Grid sx={styles.jungle3}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <Grid sx={styles.jungle4}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <Grid sx={styles.jungle5}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <Grid sx={styles.tertiaryBg}></Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <Grid id="games">
              <Games />
            </Grid>
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
  mainBg: {
    backgroundImage: `url(${background.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
  jungle1: {
    backgroundImage: `url(${jungle1.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
  jungle2: {
    backgroundImage: `url(${jungle2.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
  jungle3: {
    backgroundImage: `url(${jungle3.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
  jungle4: {
    backgroundImage: `url(${jungle4.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
  jungle5: {
    backgroundImage: `url(${jungle5.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
  secondaryBg: {
    backgroundImage: `url(${logoLand.src})`,
    backgroundSize: "auto 950px",
    // backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
  },
  tertiaryBg: {
    backgroundImage: `url(${man.src})`,
    backgroundSize: "auto 950px",
    backgroundRepeat: "repeat-x",
    width: "100%",
    height: "1000px",
    backgroundPosition: "bottom center",
  },
};
