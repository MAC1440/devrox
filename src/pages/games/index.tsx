import * as React from "react";
import { styled } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Layout from "@/layouts";
import Page from "@/components/Page";
import Image from "next/image";
import { useRouter } from "next/router";
import { Grid, Box, Paper, Button, Typography } from "@mui/material";
import { images, productsData } from "../../data/products-data";
import { useTheme } from "@emotion/react";

//--------------------------------------------------------------
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

// Games.getLayout = function getLayout(page: any) {
//   return <Layout>{page}</Layout>;
// };
const RootStyle = styled("div")(() => ({
  height: "100%",
}));
// export default function Games() {
//   const router = useRouter();
//   const theme: any = useTheme();
//   return (
//     // <Page title="Home Page">
//     <RootStyle>
//       <Grid container justifyContent={"center"}>
//         {productsData.map((product: any) => (
//           <Grid
//             key={product.id}
//             md={6}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Grid
//               color={theme.palette.primary.main}
//               fontWeight={700}
//               fontSize={25}
//             >
//               {product.name}
//             </Grid>
//             <Grid
//               onClick={() => router.push(`/games/${product.path}`)}
//               width={480}
//               height={270}
//               container
//               justifyContent={"center"}
//               alignItems={"center"}
//               borderRadius={10}
//               sx={{
//                 background: theme.palette.primary.lighter,
//                 cursor: "pointer",
//               }}
//             >
//               <img
//                 src={`${product.images[0].src}`}
//                 alt="abced"
//                 height={250}
//                 width={460}
//                 style={{ borderRadius: "10%" }}
//               />
//             </Grid>
//             <Grid>{product.appStoreLink}</Grid>
//           </Grid>
//         ))}
//       </Grid>
//       <button onClick={() => router.push("/products/1")}>check</button>
//     </RootStyle>
//     // {/* </Page> */}
//   );
// }

// ----------------------------------------------------------------------

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
        {/* <AutoPlaySwipeableViews */}
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
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
        </SwipeableViews>
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
