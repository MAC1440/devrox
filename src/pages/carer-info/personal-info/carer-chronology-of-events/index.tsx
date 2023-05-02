import Layout from "@/layouts";
import React from "react";

// ----------------------------------------------------------------------

CarerChronologyOfEvents.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CarerChronologyOfEvents() {
  return <div>CarerChronologyOfEvents</div>;
}
