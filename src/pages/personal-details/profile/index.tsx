import { Grid } from "@mui/material";
import ProfilePreview from "@/sections/personal-details/profile-preview/ProfilePreview";
import React from "react";

const Profile = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={4}>
        <ProfilePreview />
      </Grid>
    </Grid>
  );
};

export default Profile;
