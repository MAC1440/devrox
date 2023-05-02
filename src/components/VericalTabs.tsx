import * as React from "react";
import { Children, ReactNode, useState, SyntheticEvent } from "react";
import CircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Tabs, Tab, Typography, useTheme, Grid, Box } from "@mui/material";

// ----------------------------------------------------------------------

interface IVERTICALTABSPROPS {
  tabsDataArray: Array<Object>;
  children: ReactNode;
}

// ----------------------------------------------------------------------

function CommonCircularProgress(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={styles.progressBarContainer}>
      <CircularProgress
        variant="determinate"
        thickness={6}
        {...props}
        sx={styles.firstCircularBar}
        size={60}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        thickness={6}
        {...props}
        sx={styles.secondProgressBar(props.value)}
        size={60}
      />
      <Box sx={styles.progressPercentage}>
        <Typography
          variant="subtitle2"
          component="span"
          color={"#ffffff"}
        >{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

export default function VericalTabs({
  tabsDataArray,
  children,
  ...other
}: IVERTICALTABSPROPS) {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const arrayChildren = Children.toArray(children);

  const theme: any = useTheme();

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item xs={12} md={3} width={"100%"}>
        <Tabs
          selectionFollowsFocus
          orientation="vertical"
          variant="scrollable"
          sx={styles.tabRoot}
          TabIndicatorProps={styles.tabIndicator}
          value={value}
          onChange={handleChange}
        >
          {tabsDataArray?.map((item: any) => (
            <Tab
              wrapped
              key={item?.title}
              sx={{ mb: 2 }}
              label={
                <Box sx={styles.tabLabel(item?.background)}>
                  <Typography variant="h5" component="div" color={"#ffffff"}>
                    {item?.title}
                  </Typography>
                  {item?.percentage && (
                    <CommonCircularProgress value={item?.percentage} />
                  )}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={12} md={9}>
        {tabsDataArray?.map((item: any) => (
          <div
            role="tabpanel"
            key={item?.title}
            hidden={value !== item?.index}
            id={`vertical-tabpanel-${item?.index}`}
            aria-labelledby={`vertical-tab-${item?.index}`}
            {...other}
          >
            <Box sx={styles.tabPanelContainer(theme)}>
              <Typography
                variant="h5"
                component="div"
                color={"#ffffff"}
                sx={styles.tabPanelHeader(item?.background)}
              >
                {item?.title}
              </Typography>
              {arrayChildren?.map((child, index) => (
                <Box key={index} sx={{ px: 3 }}>
                  {value === index && child}
                </Box>
              ))}
            </Box>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

// ----------------------------------------------------------------------
// Styles
const styles = {
  progressBarContainer: { position: "relative", display: "inline-flex" },

  firstCircularBar: {
    color: "white",
  },

  secondProgressBar: (value: number) => ({
    color: `${value <= 10 ? "#F6460F" : value <= 50 ? "#FFD704" : "#2CB764"}`,
    position: "absolute",
    left: 0,
    [`& .${circularProgressClasses.circle}`]: {
      strokeLinecap: "round",
    },
  }),

  progressPercentage: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    display: { xs: "block", md: "flex" },
  },

  tabRoot: {
    "& .MuiTab-root": {
      marginRight: "0px !important",
      maxWidth: "unset !important",
      width: "100% !important",
    },
  },

  tabIndicator: {
    sx: { display: "none" },
  },

  tabLabel: (background: string) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background: `${background}`,
    borderRadius: 3,
    padding: "20px",
  }),

  tabPanelContainer: (theme: any) => ({
    background: theme.palette.background.default,
    borderRadius: 3,
    height: { xs: "unset", md: "80vh" },
    boxShadow: theme.shadows[7],
  }),

  tabPanelHeader: (background: string) => ({
    background: `${background}`,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    py: 1,
    pl: 4,
    mb: 1,
  }),
};
