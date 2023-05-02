import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

BackupCarer.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function BackupCarer() {
  return <div>BackupCarer</div>;
}
