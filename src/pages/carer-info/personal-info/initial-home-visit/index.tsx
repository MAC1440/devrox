import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

InitialHomeVisit.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function InitialHomeVisit() {
  return <div>InitialHomeVisit</div>;
}
