import { servicesData } from "@/data/servicesData";
import Layout from "@/layouts";
import { Grid, styled, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const ContentStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));
export default function Services() {
  const theme: any = useTheme();
  return (
    // <Layout>
    <ContentStyle>
      <Grid container>
        {servicesData.map((service: any) => (
          <Grid
            key={service.id}
            md={4}
            flexDirection={"column"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <p
              style={{
                color: theme.palette.primary.main,
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              {service.title}
            </p>
            <Image
              src={service.img.src}
              width={300}
              height={300}
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </Grid>
        ))}
      </Grid>
    </ContentStyle>
    // </Layout>
  );
}
