import {
  Box,
  ClickAwayListener,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import React from "react";
import { createGradient } from "@/theme/palette";
import SettingsIcon from "@mui/icons-material/Settings";
import Generalsettings from "../../general-settings/general-settings";
import LeftNavbarList from "../navbar/navbarList";
import Image from "next/image";
import logo from "../../../assets/img/logo_bg.png";

const Topnavbar = () => {
  const theme: any = useTheme();
  const [open, setopen] = React.useState<boolean>();
  const openHander = () => (open === true ? setopen(false) : setopen(true));
  return (
    <ClickAwayListener onClickAway={() => setopen(false)}>
      <Box sx={{ width: "100%" }}>
        <Grid container alignItems={"center"}>
          <Grid xs={12} item>
            <Box
              sx={{
                px: 2,
                // py: 1,
                boxShadow: "0px 1px 16px rgba(0, 0, 0, 0.24)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                background: createGradient(
                  theme.palette.primary.darker,
                  theme.palette.primary.lighter
                ),
              }}
            >
              {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawer}
                edge="start"
              >
                <MenuIcon sx={{ color: "white", fontSize: "24px" }} />
              </IconButton> */}
              <Image
                src={logo}
                width={90}
                height={60}
                alt="logo"
                style={{ borderRadius: "10px" }}
              />
              <LeftNavbarList />

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <IconButton
                  onClick={openHander}
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                >
                  <SettingsIcon sx={{ color: "white", fontSize: "24px" }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Generalsettings openHander={openHander} open={open} />
      </Box>
    </ClickAwayListener>
  );
};

export default Topnavbar;
