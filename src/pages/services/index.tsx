import Layout from "@/layouts";
import { styled } from "@mui/material";
import React from "react";

const ContentStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));
export default function Services() {
  return (
    <Layout>
      <ContentStyle>Services</ContentStyle>
    </Layout>
  );
}
