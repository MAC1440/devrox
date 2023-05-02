import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

ApplicationForm.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ApplicationForm() {
  return <div>ApplicationForm</div>;
}
