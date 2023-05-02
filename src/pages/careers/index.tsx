import Layout from "@/layouts";
import { styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import noJobs from "../../assets/img/noJobs.jpg";
const ContentStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));
export default function Careers() {
  return (
    <Layout>
      <ContentStyle>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={noJobs}
            alt="Picture of the author"
            width={1200}
            height={844}
          />
        </div>
      </ContentStyle>
    </Layout>
  );
}
