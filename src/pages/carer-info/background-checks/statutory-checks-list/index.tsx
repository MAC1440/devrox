import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

StatutoryChecksList.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function StatutoryChecksList() {
  return <div>StatutoryChecksList</div>;
}
