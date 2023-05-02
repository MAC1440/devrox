import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../sidebar/Sidebar";

const EditProfileLayout = () => {
  return (
    <Grid container>
      <Grid item sm={4}>
        <Sidebar />
      </Grid>
      <Grid item sm={8}>
        Form Area
      </Grid>
    </Grid>
  );
};

export default EditProfileLayout;
