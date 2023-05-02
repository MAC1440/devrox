import { ApplicationDetailsForm } from "@/sections/carer-info/personal-info/form-f/application-details";
import { FrontSheetForm } from "@/sections/carer-info/personal-info/form-f/front-sheet";
import { Contact } from "@/sections/carer-info/personal-info/initial-enquiry/contact";
import FirstApplicant from "@/sections/carer-info/personal-info/initial-enquiry/first-applicant/FirstApplicant";
import { OtherDetails } from "@/sections/carer-info/personal-info/initial-enquiry/other-details";
import React from "react";

const Forms = () => {
  return (
    <div>
      {/* <FirstApplicant disabled={false} /> */}
      {/* 
      <Contact disabled={false} />
      <OtherDetails disabled={false} /> */}
      {/* <FrontSheetForm /> */}
      <ApplicationDetailsForm />
    </div>
  );
};

export default Forms;
