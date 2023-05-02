import { Grid, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

const EditProfileHeader = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
          MADIha Iffat
        </Typography>
      </Grid>
      <Grid item>
        <p>Here you can see the progress of Madiha Iffat ‘s application.</p>
      </Grid>
      {/* Progress Bar  */}
      <Grid item>
        <ProgressBar />
      </Grid>
      {/* A Line  */}
      <Grid
        item
        sx={{ borderBottom: "1px solid #C4C4C4", margin: "1em" }}
      ></Grid>
      <Grid item container direction="row-reverse" spacing={3}>
        <Grid item>User Type:Senior Supervising Social Worker</Grid>
        <Grid item>User Status: Active</Grid>
      </Grid>
    </Grid>
  );
};

export default EditProfileHeader;
