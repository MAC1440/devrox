import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

Immunisations.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Immunisations() {
  return <div>Immunisations</div>;
}
