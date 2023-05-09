import { useState } from "react";
// @mui
import { Box, Grid, useTheme } from "@mui/material";
// components
import Topnavbar from "./top-navbar/TopNavbar";
import Footer from "./footer/Footer";
import image from "../../assets/bg.png";
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
// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: any) {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
          background: "white",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid sx={{ display: { xs: "none", md: "block" } }}>
            <Topnavbar />
          </Grid>
          <Grid sx={{ display: { md: "none", xs: "block" } }}>abcdefg</Grid>

          <Box sx={styles.childrenStyles(theme)}>{children}</Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
// Styles
const styles = {
  mainBoxStyles: {
    display: "flex",
    position: "relative",
    width: "100%",
  },
  childrenStyles: (theme: any) => ({
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    padding: "0px !important",
    backgroundImage: `url(${image.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      px: theme.spacing(2),
      pb: theme.spacing(5),
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      transition: "0.4s",
      overflowY: "auto",
      pt: theme.spacing(2.5),
      pl: theme.spacing(2.5),
      pr: theme.spacing(3.5),
      pb: theme.spacing(6),
    },
  }),
};
