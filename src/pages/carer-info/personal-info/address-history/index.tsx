import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

AddressHistory.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function AddressHistory() {
  return <div>AddressHistory</div>;
}
