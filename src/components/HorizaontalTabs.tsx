import { useState, Children, SyntheticEvent, ReactNode } from "react";
import { Tabs, Tab, Typography, useTheme, Box } from "@mui/material";

// ----------------------------------------------------------------------

interface IHORIZAONTALTABSPROPS {
  tabsDataArray?: string[];
  children: ReactNode;
}

// ----------------------------------------------------------------------

const HorizaontalTabs = ({
  tabsDataArray,
  children,
}: IHORIZAONTALTABSPROPS) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const arrayChildren = Children.toArray(children);

  const theme: any = useTheme();

  return (
    <Box sx={styles.boxContainer(theme)}>
      <Tabs
        selectionFollowsFocus
        orientation="horizontal"
        variant="scrollable"
        sx={styles.tabRoot}
        TabIndicatorProps={styles.tabIndicator}
        value={value}
        onChange={handleChange}
      >
        {tabsDataArray?.map((title: string) => (
          <Tab
            wrapped
            key={title}
            label={
              <Typography
                variant="subtitle2"
                component="span"
                color={theme.palette.grey[600]}
              >
                {title}
              </Typography>
            }
          />
        ))}
      </Tabs>
      <Box sx={{ pt: 2 }}>
        {arrayChildren?.map((child, index) => (
          <Box key={index}>{value === index && child}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default HorizaontalTabs;

// ----------------------------------------------------------------------
// Styles
const styles = {
  boxContainer: (theme: any) => ({
    width: "100%",
    background: theme.palette.background.default,
    borderRadius: 3,
    px: 2,
    boxShadow: theme.shadows[7],
  }),

  tabRoot: {
    borderBottom: 1,
    borderColor: "#0e918c4d",
  },

  tabIndicator: {
    sx: { background: "#0E918C" },
  },
};
