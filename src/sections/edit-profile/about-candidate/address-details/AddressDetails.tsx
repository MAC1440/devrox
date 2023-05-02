import FormGenerator from "../../form-generator/FormGenerator";
import { FormValues, FormSchema, fieldsInfo } from "./formData";

const Assesment = () => {
  const submitClickHand = (data: any) => {
    console.log({ data });
  };
  return (
    <FormGenerator
      FormSchema={FormSchema}
      defaultValues={FormValues}
      fieldsInfo={fieldsInfo}
      submitClickHand={submitClickHand}
    />
  );
};

export default Assesment;
