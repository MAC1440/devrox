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
        <Parallax pages={3} style={{ height: "100vh", padding: "none" }}>
          <ParallaxLayer offset={0} speed={0.1} factor={2}></ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.7}>
            <Grid sx={styles.foreground} id="home">
              <Grid sx={styles.content} textAlign={"center"}>
                <h1
                  style={{
                    color: "brown",
                    textShadow:
                      "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                  }}
                >
                  Welcome to Gamers Spa
                </h1>
                <h3>Every Game Matters</h3>
                <p>
                  Take your shot, take a leap and dive right into casual realm
                  and relax. Game ON.
                </p>
              </Grid>
            </Grid>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1.2}>
            <Grid sx={styles.boulder}></Grid>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.25}>
            <Grid id="games">
              <Games />
            </Grid>{" "}
          </ParallaxLayer>
          {/*
          <ParallaxLayer offset={2} speed={0.25}>
             <Grid id="services">
              <Services />
            </Grid> 
          </ParallaxLayer>
            */}
          <ParallaxLayer offset={2} speed={0.25}>
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
  content: {
    background: "rgb(136,136,136,0.5)",
    width: "40%",
    height: "auto",
    position: "relative",
    borderRadius: "20px",
    padding: "10px",
    top: "15%",
    left: "2%",
  },
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
