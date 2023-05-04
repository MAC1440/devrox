import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Layout from "@/layouts";
import Page from "@/components/Page";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { productsData } from "../../data/products-data";
import { useTheme } from "@emotion/react";
import spotlight from "../../assets/img/spotlight.jpg";
Products.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
const RootStyle = styled("div")(() => ({
  height: "100%",
}));
export default function Products() {
  const router = useRouter();
  const theme: any = useTheme();
  return (
    <Page title="Home Page">
      <RootStyle>
        <Grid>
          {productsData.map((product: any) => (
            <Grid key={product.id}>
              <Grid
                color={theme.palette.primary.main}
                fontWeight={700}
                fontSize={25}
              >
                {product.name}
              </Grid>
              <Grid
                onClick={() => router.push(`/games/${product.path}`)}
                width={480}
                height={270}
                container
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={10}
                sx={{
                  background: theme.palette.primary.lighter,
                  cursor: "pointer",
                }}
              >
                <img
                  src={`${product.images[0].src}`}
                  alt="abced"
                  height={250}
                  width={460}
                  style={{ borderRadius: "10%" }}
                />
              </Grid>
              <Grid>{product.appStoreLink}</Grid>
            </Grid>
          ))}
        </Grid>
        <button onClick={() => router.push("/products/1")}>check</button>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------
