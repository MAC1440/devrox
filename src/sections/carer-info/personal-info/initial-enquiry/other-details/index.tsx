import { RHFCheckbox, RHFSelect, RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@/components/hook-form/RHFDatePicker";
import { fData } from "@/utils/formatNumber";

export const defaultValues = {
  comments: "comments",
  ageGroup: "12",
  livingInHousehold: false,
  haveAccessToVehicle: false,
  isSmoker: false,
  willGiveUpWork: "USD",
  medicalConditions: false,
  IHVcriteria: "No",
  IHV: "who knows",
  counselledOut: "counselled",
  relevantExperience: "relevantExperience",
};
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const FormSchema = Yup.object().shape({
  comments: Yup.string().required("required"),
  ageGroup: Yup.string().required("required"),
  livingInHousehold: Yup.boolean().required("required"),
  haveAccessToVehicle: Yup.boolean().required("required"),
  isSmoker: Yup.boolean().required("required"),
  willGiveUpWork: Yup.string().required("required"),
  medicalConditions: Yup.boolean().required("required"),
  IHVcriteria: Yup.string().required("required"),
  IHV: Yup.string().required("required"),
  counselledOut: Yup.string().required("required"),
  relevantExperience: Yup.string().required("required"),
});

export const otherDetailsFormData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    component: RHFTextField,
    otherOptions: {
      name: "ageGroup",
      label: "Age Group",
      fullWidth: true,
    },
  },
  {
    id: 3,
    otherOptions: {
      name: "livingInHousehold",
      label: "Is there anyone else living in household",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 4,
    otherOptions: {
      name: "haveAccessToVehicle",
      label: "Does the Main Carer drive and have access to vehicle",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },

  {
    id: 5,
    otherOptions: {
      name: "isSmoker",
      label: "Does anybody in the household smoke",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 6,
    otherOptions: {
      name: "willGiveUpWork",
      label: "Is the main carer able to give up work:",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
      {
        value: "BTC",
        label: "฿",
      },
      {
        value: "JPY",
        label: "¥",
      },
    ],
  },
  {
    id: 7,
    otherOptions: {
      name: "medicalConditions",
      label: "Any current or previous medical conditions",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 7.5,
    gridLength: 12,
  },
  {
    id: 8,
    otherOptions: {
      name: "IHV",
      label: "If yes , who will complete the IHV?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 9,
    otherOptions: {
      name: "counselledOut",
      label: "Counselled Out reason Details:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
  },
  {
    id: 10,
    otherOptions: {
      name: "relevantExperience",
      label: "Relevant Experience:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
];
export { default as OtherDetails } from "./OtherDetails";
