import Layout from "@/layouts";
import { useRouter } from "next/router";
import React from "react";
import { productsData } from "../../data/products-data";
import { Grid, useTheme } from "@mui/material";

export default function SingleProduct() {
  const theme = useTheme();
  const router = useRouter();
  console.log(productsData.find((i: any) => i.path === router.query.product));
  const game = productsData.find((i: any) => i.path === router.query.game);
  return (
    <Layout>
      {game?.name ?? "No Item Found"}
      <Grid container justifyContent={"center"} gap={2}>
        {game?.images?.map((img: any, i) => (
          <Grid item key={i} md={4}>
            <img
              src={`${img.src}`}
              alt="game img"
              height={250}
              width={460}
              style={{ borderRadius: "10%" }}
            />
          </Grid>
        ))}
      </Grid>
      <Grid sx={{ color: theme.palette.primary.light }} mt={2} px={10}>
        {game?.description}
      </Grid>
    </Layout>
  );
}
