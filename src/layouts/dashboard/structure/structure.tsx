import {
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import LeftNavbar from "../left-navbar/LeftNavbar";
import Topnavbar from "../top-navbar/TopNavbar";
import Footer from "../footer/testFooter";
const Structure = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [open, setOpen] = React.useState(false);
  const [rightnavbars, setrightbars] = React.useState(false);
  const handleDrawer = () => (open ? setOpen(false) : setOpen(true));
  const handleDrawerright = () =>
    rightnavbars ? setrightbars(false) : setrightbars(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
        }}
      >
        {/* leftnavabr */}
        <LeftNavbar open={open} />
        {/* topnavbar */}

        <Box sx={{ width: "100%" }}>
          <Topnavbar handleDrawer={handleDrawer} />
          <Box
            sx={{
              [theme.breakpoints.up("xs")]: {
                width: "100%",
              },
              [theme.breakpoints.up("sm")]: {
                width:
                  rightnavbars === true
                    ? "calc(100% - 290px)"
                    : "calc(100% - 65px)",
                transition: "0.4s",
              },
            }}
          >
         
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Structure;
