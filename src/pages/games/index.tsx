import * as React from "react";
import { Box, Paper, Button, Typography, Grid } from "@mui/material";
import { images } from "../../data/products-data";
import { useTheme } from "@emotion/react";

//--------------------------------------------------------------
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";

function Games() {
  const router = useRouter();
  const theme: any = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Grid
      container
      justifyContent={"space-around"}
      minHeight="80vh"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "10em", md: "0em" },
        alignItems: { md: "center", xs: "space-between" },
      }}
    >
      <Grid>
        <h1
          style={{
            textAlign: "center",
            transform: "rotate(-45deg)",
            color: theme.palette.primary.main,
          }}
        >
          Games To Look for
        </h1>
      </Grid>
      <Grid>
        <Box
          className="subBox"
          sx={{
            maxWidth: 900,
            flexGrow: 1,
            margin: "auto",
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.dark",
            }}
          >
            <Typography textAlign="center">
              {images[activeStep].label}
            </Typography>
          </Paper>

          <Box
            component="img"
            sx={{
              cursor: "pointer",
              height: 500,
              display: "block",
              maxWidth: 900,
              margin: "auto",
              overflow: "hidden",
              width: "100%",
              boxSizing: "border-box",
              // "&:hover": {
              //   width: "99%",
              //   height: "99%",
              //   border: "2px solid gray",
              // },
            }}
            src={images[activeStep].imgPath}
            alt={images[activeStep].label}
            onClick={() => router.push(`/games/${images[activeStep].path}`)}
          />
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ background: theme.palette.background.dark }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Games;
