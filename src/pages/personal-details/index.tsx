import { Box, Grid } from "@mui/material";
import About from "@/sections/personal-details/about/About";
import ChangePassword from "@/sections/personal-details/change-password/ChangePassword";
import JobProfile from "@/sections/personal-details/job-profile/JobProfile";
import ViewProfile from "@/sections/personal-details/view-profile/ViewProfile";
import React from "react";

const PersonalDetails = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container rowGap={6} columnSpacing={6}>
        <Grid item xs={12} lg={4}>
          <ViewProfile />
        </Grid>
        <Grid item xs={12} lg={8}>
          <About />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ChangePassword />
        </Grid>
        <Grid item xs={12} lg={8}>
          <JobProfile />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetails;
