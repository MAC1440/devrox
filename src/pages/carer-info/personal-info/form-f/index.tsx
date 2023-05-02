import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

FormF.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function FormF() {
  return <div>FormF</div>;
}
