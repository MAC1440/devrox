import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";
import { createGradient } from "@/theme/palette";
const Footer = () => {
  const theme: any = useTheme();
  const date = new Date();
  let year = date.getFullYear();

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
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            color: theme.palette.primary.contrastText,
          }}
        >
          contact-us@bawajee.co.uk
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
