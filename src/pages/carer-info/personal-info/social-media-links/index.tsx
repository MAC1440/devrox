import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

SocialMediaLinks.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function SocialMediaLinks() {
  return <div>SocialMediaLinks</div>;
}
