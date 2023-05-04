import Layout from "@/layouts";
import { useRouter } from "next/router";
import React from "react";
import { productsData } from "../../data/products-data";

export default function SingleProduct() {
  const router = useRouter();
  console.log(productsData.find((i: any) => i.path === router.query.product));
  const product = productsData.find(
    (i: any) => i.path === router.query.product
  );
  return <Layout>{product?.name ?? "No Item Found"}</Layout>;
}
