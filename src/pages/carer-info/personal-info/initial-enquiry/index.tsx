import HorizaontalTabs from "@/components/HorizaontalTabs";
import Page from "@/components/Page";
import Layout from "@/layouts";
import { Contact } from "@/sections/carer-info/personal-info/initial-enquiry/contact";
import { FirstApplicant } from "@/sections/carer-info/personal-info/initial-enquiry/first-applicant";
import { OtherDetails } from "@/sections/carer-info/personal-info/initial-enquiry/other-details";
import React from "react";

export const INITIALENQUIRYDATA = [
  "First Applicant",
  "Contact",
  "Other Details",
  "Documents",
];

// ----------------------------------------------------------------------

InitialEnquiry.getLayout = function getLayout(page: any) {
  return <Layout variant="dashboard">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function InitialEnquiry() {
  return (
    <Page title="Initial Enquiry">
      <HorizaontalTabs tabsDataArray={INITIALENQUIRYDATA}>
        <FirstApplicant />
        <Contact />
        <OtherDetails />
      </HorizaontalTabs>
    </Page>
  );
}
