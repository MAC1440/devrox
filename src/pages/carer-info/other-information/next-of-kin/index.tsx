import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

NextOfKin.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NextOfKin() {
  return <div>NextOfKin</div>;
}
