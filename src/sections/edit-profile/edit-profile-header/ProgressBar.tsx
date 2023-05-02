import { Grid } from "@mui/material";

const ProgressBar = () => {
  return (
    <Grid container>
      <Grid
        container
        justifyContent="center"
        sx={{
          borderRadius: "20px",
          width: "70%",
          backgroundColor: "#0E918C",
          color: "white",
        }}
      >
        70%
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
