import React, { useState } from "react";
import { Box, Paper, Button, Typography, Grid } from "@mui/material";
import { images, productsData } from "../../data/products-data";
import { useTheme } from "@emotion/react";

//--------------------------------------------------------------
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";
import Image from "next/image";
import { red } from "@mui/material/colors";

function Games() {
  const router = useRouter();
  const theme: any = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedGame, setSelectedGame] = useState<any>(productsData[0]);
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
    <Grid container p={3} justifyContent={"center"} minHeight="80vh">
      <Grid
        bgcolor={"rgb(53,169,236,0.5)"}
        boxShadow={"-5px -5px #4B0F2D"}
        p={1}
        borderRadius={3}
        mb={2}
        height="100%"
      >
        <h1
          style={{
            color: "white",
            textShadow:
              "-2px 0 rgb(53,169,236), 0 2px rgb(53,169,236), 2px 0 rgb(53,169,236), 0 -2px rgb(53,169,236)",
          }}
        >
          Our Pride and Joy
        </h1>
        <p style={{ textAlign: "center" }}>Behold the Games</p>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          display={"flex"}
          justifyContent={"space-around"}
          width={"100%"}
        >
          {productsData.map((item: any) => (
            <Grid
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height="120px"
              width="170px"
              borderRadius="100%"
              key={item.id}
            >
              <div style={{ fontWeight: "600", color: "#4B0F2D" }}>
                {selectedGame.id === item.id
                  ? selectedGame?.name
                  : "\u00a0\u00a0"}
              </div>
              <Image
                onClick={() => {
                  setSelectedGame(item);
                }}
                src={item.images[0]}
                alt="Main"
                height={75}
                width={75}
                style={{
                  borderRadius: "50%",
                  border: `2px solid ${
                    selectedGame.id === item.id ? "#4B0F2D" : "rgb(53,169,236)"
                  }`,
                  boxShadow: `-3px -3px 3px ${
                    selectedGame.id === item.id ? "#4B0F2D" : "rgb(53,169,236)"
                  }`,
                  cursor: "pointer",
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4} p={2} mt={2}>
          <Grid
            item
            md={6}
            bgcolor={"rgb(53,169,236,0.5)"}
            boxShadow={"-5px -5px #4B0F2D"}
            borderRadius={3}
          >
            <h1 style={{ textAlign: "center" }}>{selectedGame?.name}</h1>
            <p>{selectedGame?.description}</p>
          </Grid>
          <Grid item md={6} container justifyContent={"center"}>
            <Image
              src={selectedGame?.images?.[1]}
              alt=""
              width={450}
              height={300}
              style={{ borderRadius: "20px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Games;
