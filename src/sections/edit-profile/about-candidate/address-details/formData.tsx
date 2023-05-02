import * as Yup from "yup";

export const FormValues = {
  previousExp: "I am previousExp",
  motivitaion: new Date(),
  impactOfTask: "I am impactOfTask",
  SkilledOffer: "I am SkilledOffer",
  knowledge: "I am knowledge",
  impactOfTask2: "two",
  testCheck: true,
};

export const FormSchema = Yup.object().shape({
  previousExp: Yup.string()
    .required("PreviousExp is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  motivitaion: Yup.date()
    .typeError("Start date is required")
    .required("Start date is required"),
  impactOfTask: Yup.string().required("impactOfTask is required"),
  impactOfTask2: Yup.string().required("impactOfTask is required"),
  SkilledOffer: Yup.string()
    .required("SkilledOffer is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  knowledge: Yup.string()
    .required("knowledge is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
  testCheck: Yup.boolean().required("That is required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "previousExp",
      label: "",
      fieldHeader: null,
    },
    {
      type: "DATE_PICKER",
      name: "motivitaion",
      label: "",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SELECT",
      name: "impactOfTask",
      label: "",
      fieldHeader: null,
      options: ["Male", "Female"],
    },
    {
      type: "RADIO",
      name: "impactOfTask2",
      label: "",
      fieldHeader: null,
      options: ["one", "two", "three"],
    },
  ],
  [
    {
      type: "TEXT",
      name: "SkilledOffer",
      label: "",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT",
      name: "knowledge",
      label: "",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "CHECKBOX",
      name: "testCheck",
      label: "",
      fieldHeader: <p>Test Header</p>,
    },
  ],
];
