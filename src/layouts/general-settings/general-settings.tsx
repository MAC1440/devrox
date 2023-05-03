import React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@mui/system";
import useSettings from "@/hooks/useSettings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// -------------------------------------------------------------
// CONSTANTS
const DRAWER_WIDTH = "min(90vw, 450px)";

// -------------------------------------------------------------
// Current Page styled components
const openedMixintwo = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  borderRadius: "10px 0px 0px 10px",
  overflowX: "hidden",
  backgroundColor: theme.palette.background.default,
  zIndex: 300,
  boxShadow: "0px 9px 46px rgba(0, 0, 0, 0.08)",
});

const closedMixintwo = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),

  backgroundColor: theme.palette.background.default,
  zIndex: 300,
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(-1)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 5,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixintwo(theme),
    "& .MuiDrawer-paper": openedMixintwo(theme),
  }),
  ...(!open && {
    ...closedMixintwo(theme),
    "& .MuiDrawer-paper": closedMixintwo(theme),
  }),
}));
// -------------------------------------------------------------

const Generalsettings = (props: any) => {
  const { open, openHander } = props;
  const theme: any = useTheme();
  const {
    themeMode,
    themeColorPresets,
    onResetSetting,
    onChangeMode,
    colorOption,
    onChangeColor,
  } = useSettings();
  const textColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[600]
      : theme.palette.grey[900];

  const btnBgColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[600];

  return (
    <div>
      <Drawer variant="permanent" anchor="right" open={open}>
        {open && (
          <Grid container>
            <Grid item xs={12} sx={{ px: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  py: 1,
                  transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontWeight: "600", color: theme.palette.text.primary }}
                >
                  General settings
                </Typography>
                <Box>
                  <IconButton onClick={onResetSetting}>
                    <RestartAltIcon />
                  </IconButton>
                  <IconButton onClick={openHander}>
                    <ClearIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* color all  */}
              <Box textAlign={"center"} mt={4}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontWeight: "600",
                    color: theme.palette.text.primary,
                    fontSize: "13px",
                  }}
                >
                  COLOR THEME
                </Typography>
              </Box>
              <RadioGroup
                name="themeColorPresets"
                value={themeColorPresets}
                onChange={onChangeColor}
              >
                <Grid container gap={1.5} mt={2} justifyContent={"center"}>
                  {colorOption.map((color: { name: string; value: string }) => {
                    const colorName: any = color.name;
                    const colorValue = color.value;
                    const isSelected = themeColorPresets === colorName;
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Grid item>
                        <FormControlLabel
                          sx={{
                            position: "relative",
                            backgroundColor: isSelected
                              ? colorValue
                              : btnBgColor,
                            borderRadius: 2,
                            outline: 1,
                            outlineStyle: "solid",
                            outlineColor: isSelected
                              ? theme.palette.primary.main
                              : "transparent",
                            minWidth: 100,
                            display: "flex",
                            justifyContent: "center",
                            padding: theme.spacing(0.7),
                            textTransform: "capitalize",
                          }}
                          label={
                            <Typography
                              variant="body1"
                              color="initial"
                              sx={{
                                fontWeight: "700",
                                fontSize: "12px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                color: isSelected
                                  ? theme.palette.common.white
                                  : textColor,
                              }}
                            >
                              <Box
                                component={"span"}
                                sx={{
                                  background: isSelected
                                    ? theme.palette.common.white
                                    : colorValue,
                                  width: 15,
                                  height: 15,
                                  borderRadius: "50%",
                                }}
                              ></Box>
                              {colorName}
                            </Typography>
                          }
                          value={colorName}
                          control={
                            <Radio sx={{ opacity: 0, position: "absolute" }} />
                          }
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </RadioGroup>
              {/* color all  */}
              {/* mode all  */}
              <Box sx={{ mt: 4 }} textAlign={"center"}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontWeight: "600",
                    color: theme.palette.text.primary,
                    fontSize: "13px",
                  }}
                >
                  COLOR MODE
                </Typography>
              </Box>
              <RadioGroup
                name="themeMode"
                value={themeMode}
                onChange={onChangeMode}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px",
                    mt: 2,
                    justifyContent: "center",
                  }}
                >
                  {["dark", "light"].map((mode: any) => {
                    const isSelected = themeMode === mode;
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Grid key={mode} item>
                        <FormControlLabel
                          sx={{
                            position: "relative",
                            background: btnBgColor,
                            borderRadius: 2,
                            Height: 20,
                            minWidth: 80,
                            display: "flex",
                            justifyContent: "center",
                            padding: theme.spacing(0.7),
                            outline: 1,
                            outlineStyle: "solid",
                            outlineColor: isSelected
                              ? theme.palette.primary.main
                              : "transparent",
                            textTransform: "capitalize",
                            "&.MuiFormControlLabel-label": {
                              fontWeight: "800",
                            },
                          }}
                          label={
                            <Typography
                              variant="body1"
                              color="initial"
                              sx={{
                                fontWeight: "600",
                                color: isSelected
                                  ? theme.palette.primary.main
                                  : textColor,
                                fontSize: "10px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              {mode === "light" ? (
                                <LightModeIcon />
                              ) : (
                                <DarkModeIcon />
                              )}
                              {mode}
                            </Typography>
                          }
                          value={mode}
                          control={
                            <Radio
                              sx={{
                                opacity: 0,
                                position: "absolute",
                                fontWeight: 800,
                              }}
                            />
                          }
                        />
                      </Grid>
                    );
                  })}
                </Box>
              </RadioGroup>
              {/* mode all  */}
              {/* orientation all  */}
            </Grid>
          </Grid>
        )}
      </Drawer>
    </div>
  );
};

export default Generalsettings;

// -------------------------------------------------------------
// styles
