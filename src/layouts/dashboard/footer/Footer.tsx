import { Box, Fab, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import { createGradient } from "@/theme/palette";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const theme: any = useTheme();
  const date = new Date();
  let year = date.getFullYear();
  console.log(theme);

  return (
    <Box
      sx={{
        background: createGradient(
          theme.palette.primary.darker,
          theme.palette.primary.lighter
        ),
        display: "flex",
        position: "fixed",
        width: "100%",
        zIndex: "1300",
        bottom: "0px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
        p: 1,
        px: { xs: 1, sm: 2 },
        "& a": {
          textDecoration: "none",
        },
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.primary.contrastText,
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Copyrights © 2023 All rights reserved DEVROX
        </Typography>
      </Box>
      <Box
        sx={{
          // display: { xs: "none", sm: "flex" },
          display: "flex",
          gap: "18px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: theme.palette.primary.contrastText,
          }}
        >
          (+92) - 334 - 5241986
        </Typography>
        <ContactIcons />
      </Box>
    </Box>
  );
};

export default Footer;

const ContactIcons = () => {
  const theme: any = useTheme();
  return (
    <>
      <Fab
        size="small"
        sx={{
          bgcolor: "#25D366",
        }}
        onClick={() => {
          window.open("http://wa.me/+923345241986", "_blank");
        }}
      >
        <WhatsAppIcon />
      </Fab>
      <Fab
        size="small"
        sx={{
          bgcolor: "#1963D1",
        }}
        onClick={() => {
          window.open("http://www.fb.com", "_blank");
        }}
      >
        <FacebookIcon />
      </Fab>
      <Fab
        size="small"
        sx={{
          bgcolor: theme.palette.chart.blue[0],
        }}
        onClick={() => {
          window.open("http://www.twitter.com", "_blank");
        }}
      >
        <TwitterIcon />
      </Fab>
      <Fab
        size="small"
        sx={{
          bgcolor: "#0077B5",
        }}
        onClick={() => {
          window.open("http://www.linkedin.com", "_blank");
        }}
      >
        <LinkedInIcon sx={{ color: "black" }} />
      </Fab>
    </>
  );
};
