import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import LeftNavbarList from "./LeftNavbarList";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
export const drawerWidth = 300;

const LeftNavbar = (props: any) => {
  const theme: any = useTheme();
  const { open } = props;

  return (
    <Drawer variant="permanent" open={open}>
      <Box sx={{ minHeight: "100vh" }}>
        <DrawerHeader>
          {open && (
            <Typography color={theme.palette.primary.main}>
              Expanded Logo
            </Typography>
          )}
          {!open && <p>Logo</p>}
        </DrawerHeader>
        {open && <Box sx={{ textAlign: "center", mt: 1.5 }}></Box>}
        <LeftNavbarList open={open} />
      </Box>
    </Drawer>
  );
};

export default LeftNavbar;

//Left Navbar Styling
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    // easing: theme.transitions.easing.sharp,
    duration: "0.4s",
  }),
  overflowX: "hidden",
  overflowy: "auto",
  height: "100%",
  background: theme.palette.grey[800],
  "&::-webkit-scrollbar": {
    width: 4,
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
});
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    // easing: theme.transitions.easing.sharp,
    duration: "0.4s",
  }),
  overflowX: "hidden",
  height: "100%",
  overflowy: "auto",
  "&::-webkit-scrollbar": {
    width: 4.5,
    height: 6,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
  background: theme.palette.grey[800],
  width: `calc(${theme.spacing(-1)} + -2px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + -2px)`,
  },
});
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 0),
  marginTop: "9px",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "11px",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
