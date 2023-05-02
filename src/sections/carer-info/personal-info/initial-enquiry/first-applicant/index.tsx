import { RHFCheckbox, RHFSelect, RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@/components/hook-form/RHFDatePicker";
import { fDate } from "@/utils/formatTime";
import dayjs from "dayjs";

const todayDate = dayjs().format("DD/MM/YYYY");
const ageOf18Years = dayjs().subtract(18, "year").format("DD/MMM/YYYY");
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  isJointApplicant: true,
  areaOffice: "USD",
  dateOfEnquiry: new Date(todayDate),
  heardAboutAgency: "USD",
  additionalSourceInfo: "additional Info",
  uploadPhoto: null,
  title: "USD",
  firstName: "Ahmed",
  middleName: "MAC",
  lastName: "Afzal",
  dob: new Date(ageOf18Years),
  age: "30",
  gender: "USD",
  ethnicity: "USD",
  religion: "USD",
  practicingStatus: "USD",
  mobile: "0011",
  email: "abc@yopmail.com",
  bedroomsNumber: "USD",
  residency: "No",
  courtOrders: "No",
};

export const FormSchema = Yup.object().shape({
  // isJointApplicant: Yup.boolean().oneOf(
  //   [true],
  //   "Must Accept Joint Application"
  // ),
  areaOffice: Yup.string().required("Area office is required"),
  dateOfEnquiry: Yup.date().required("Date of Enquiry is required"),
  heardAboutAgency: Yup.string().trim().required("Field is required"),
  additionalSourceInfo: Yup.string().required("Field is required"),
  uploadPhoto: Yup.mixed().required("Photo is is required"),
  // .test(
  //   "fileFormat",
  //   "Unsupported Format",
  //   (value: any) => value && FILE_FORMATS.includes(value.type)
  // )
  // .test(
  //   "fileSize",
  //   `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
  //   (value: any) => value && value.size <= MAX_FILE_SIZE
  // ),
  title: Yup.string().required("Field is required"),
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string().required("Middle name is required"),
  lastName: Yup.string().required("Last name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  age: Yup.number()
    .typeError("Age is required")
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer()
    .moreThan(18, "Age must be greater than or equal to 18")
    .lessThan(120, "Age must be less than or equal to 120"),
  gender: Yup.string().required("Field is required"),
  ethnicity: Yup.string().required("Field is required"),
  religion: Yup.string().required("Field is required"),
  practicingStatus: Yup.string().required("Field is required"),
  mobile: Yup.string().required("Field is required"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
  bedroomsNumber: Yup.string().required("Field is required"),
});
export const formData = [
  //   {
  //     id: 1,
  //     name: "isJointApplicant",
  //     label: "If Joint Applicant, tick the Checkbox",
  //     gridLength: 12,
  //     component: RHFCheckbox,
  //   },
  {
    id: 2,
    componentProps: {
      name: "dateOfEnquiry",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "areaOffice",
      label: "Area Office",
      select: true,
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
    component: RHFSelect,
  },
  {
    id: 4,
    component: RHFSelect,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "heardAboutAgency",
      label: "Where Did you hear about our Agency",
      select: true,
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
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "additionalSourceInfo",
      label: "Additional Source Information",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
export const personalDetails = [
  {
    id: 1,
    componentProps: {
      name: "uploadPhoto",
      label: "Upload Photo",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "title",
      label: "Title",
      select: true,
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
  },
  {
    id: 3,
    componentProps: {
      name: "firstName",
      label: "First Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "lastName",
      label: "Last Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 6,
    componentProps: {
      name: "dob",
      label: "Date of Birth",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 7,
    componentProps: {
      name: "age",
      label: "Age",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "gender",
      label: "Gender",
      select: true,
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
  },
  {
    id: 9,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",

      select: true,
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
  },
  {
    id: 10,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "religion",
      label: "Religion",
      select: true,
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
  },
  {
    id: 11,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "practicingStatus",
      label: "Practicing Status",
      select: true,
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
  },
  {
    id: 12,
    componentProps: {
      name: "mobile",
      label: "Mobile",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 13,
    componentProps: {
      name: "email",
      label: "Email",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 14,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      name: "bedroomsNumber",
      label: "How many spare bedrooms do you have?",
      select: true,
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
  },
];
export { default as FirstApplicant } from "./FirstApplicant";
