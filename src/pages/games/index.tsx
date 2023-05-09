import * as React from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import { images } from "../../data/products-data";
import { useTheme } from "@emotion/react";

//--------------------------------------------------------------
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function Games() {
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
    <>
      <h1 style={{ textAlign: "center" }}>Game-Rox</h1>
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
          <Typography textAlign="center">{images[activeStep].label}</Typography>
        </Paper>
        <Box
        // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        // index={activeStep}
        // onChangeIndex={handleStepChange}
        // enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: "block",
                    maxWidth: 900,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </Box>
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
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  );
}

export default Games;
