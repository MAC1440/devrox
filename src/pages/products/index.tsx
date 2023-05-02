import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Layout from "@/layouts";
import Page from "@/components/Page";
import { styled } from "@mui/material/styles";
import Image from "next/image";

Products.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
const RootStyle = styled("div")(() => ({
  height: "100%",
}));
export default function Products() {
  return (
    <Page title="Home Page">
      <RootStyle>PRODUCts</RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------
