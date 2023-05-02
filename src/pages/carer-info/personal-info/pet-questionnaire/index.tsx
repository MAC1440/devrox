import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

PetQuestionnaire.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function PetQuestionnaire() {
  return <div>PetQuestionnaire</div>;
}
