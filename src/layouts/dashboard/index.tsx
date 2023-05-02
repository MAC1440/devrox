import { useState } from "react";
// @mui
import { Box, useTheme } from "@mui/material";
// components
import LeftNavbar from "./left-navbar/LeftNavbar";
import Topnavbar from "./top-navbar/TopNavbar";
import Footer from "./footer/Footer";
// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const handleDrawer = () => (open ? setOpen(false) : setOpen(true));

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
        <LeftNavbar open={open} />

        <Box sx={{ width: "100%" }}>
          <Topnavbar handleDrawer={handleDrawer} />
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
