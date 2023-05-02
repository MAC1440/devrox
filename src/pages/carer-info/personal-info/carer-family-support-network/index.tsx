import { Box, useTheme } from "@mui/material";
import Page from "@/components/Page";
import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

CarerFamilySupportNetwork.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CarerFamilySupportNetwork() {
  const theme: any = useTheme();

  return (
    <Page title="Carer Family Support Network">
      <Box sx={styles.boxContainer(theme)}>data</Box>
    </Page>
  );
}

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
};
